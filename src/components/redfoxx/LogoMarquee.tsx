const tools = [
  "Apollo", "Clay", "HubSpot", "Lemlist", "Instantly", "Smartlead",
  "LinkedIn Sales Nav", "Aircall", "Phantombuster", "Findymail",
  "Notion", "n8n", "Zapier", "Calendly", "Fathom", "Claude",
];

export const LogoMarquee = () => {
  return (
    <section className="relative py-14 border-y border-border bg-card/30">
      <div className="container mb-8">
        <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Built on the modern outbound stack
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-2 text-lg md:text-xl font-display font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
