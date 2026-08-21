import { useLang } from "@/i18n/LanguageContext";

const clients = [
  { name: "Involv", src: "/clients/involv.png", scale: 1 },
  { name: "Dscribe", src: "/clients/compass-large.svg", scale: 1 },
  { name: "Digimedio", src: "/clients/digimedio.png", scale: 1 },
  { name: "Inku", src: "/clients/inku_tech_cover.jpg", scale: 1 },
  { name: "Fyndera", src: "/clients/fyndera.png", scale: 1 },
  { name: "Saniori", src: "/clients/saniori.png", scale: 0.7 },
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
        <div className="flex marquee-clients w-max items-center">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex gap-12 md:gap-20 shrink-0 pr-12 md:pr-20"
              aria-hidden={set === 1 ? "true" : undefined}
            >
              {clients.map((c) => (
                <div
                  key={`${c.name}-${set}`}
                  className="shrink-0 flex items-center justify-center h-14 md:h-20"
                  title={c.name}
                >
                  <img
                    src={c.src}
                    alt={set === 0 ? c.name : ""}
                    loading="lazy"
                    draggable={false}
                    style={{ transform: `scale(${c.scale})` }}
                    className="h-full w-auto max-w-[160px] md:max-w-[240px] object-contain opacity-70"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
