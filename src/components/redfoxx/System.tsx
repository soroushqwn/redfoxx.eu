import { motion } from "framer-motion";
import aircall from "@/assets/logos/aircall.png";
import airtable from "@/assets/logos/airtable.png";
import apify from "@/assets/logos/apify.png";
import apollo from "@/assets/logos/apollo.png";
import calendly from "@/assets/logos/calendly.png";
import claude from "@/assets/logos/claude.png";
import clay from "@/assets/logos/clay.png";
import fathom from "@/assets/logos/fathom.png";
import findymail from "@/assets/logos/findymail.png";
import googleMeet from "@/assets/logos/google-meet.png";
import hubspot from "@/assets/logos/hubspot.png";
import instantly from "@/assets/logos/instantly.png";
import lemlist from "@/assets/logos/lemlist.png";
import n8n from "@/assets/logos/n8n.png";
import notion from "@/assets/logos/notion.png";
import phantombuster from "@/assets/logos/phantombuster.webp";
import prospeo from "@/assets/logos/prospeo.png";
import salesNav from "@/assets/logos/sales-nav.png";
import smartlead from "@/assets/logos/smartlead.png";
import teams from "@/assets/logos/teams.png";
import zapier from "@/assets/logos/zapier.png";

type Tool = { name: string; src: string };

const T = {
  salesNav: { name: "LinkedIn Sales Navigator", src: salesNav },
  apollo: { name: "Apollo.io", src: apollo },
  phantombuster: { name: "PhantomBuster", src: phantombuster },
  clay: { name: "Clay", src: clay },
  findymail: { name: "Findymail", src: findymail },
  prospeo: { name: "Prospeo", src: prospeo },
  apify: { name: "Apify", src: apify },
  lemlist: { name: "Lemlist", src: lemlist },
  claude: { name: "Claude", src: claude },
  n8n: { name: "n8n", src: n8n },
  hubspot: { name: "HubSpot", src: hubspot },
  airtable: { name: "Airtable", src: airtable },
  notion: { name: "Notion", src: notion },
  instantly: { name: "Instantly", src: instantly },
  smartlead: { name: "Smartlead", src: smartlead },
  aircall: { name: "Aircall", src: aircall },
  linkedin: { name: "LinkedIn Sales Navigator", src: salesNav },
  calendly: { name: "Calendly", src: calendly },
  fathom: { name: "Fathom", src: fathom },
  googleMeet: { name: "Google Meet", src: googleMeet },
  teams: { name: "Microsoft Teams", src: teams },
  zapier: { name: "Zapier", src: zapier },
} satisfies Record<string, Tool>;

const steps: { step: string; title: string; desc: string; tools: Tool[] }[] = [
  { step: "STEP 01", title: "ICP & Account List", desc: "Define your Ideal Client Profile by sector, size, and deal value. Build targeted account lists with data.", tools: [T.salesNav, T.apollo, T.phantombuster, T.clay, T.findymail, T.prospeo] },
  { step: "STEP 02", title: "Waterfall Enrichment", desc: "Emails and phone numbers enriched via waterfall. If one source misses, the next fills the gap automatically.", tools: [T.apollo, T.clay, T.prospeo, T.apify, T.findymail, T.lemlist] },
  { step: "STEP 03", title: "Signals & Personalization", desc: "Detect buying signals — hiring, news, funding, tech-stack changes. Generate personalized openers per contact.", tools: [T.clay, T.claude, T.phantombuster, T.n8n, T.apollo] },
  { step: "STEP 04", title: "CRM & Data Management", desc: "Pipeline organized, activity tracked, integrated with your stack. Start simple, scale later.", tools: [T.hubspot, T.airtable, T.notion] },
  { step: "STEP 05", title: "Multichannel Outreach", desc: "Cold emails, LinkedIn messages, and calls from one platform. Email + LinkedIn + phone = higher response.", tools: [T.lemlist, T.instantly, T.smartlead, T.aircall, T.linkedin] },
  { step: "STEP 06", title: "Scheduling & Recordings", desc: "Meetings planned, recorded, transcribed. Every call becomes documented info that flows back to your CRM.", tools: [T.calendly, T.fathom, T.googleMeet, T.teams] },
  { step: "STEP 07", title: "Automation", desc: "Data sync, automatic follow-ups, repetitive tasks eliminated. Layered on once the core stack runs.", tools: [T.n8n, T.zapier, T.claude] },
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
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {s.tools.map((t, idx) => (
                      <div
                        key={`${t.name}-${idx}`}
                        title={t.name}
                        className="inline-flex items-center justify-center h-12 w-28 md:w-32 px-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                      >
                        <img
                          src={t.src}
                          alt={t.name}
                          loading="lazy"
                          className="max-h-7 md:max-h-8 max-w-full w-auto object-contain"
                        />
                      </div>
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
