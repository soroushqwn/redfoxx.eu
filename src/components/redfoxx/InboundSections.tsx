import { ArrowRight, CalendarCheck, ChevronDown, Clock, Repeat, Reply, ShieldCheck, Target, Users } from "lucide-react";
import { useRef } from "react";
import { HeroGrid } from "./HeroGrid";
import { useLang } from "@/i18n/LanguageContext";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">{children}</p>
);

const STEP_ICONS = [Reply, Target, CalendarCheck, Repeat];

export const InboundHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const i = t.inbound;
  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <HeroGrid sectionRef={sectionRef} />
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-ember pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {i.badge}
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-balance leading-[1.02]">
              {i.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">{i.sub}</p>
            <div className="mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-ember transition-transform hover:scale-[1.02]"
              >
                {i.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <ol className="relative space-y-3" aria-label={i.steps.title}>
            {i.steps.items.map((it, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length];
              return (
                <li key={it.title} className="card-glass rounded-2xl p-4 flex items-center gap-4">
                  <span className="h-10 w-10 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <span className="font-display font-semibold">
                    <span className="text-primary font-mono text-xs mr-2">{String(idx + 1).padStart(2, "0")}</span>
                    {it.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

const PROBLEM_ICONS = [Clock, Clock, Reply, Users, ShieldCheck];

export const InboundProblem = () => {
  const { t } = useLang();
  const p = t.inbound.problem;
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{p.title}</h2>
          <p className="mt-5 text-muted-foreground">{p.desc}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.items.map((it, idx) => {
            const Icon = PROBLEM_ICONS[idx % PROBLEM_ICONS.length];
            return (
              <div key={it.title} className="card-glass rounded-2xl p-7">
                <Icon className="h-6 w-6 text-primary-glow" />
                <h3 className="mt-5 text-xl font-display font-semibold">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const InboundSteps = () => {
  const { t } = useLang();
  const s = t.inbound.steps;
  return (
    <section id="how" className="relative py-24 md:py-32 border-y border-border bg-card/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{s.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((it, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <div key={it.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-10 max-w-3xl text-lg text-foreground/90">{s.note}</p>
      </div>
    </section>
  );
};

export const InboundForWhom = () => {
  const { t } = useLang();
  const f = t.inbound.forWhom;
  return (
    <section id="for-whom" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{f.title}</h2>
          <p className="mt-5 text-muted-foreground">{f.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {f.items.map((it) => (
            <div key={it.title} className="card-glass rounded-2xl p-7">
              <h3 className="text-xl font-display font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InboundStart = () => {
  const { t } = useLang();
  const s = t.inbound.start;
  return (
    <section id="start" className="relative py-24 md:py-32 border-y border-border bg-card/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{s.title}</h2>
        </div>
        <ol className="grid md:grid-cols-3 gap-5">
          {s.items.map((it, idx) => (
            <li key={it.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-mono text-primary">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-display font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-lg text-foreground/90">{s.note}</p>
      </div>
    </section>
  );
};

/** FAQ answers are plain text in the HTML (native <details>), so crawlers and AI see them. */
export const InboundFaq = () => {
  const { t } = useLang();
  const f = t.inbound.faq;
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">{f.title}</h2>
        </div>
        <div className="max-w-3xl space-y-3">
          {f.items.map((it) => (
            <details key={it.q} className="group card-glass rounded-2xl px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">
                {it.q}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
