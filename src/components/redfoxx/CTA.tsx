import { ArrowRight, Mail, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import logoMark from "@/assets/redfoxx-mark.png";
import logoLockup from "@/assets/redfoxx-lockup.png";
import { HeroGrid } from "./HeroGrid";

const CALENDLY_URL = "https://calendly.com/soroush-redfoxx/30min";

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
            Let's Talk
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-semibold text-balance leading-[1]">
            Ready to grow <br className="hidden md:block" />
            <span className="gradient-text">together?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Book a free 30-minute intro call. No strings. We'll see if there's a fit and what we can do for you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform"
            >
              Book on Calendly
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="calendly-inline-widget mt-10 mx-auto rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />

          <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <a
              href="mailto:info@redfoxx.be"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 backdrop-blur px-5 py-4 hover:bg-card transition-colors text-left"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                <Mail className="h-4.5 w-4.5 text-primary-glow" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">info@redfoxx.be</p>
              </div>
            </a>
            <a
              href="tel:+32456369848"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 backdrop-blur px-5 py-4 hover:bg-card transition-colors text-left"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                <Phone className="h-4.5 w-4.5 text-primary-glow" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+32 456 36 98 48</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={logoLockup} alt="REDFOXX Sales Solutions" className="h-40 w-auto object-contain" />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} REDFOXX — Outbound sales for technical B2B.
        </p>
      </div>
    </footer>
  );
};
