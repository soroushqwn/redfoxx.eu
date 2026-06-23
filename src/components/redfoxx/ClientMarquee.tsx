import hyperfox from "@/assets/clients/hyperfox.png.asset.json";
import involv from "@/assets/clients/involv.png.asset.json";
import digimedio from "@/assets/clients/digimedio.png.asset.json";
import fyndera from "@/assets/clients/fyndera.png.asset.json";
import saniori from "@/assets/clients/saniori.webp.asset.json";
import { useLang } from "@/i18n/LanguageContext";

const clients = [
  { name: "Hyperfox", src: hyperfox.url },
  { name: "Involv", src: involv.url },
  { name: "Digimedio", src: digimedio.url },
  { name: "Fyndera", src: fyndera.url },
  { name: "Saniori", src: saniori.url },
];

export const ClientMarquee = () => {
  const { t } = useLang();
  return (
    <section className="relative py-12 border-y border-border/60 bg-background">
      <div className="container">
        <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
          {t.clients.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center justify-center h-10 md:h-12" title={c.name}>
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="h-full w-auto max-w-[140px] md:max-w-[170px] object-contain opacity-50 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
