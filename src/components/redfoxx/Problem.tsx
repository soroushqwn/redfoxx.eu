import { motion } from "framer-motion";
import { AlertCircle, Clock, MailX, Target, UserX, Zap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Zap, MailX, Clock, Target, UserX, AlertCircle];

export const Problem = () => {
  const { t } = useLang();
  const p = t.problem;
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
            {p.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
            {p.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {p.desc}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.items.map((item, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-10 w-10 rounded-lg border border-border bg-secondary flex items-center justify-center mb-5 group-hover:border-primary/50 transition-colors">
                    <Icon className="h-4.5 w-4.5 text-primary-glow" />
                  </div>
                  <h3 className="font-display font-medium text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
