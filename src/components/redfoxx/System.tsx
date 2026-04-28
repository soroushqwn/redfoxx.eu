import { motion } from "framer-motion";

const steps = [
  { step: "STEP 01", title: "ICP & Account List", desc: "Define your Ideal Client Profile by sector, size, and deal value. Build targeted account lists with data.", tools: ["LinkedIn Sales Nav", "Apollo", "Phantombuster", "Clay", "Findymail", "Prospeo"] },
  { step: "STEP 02", title: "Waterfall Enrichment", desc: "Emails and phone numbers enriched via waterfall. If one source misses, the next fills the gap automatically.", tools: ["Apollo", "Clay", "Prospeo", "Apify", "Findymail", "Lemlist"] },
  { step: "STEP 03", title: "Signals & Personalization", desc: "Detect buying signals — hiring, news, funding, tech-stack changes. Generate personalized openers per contact.", tools: ["Clay", "Claude AI", "Phantombuster", "n8n", "Apollo AI"] },
  { step: "STEP 04", title: "CRM & Data Management", desc: "Pipeline organized, activity tracked, integrated with your stack. Start simple, scale later.", tools: ["HubSpot", "Airtable", "Notion"] },
  { step: "STEP 05", title: "Multichannel Outreach", desc: "Cold emails, LinkedIn messages, and calls from one platform. Email + LinkedIn + phone = higher response.", tools: ["Lemlist", "Instantly", "Smartlead", "Aircall", "LinkedIn"] },
  { step: "STEP 06", title: "Scheduling & Recordings", desc: "Meetings planned, recorded, transcribed. Every call becomes documented info that flows back to your CRM.", tools: ["Calendly", "Fathom", "Google Meet", "Microsoft Teams"] },
  { step: "STEP 07", title: "Automation", desc: "Data sync, automatic follow-ups, repetitive tasks eliminated. Layered on once the core stack runs.", tools: ["n8n", "Zapier", "Claude"] },
];

export const System = () => {
  return (
    <section id="system" className="relative py-24 md:py-32 bg-card/30 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
            The System
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
            How we build your outbound <span className="gradient-text">machine</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Step by step. Tool by tool. The full stack we assemble under the hood.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[140px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative grid md:grid-cols-[140px_1fr] gap-6 md:gap-10"
              >
                {/* Step label */}
                <div className="relative pl-10 md:pl-0">
                  <span className="absolute left-0 md:left-auto md:right-[-17px] top-1.5 h-8 w-8 rounded-full bg-background border-2 border-primary/60 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-ember" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow">
                    {s.step}
                  </span>
                </div>

                {/* Content */}
                <div className="pl-10 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-display font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-2xl">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-[12px] font-mono px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary/40 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-glow/70" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
