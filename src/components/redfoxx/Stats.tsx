import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const values = [
  { value: 340, suffix: "+" },
  { value: 12.4, suffix: "%" },
  { value: 28, suffix: "%" },
  { value: 5, suffix: "x" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const isFloat = value % 1 !== 0;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(isFloat ? +(value * eased).toFixed(1) : Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n}{suffix}</span>;
};

export const Stats = () => {
  const { t } = useLang();
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary/40 p-10 md:p-14 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-glow/10 blur-[120px]" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {values.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-6xl font-display font-semibold gradient-text">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{t.stats.items[i].label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
