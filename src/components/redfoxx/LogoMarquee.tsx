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
import hunter from "@/assets/logos/hunter.png";
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

const tools = [
  { name: "Apollo.io", src: apollo },
  { name: "Clay", src: clay },
  { name: "HubSpot", src: hubspot },
  { name: "Lemlist", src: lemlist },
  { name: "Instantly", src: instantly },
  { name: "Smartlead", src: smartlead },
  { name: "LinkedIn Sales Navigator", src: salesNav },
  { name: "Aircall", src: aircall },
  { name: "PhantomBuster", src: phantombuster },
  { name: "Findymail", src: findymail },
  { name: "Hunter", src: hunter },
  { name: "Prospeo", src: prospeo },
  { name: "Apify", src: apify },
  { name: "Notion", src: notion },
  { name: "Airtable", src: airtable },
  { name: "n8n", src: n8n },
  { name: "Zapier", src: zapier },
  { name: "Calendly", src: calendly },
  { name: "Google Meet", src: googleMeet },
  { name: "Microsoft Teams", src: teams },
  { name: "Fathom", src: fathom },
  { name: "Claude", src: claude },
];

import { useLang } from "@/i18n/LanguageContext";

export const LogoMarquee = () => {
  const { t } = useLang();
  return (
    <section className="relative py-14 border-y border-border bg-card/30">
      <div className="container mb-10">
        <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
          {t.marquee.label}
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex marquee gap-8 md:gap-16 whitespace-nowrap items-center">
          {[...tools, ...tools].map((t, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center h-10 md:h-14"
              title={t.name}
            >
              <img
                src={t.src}
                alt={t.name}
                loading="lazy"
                className="h-full w-auto max-w-[120px] md:max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
