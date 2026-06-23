import hyperfox from "@/assets/clients/hyperfox.png.asset.json";
import involv from "@/assets/clients/involv.png.asset.json";
import digimedio from "@/assets/clients/digimedio.png.asset.json";
import fyndera from "@/assets/clients/fyndera.png.asset.json";
import saniori from "@/assets/clients/saniori.webp.asset.json";
import { useLang } from "@/i18n/LanguageContext";

const clients = [
  { name: "Hyperfox", src: hyperfox.url, scale: 1.3 },
  { name: "Involv", src: involv.url, scale: 1.3 },
  { name: "Digimedio", src: digimedio.url, scale: 1.3 },
  { name: "Fyndera", src: fyndera.url, scale: 1 },
  { name: "Saniori", src: saniori.url, scale: 0.8 },
];

export const ClientMarquee = () => {
  const { t } = useLang();
  return (
    <section className="relative py-14 border-y border-border bg-card/30">
      <div className="container mb-10">
        <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
          {t.clients.label}
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex marquee gap-8 md:gap-16 whitespace-nowrap items-center">
          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center h-10 md:h-14"
              title={c.name}
            >
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                style={{ transform: `scale(${c.scale})` }}
                className="h-full w-auto max-w-[120px] md:max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
