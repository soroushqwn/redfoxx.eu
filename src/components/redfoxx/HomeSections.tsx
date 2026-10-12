import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Inbox, Mic, Rocket, Send, Users, Wrench, Cpu, UserCheck, Zap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { pagePath } from "@/seo/site";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">{children}</p>
);

/** "Two services, one sales partner" — equal tiles linking to each service page. */
export const ServicesOverview = () => {
  const { t, lang } = useLang();
  const h = t.home;
  const tiles = [
    { key: "outbound" as const, Icon: Send, tag: h.outboundTag, title: h.outboundTitle, desc: h.outboundDesc },
    { key: "inbound" as const, Icon: Inbox, tag: h.inboundTag, title: h.inboundTitle, desc: h.inboundDesc },
  ];
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Eyebrow>{h.servicesEyebrow}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{h.servicesTitle}</h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">{h.servicesDesc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {tiles.map(({ key, Icon, tag, title, desc }, i) => (
            <motion.a
              key={key}
              href={pagePath(key, lang)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-3xl p-8 overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-ember transition-all"
            >
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary-glow">{tag}</span>
                  <div className="h-11 w-11 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-glow" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl md:text-3xl font-display font-semibold">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                  {h.learnMore}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HOW_ICONS = [Users, Mic, BarChart3, Wrench];

export const HowWeWork = () => {
  const { t } = useLang();
  const h = t.home;
  return (
    <section id="how-we-work" className="relative py-24 md:py-32 border-y border-border bg-card/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{h.howEyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{h.howTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {h.howItems.map((it, i) => {
            const Icon = HOW_ICONS[i % HOW_ICONS.length];
            return (
              <div key={it.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WHY_ICONS = [Cpu, UserCheck, Zap, Rocket];

export const WhyShort = () => {
  const { t } = useLang();
  const h = t.home;
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{h.whyEyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{h.whyTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {h.whyItems.map((it, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <div key={it.title} className="card-glass rounded-2xl p-7">
                <Icon className="h-6 w-6 text-primary-glow" />
                <h3 className="mt-5 text-xl font-display font-semibold">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-12 text-2xl md:text-3xl font-display font-semibold gradient-text">{t.comparison.tagline}</p>
      </div>
    </section>
  );
};
