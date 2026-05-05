import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import logoLockup from "@/assets/redfoxx-lockup.png";
import soroushPhoto from "@/assets/soroush.jpg";
import helenaPhoto from "@/assets/helena.jpg";
import { HeroGrid } from "./HeroGrid";
import { useLang } from "@/i18n/LanguageContext";

const CALENDLY_URL = "https://calendly.com/soroush-redfoxx/30min";

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const c = t.cta;

  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <HeroGrid sectionRef={sectionRef} />
      <div className="absolute inset-0 bg-gradient-ember opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.07] mask-radial pointer-events-none" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-5">
            {c.eyebrow}
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-semibold text-balance leading-[1]">
            {c.title1} <br className="hidden md:block" />
            <span className="gradient-text">{c.titleAccent}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            {c.desc}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform"
            >
              {c.button}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="calendly-inline-widget mt-10 mx-auto rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a
              href="mailto:info@redfoxx.be"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-primary-glow" />
              info@redfoxx.be
            </a>
            <a
              href="tel:+32456369848"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-primary-glow" />
              +32 456 36 98 48
            </a>
            <a
              href="https://www.linkedin.com/company/redfoxx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5 text-primary-glow" />
              {c.connectCompany}
            </a>
            <a
              href="https://www.linkedin.com/in/soroush-qanawizian/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <span className="relative inline-block">
                <img
                  src={soroushPhoto}
                  alt="Soroush"
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-border group-hover:ring-primary transition-all"
                />
                <Linkedin className="absolute -bottom-1 -right-1 h-2.5 w-2.5 p-0.5 rounded-full bg-background text-primary-glow" />
              </span>
              {c.connectSoroush}
            </a>
            <a
              href="https://www.linkedin.com/in/helena-m-a38414103/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <span className="relative inline-block">
                <img
                  src={helenaPhoto}
                  alt="Helena"
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-border group-hover:ring-primary transition-all"
                />
                <Linkedin className="absolute -bottom-1 -right-1 h-2.5 w-2.5 p-0.5 rounded-full bg-background text-primary-glow" />
              </span>
              {c.connectHelena}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={logoLockup} alt="REDFOXX Sales Solutions" className="h-40 w-auto object-contain" />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};
