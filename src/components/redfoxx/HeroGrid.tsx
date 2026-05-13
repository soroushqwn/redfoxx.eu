import { useEffect, useRef } from "react";

/**
 * Sophisticated interlocking puzzle-piece mesh for the hero section.
 * - Each piece's edges interlock with neighbors via shared deterministic tabs.
 * - Pieces drift inward and pulse with scroll progress, and react to the cursor
 *   with a soft displacement field — same motion language as the previous grid.
 * - Respects prefers-reduced-motion.
 */
export const HeroGrid = ({ sectionRef }: { sectionRef: React.RefObject<HTMLElement> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intensityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: number }>({ x: -9999, y: -9999, active: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const CELL = 42;            // piece base size
    const TAB = CELL * 0.22;    // tab knob height

    type Piece = {
      col: number;
      row: number;
      x: number;          // top-left of cell
      y: number;
      cx: number;         // cell center
      cy: number;
      distFromCenter: number;
      ux: number;
      uy: number;
      phase: number;
      phase2: number;
      // tab direction per edge: -1 in, +1 out, 0 flat (boundary)
      top: number;
      right: number;
      bottom: number;
      left: number;
      path: Path2D;
    };

    let pieces: Piece[] = [];
    let dpr = 1;
    let width = 0;
    let height = 0;

    // Deterministic pseudo-random sign for an edge shared by two cells.
    // Both neighbors compute the same value because they pass the same edge key.
    const edgeSign = (a: number, b: number) => {
      // simple hash → -1 or +1
      let h = (a * 73856093) ^ (b * 19349663);
      h = (h ^ (h >>> 13)) >>> 0;
      return (h & 1) === 0 ? 1 : -1;
    };

    // Build a Path2D for one puzzle piece given its corner and tab signs.
    // Edges are walked clockwise: top (L→R), right (T→B), bottom (R→L), left (B→T).
    // For each edge, a positive tab direction means the knob bulges outward
    // (away from the piece's interior).
    const buildPath = (
      x: number,
      y: number,
      top: number,
      right: number,
      bottom: number,
      left: number,
    ): Path2D => {
      const p = new Path2D();
      p.moveTo(x, y);
      drawEdge(p, x, y, x + CELL, y, 0, -1, top);              // top: outward = up
      drawEdge(p, x + CELL, y, x + CELL, y + CELL, 1, 0, right); // right: outward = right
      drawEdge(p, x + CELL, y + CELL, x, y + CELL, 0, 1, bottom); // bottom: outward = down
      drawEdge(p, x, y + CELL, x, y, -1, 0, left);              // left: outward = left
      p.closePath();
      return p;
    };

    // Append one edge from (x1,y1) → (x2,y2) with outward normal (nx,ny) and
    // tab direction d (-1 in, 0 flat, +1 out).
    const drawEdge = (
      p: Path2D,
      x1: number, y1: number,
      x2: number, y2: number,
      nx: number, ny: number,
      d: number,
    ) => {
      if (d === 0) {
        p.lineTo(x2, y2);
        return;
      }
      const dx = x2 - x1;
      const dy = y2 - y1;

      // Edge t-positions for the knob neck and shoulders.
      const tNeckA = 0.38;
      const tNeckB = 0.62;
      const ax = x1 + dx * tNeckA;
      const ay = y1 + dy * tNeckA;
      const bx = x1 + dx * tNeckB;
      const by = y1 + dy * tNeckB;

      // Knob top center (offset along outward normal by TAB * d).
      const mx = x1 + dx * 0.5 + nx * TAB * d;
      const my = y1 + dy * 0.5 + ny * TAB * d;

      // Control point offsets — tangent along edge direction & normal.
      const along = TAB * 0.55;
      const out = TAB * 0.85 * d;

      p.lineTo(ax, ay);
      // First cubic: shoulder → top (curves outward).
      p.bezierCurveTo(
        ax + nx * out,           ay + ny * out,
        mx - (dx / CELL) * along, my - (dy / CELL) * along,
        mx, my,
      );
      // Second cubic: top → opposite shoulder (curves back to edge).
      p.bezierCurveTo(
        mx + (dx / CELL) * along, my + (dy / CELL) * along,
        bx + nx * out,           by + ny * out,
        bx, by,
      );
      p.lineTo(x2, y2);
    };

    const build = () => {
      const rect = section.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / CELL) + 1;
      const rows = Math.ceil(height / CELL) + 1;
      const cxCenter = width / 2;
      const cyCenter = height / 2;
      const maxDist = Math.hypot(cxCenter, cyCenter) || 1;

      pieces = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Tabs are shared with neighbors; sign is deterministic per shared edge.
          // Boundary edges are flat (d = 0).
          const top = r === 0 ? 0 : -edgeSign(c, r);                // matches bottom of (c, r-1)
          const left = c === 0 ? 0 : -edgeSign(c + 1000, r);        // matches right of (c-1, r)
          const right = c === cols - 1 ? 0 : edgeSign(c + 1 + 1000, r);
          const bottom = r === rows - 1 ? 0 : edgeSign(c, r + 1);

          const x = c * CELL;
          const y = r * CELL;
          const cx = x + CELL / 2;
          const cy = y + CELL / 2;
          const ddx = cxCenter - cx;
          const ddy = cyCenter - cy;
          const d = Math.hypot(ddx, ddy);
          const dist = Math.min(1, d / maxDist);

          pieces.push({
            col: c, row: r,
            x, y, cx, cy,
            distFromCenter: dist,
            ux: d > 0.0001 ? ddx / d : 0,
            uy: d > 0.0001 ? ddy / d : 0,
            phase: (c * 13.37 + r * 7.91) % (Math.PI * 2),
            phase2: (c * 5.13 + r * 11.27) % (Math.PI * 2),
            top, right, bottom, left,
            path: buildPath(0, 0, top, right, bottom, left), // local coords; we translate when drawing
          });
        }
      }
    };

    const updateIntensity = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const denom = Math.max(1, rect.height);
      const progress = Math.min(1, scrolled / denom);
      intensityRef.current = Math.min(0.6, progress + 0.15);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.6;
      for (const piece of pieces) {
        const edgeWeight = Math.pow(piece.distFromCenter, 1.4);
        const alpha = 0.05 + edgeWeight * 0.08;
        ctx.strokeStyle = `rgba(14, 40, 65, ${alpha})`;
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.stroke(piece.path);
        ctx.restore();
      }
    };

    const draw = () => {
      const t = performance.now() * 0.0018;
      const intensity = intensityRef.current;
      const mouse = mouseRef.current;
      mouse.active *= 0.96;

      const influenceRadius = 180;
      const influenceRadiusSq = influenceRadius * influenceRadius;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.7;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (const piece of pieces) {
        const pullWave = (Math.sin(t * 1.4 + piece.phase) + 1) / 2;
        const pull = pullWave * piece.distFromCenter * intensity * 14;
        let offsetX = piece.ux * pull;
        let offsetY = piece.uy * pull;

        let mouseBoost = 0;
        if (mouse.active > 0.01) {
          const mdx = piece.cx - mouse.x;
          const mdy = piece.cy - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < influenceRadiusSq) {
            const mDist = Math.sqrt(mDistSq) || 1;
            const falloff = (1 - mDist / influenceRadius) * mouse.active;
            const push = falloff * 22;
            offsetX += (mdx / mDist) * push;
            offsetY += (mdy / mDist) * push;
            mouseBoost = falloff * 0.55;
          }
        }

        const lightWave = (Math.sin(t * 1.6 + piece.phase2) + 1) / 2;
        const edgeWeight = Math.pow(piece.distFromCenter, 1.4);
        const alpha =
          0.06 +
          intensity * edgeWeight * 0.22 +
          lightWave * edgeWeight * intensity * 0.12 +
          mouseBoost;

        const isRed = (piece.distFromCenter > 0.55 && lightWave > 0.85) || mouseBoost > 0.25;
        ctx.strokeStyle = isRed
          ? `rgba(203, 3, 3, ${alpha})`
          : `rgba(14, 40, 65, ${alpha})`;

        ctx.save();
        ctx.translate(piece.x + offsetX, piece.y + offsetY);
        ctx.stroke(piece.path);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onScroll = () => updateIntensity();
    const onResize = () => {
      build();
      if (reduceMotion) drawStatic();
    };
    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = 1;
    };
    const onMouseLeave = () => {
      mouseRef.current.active = 0;
    };

    build();
    updateIntensity();

    if (reduceMotion) {
      drawStatic();
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
};
