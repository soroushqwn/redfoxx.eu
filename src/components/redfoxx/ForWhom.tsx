import { motion } from "framer-motion";
import { Banknote, Briefcase, Calendar, Cpu, Handshake, TrendingUp } from "lucide-react";

const items = [
  { icon: Cpu, title: "You sell a technical B2B product or service", desc: "SaaS, IT, automation, machinery, intralogistics, or engineering services.", size: "lg" },
  { icon: Banknote, title: "Average deal ≥ €5k", desc: "Every missed meeting is a missed opportunity." },
  { icon: Briefcase, title: "Clear ICP, no time to prospect", desc: "You know who to reach — you just don't have the bandwidth." },
  { icon: Calendar, title: "Meetings, not leads", desc: "No names. No emails. Qualified conversations with decision-makers." },
  { icon: TrendingUp, title: "Ready to scale outbound", desc: "You need the team, tools, and strategy — we become the extension.", size: "lg" },
  { icon: Handshake, title: "Prefer closing over cold calling", desc: "Do what you do best. We fill the top of your funnel." },
];

export const ForWhom = () => {
  return (
    <section id="for-whom" className="relative py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="absolute inset-0 bg-dots opacity-[0.15]" />
      <div className="container relative">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
            Ideal Client
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
            REDFOXX works best for you if...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl border border-border bg-card p-6 hover:bg-secondary transition-colors overflow-hidden ${
                it.size === "lg" ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="relative flex flex-col h-full">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary/20 border border-primary/30 flex items-center justify-center mb-auto">
                  <it.icon className="h-4.5 w-4.5 text-primary-glow" />
                </div>
                <div className="mt-6">
                  <h3 className="font-display font-medium text-lg leading-snug">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
