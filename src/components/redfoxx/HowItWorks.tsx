import { motion } from "framer-motion";
import { CalendarCheck, Database, Send } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Database,
    title: "Build",
    desc: "We build your prospect list from zero based on your ICP. Verified emails and phone numbers, ready to contact. Your existing leads become Tier 1.",
    tags: ["ICP research", "Account list", "Waterfall enrichment"],
  },
  {
    num: "02",
    icon: Send,
    title: "Reach",
    desc: "Multichannel outreach — cold email, cold calling, LinkedIn, or a combination. Every contact gets multiple touches across channels until we have a clear answer.",
    tags: ["Cold calls", "Email sequences", "LinkedIn"],
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Book",
    desc: "Qualified meetings land directly in your calendar. Every booking ships with context and qualification notes so you walk in fully prepped.",
    tags: ["Qualified", "Context-rich", "In your calendar"],
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
              Three moves. One qualified <span className="gradient-text">pipeline</span>.
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            A simple loop that compounds — every week we sharpen targeting, messaging, and timing.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-5">
          {/* connecting line */}
          <div className="hidden md:block absolute top-24 left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="border-gradient relative rounded-2xl bg-card/60 backdrop-blur p-7 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative h-14 w-14 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center shadow-ember">
                    <s.icon className="h-6 w-6 text-primary-glow" />
                  </div>
                  <span className="font-mono text-5xl font-bold text-primary/20">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
