import { motion } from "framer-motion";
import { AlertCircle, Clock, MailX, Target, UserX, Zap } from "lucide-react";

const problems = [
  { icon: Zap, title: "No systematic outbound", desc: "Growth depends on word-of-mouth and inbound luck." },
  { icon: MailX, title: "Cold email flopped", desc: "You tried it once, got zero replies, gave up." },
  { icon: Clock, title: "No time to prospect", desc: "Can't close deals AND hunt new ones at the same time." },
  { icon: Target, title: "Wrong person, wrong message", desc: "Spray-and-pray that burns your domain reputation." },
  { icon: UserX, title: "Hired a 'sales rep' who doesn't sell", desc: "Now they're doing admin instead of prospecting." },
  { icon: AlertCircle, title: "No pipeline visibility", desc: "You can't tell what works, what doesn't, what's next." },
];

export const Problem = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
            Sound familiar?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            If any of these hit home, you're not alone. Most technical B2B companies
            we talk to are stuck on at least three.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-10 w-10 rounded-lg border border-border bg-secondary flex items-center justify-center mb-5 group-hover:border-primary/50 transition-colors">
                  <p.icon className="h-4.5 w-4.5 text-primary-glow" />
                </div>
                <h3 className="font-display font-medium text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
