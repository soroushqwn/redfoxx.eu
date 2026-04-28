import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Rocket, Settings2, Target } from "lucide-react";

const services = [
  {
    tag: "Foundation",
    icon: Target,
    title: "List Building & ICP Research",
    desc: "We map your total addressable market, define your ICP, and build a verified prospect list with emails and phone numbers.",
    items: ["ICP definition & market research", "Account list build", "Contact enrichment", "Tier-based prioritization"],
  },
  {
    tag: "Infrastructure",
    icon: Settings2,
    title: "Outbound System Setup",
    desc: "We build your outbound engine from zero. Email infrastructure, sequences, scripts, LinkedIn workflows, and signal-based routing.",
    items: ["Email domain & inbox setup", "Cold email sequences & copy", "Call scripts & objection handling", "Buying-signal prioritization"],
  },
  {
    tag: "Done For You",
    icon: Rocket,
    title: "Full Outbound Execution",
    desc: "We run the entire outbound motion. Cold calling as primary, email follow-up, LinkedIn. Weekly Notion reports + recordings.",
    items: ["Cold calling campaigns", "Personalized email follow-up", "LinkedIn outreach", "Weekly KPI dashboard"],
    highlight: true,
  },
  {
    tag: "Advisory",
    icon: Compass,
    title: "Outbound Coaching & Audit",
    desc: "Already have a sales team? We audit your outbound, identify what isn't working, and coach your reps on calling, copy, and sequencing.",
    items: ["Full outbound audit", "ICP & messaging review", "Cold call live coaching", "1-on-1 sessions with SDRs"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
              What we do for you.
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            Every engagement is custom. No fixed packages — we build a proposal around your ICP, market, and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative rounded-3xl p-8 overflow-hidden ${
                s.highlight
                  ? "bg-gradient-to-br from-primary/20 via-card to-card border border-primary/40 shadow-ember"
                  : "border border-border bg-card hover:border-primary/30 transition-colors"
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
              )}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary-glow">
                    {s.tag}
                  </span>
                  <div className="h-11 w-11 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary-glow" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl md:text-3xl font-display font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 h-1 w-4 rounded-full bg-gradient-primary shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group/link">
                  Request a proposal
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All tools covered by REDFOXX. <span className="text-foreground">Zero extra tool costs for clients.</span>
        </p>
      </div>
    </section>
  );
};
