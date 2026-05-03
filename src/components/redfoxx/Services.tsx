import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Rocket, Settings2, Target } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Target, Settings2, Rocket, Compass];
const highlights = [false, false, true, false];

export const Services = () => {
  const { t } = useLang();
  const s = t.services;
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
              {s.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
              {s.title}
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            {s.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            const highlight = highlights[i];
            return (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative rounded-3xl p-8 overflow-hidden ${
                  highlight
                    ? "bg-gradient-to-br from-primary/20 via-card to-card border border-primary/40 shadow-ember"
                    : "border border-border bg-card hover:border-primary/30 transition-colors"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary-glow">
                      {item.tag}
                    </span>
                    <div className="h-11 w-11 rounded-xl bg-secondary border border-border flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-glow" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl md:text-3xl font-display font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>

                  <ul className="mt-6 space-y-2.5">
                    {item.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-1.5 h-1 w-4 rounded-full bg-gradient-primary shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group/link">
                    {s.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {s.footer1} <span className="text-foreground">{s.footer2}</span>
        </p>
      </div>
    </section>
  );
};
