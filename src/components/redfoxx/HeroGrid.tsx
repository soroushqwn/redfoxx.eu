import { useEffect, useRef } from "react";

/**
 * Animated grid background for the hero section only.
 * - Edge cells drift inward and pulse, driven by scroll progress within the hero.
 * - Two slow sine waves drive the motion (pull + brightness).
 * - Occasional red edge accents.
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

    const CELL = 30;
    const RECT = 28;
    type Cell = {
      x: number;
      y: number;
      cx: number;
      cy: number;
      distFromCenter: number;
      ux: number;
      uy: number;
      phase: number;
      phase2: number;
    };
    let cells: Cell[] = [];
    let dpr = 1;
    let width = 0;
    let height = 0;

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

      cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL;
          const y = r * CELL;
          const cx = x + CELL / 2;
          const cy = y + CELL / 2;
          const dx = cxCenter - cx;
          const dy = cyCenter - cy;
          const d = Math.hypot(dx, dy);
          const dist = Math.min(1, d / maxDist);
          const ux = d > 0.0001 ? dx / d : 0;
          const uy = d > 0.0001 ? dy / d : 0;
          cells.push({
            x,
            y,
            cx,
            cy,
            distFromCenter: dist,
            ux,
            uy,
            phase: (c * 13.37 + r * 7.91) % (Math.PI * 2),
            phase2: (c * 5.13 + r * 11.27) % (Math.PI * 2),
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
      ctx.lineWidth = 0.5;
      for (const cell of cells) {
        const edgeWeight = Math.pow(cell.distFromCenter, 1.4);
        const alpha = 0.05 + edgeWeight * 0.08;
        ctx.strokeStyle = `rgba(14, 40, 65, ${alpha})`;
        ctx.strokeRect(cell.x, cell.y, RECT, RECT);
      }
    };

    const draw = () => {
      const t = performance.now() * 0.0018;
      const intensity = intensityRef.current;
      const mouse = mouseRef.current;
      // Smoothly fade mouse influence
      mouse.active *= 0.96;

      const influenceRadius = 160;
      const influenceRadiusSq = influenceRadius * influenceRadius;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.5;

      for (const cell of cells) {
        const pullWave = (Math.sin(t * 1.4 + cell.phase) + 1) / 2;
        const pull = pullWave * cell.distFromCenter * intensity * 14;
        let offsetX = cell.ux * pull;
        let offsetY = cell.uy * pull;

        // Mouse interaction: cells within radius get pushed away from cursor
        let mouseBoost = 0;
        if (mouse.active > 0.01) {
          const mdx = cell.cx - mouse.x;
          const mdy = cell.cy - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < influenceRadiusSq) {
            const mDist = Math.sqrt(mDistSq) || 1;
            const falloff = (1 - mDist / influenceRadius) * mouse.active;
            const push = falloff * 18;
            offsetX += (mdx / mDist) * push;
            offsetY += (mdy / mDist) * push;
            mouseBoost = falloff * 0.55;
          }
        }

        const lightWave = (Math.sin(t * 1.6 + cell.phase2) + 1) / 2;
        const edgeWeight = Math.pow(cell.distFromCenter, 1.4);
        const alpha =
          0.05 +
          intensity * edgeWeight * 0.22 +
          lightWave * edgeWeight * intensity * 0.12 +
          mouseBoost;

        const isRed = (cell.distFromCenter > 0.55 && lightWave > 0.85) || mouseBoost > 0.25;
        ctx.strokeStyle = isRed
          ? `rgba(203, 3, 3, ${alpha})`
          : `rgba(14, 40, 65, ${alpha})`;
        ctx.strokeRect(cell.x + offsetX, cell.y + offsetY, RECT, RECT);
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
