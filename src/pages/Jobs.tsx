import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Briefcase, Globe, Home } from "lucide-react";
import { Navbar } from "@/components/redfoxx/Navbar";
import { Footer } from "@/components/redfoxx/CTA";

const RESPONSIBILITIES = [
  "Je voert koude en warme prospectiegesprekken via telefoon, e-mail en LinkedIn. De telefoon is je belangrijkste wapen.",
  "Je werkt met een moderne, datagedreven sales- en AI-technologiestack om leads te vinden, te kwalificeren en op te volgen.",
  "Je helpt meebouwen aan outbound campagnes en de go-to-market (GTM) van onze klanten.",
  "Je voert discovery calls en kwalificeert afspraken die je overdraagt aan de klant.",
  "Je groeit op korte tijd uit tot een vertrouwde commerciële partner van onze klanten.",
];

const REQUIREMENTS = [
  "Je spreekt vloeiend Nederlands en Engels. Beide zijn een must. Frans is een zeer sterke plus.",
  "Je hebt commerciële drive en pakt zonder aarzelen de telefoon.",
  "Je communiceert empathisch en professioneel.",
  "Je werkt zelfstandig, maar voelt je thuis in een team.",
  "Je leert snel en bijt je graag vast in een nieuw vakgebied.",
  "Een technische of industriële achtergrond is een mooie plus, maar geen vereiste. Affiniteit met technologie helpt, want onze klanten zijn technisch.",
];

const BENEFITS = [
  {
    title: "Snelle groei in sales",
    desc: "Een steile leercurve. In korte tijd word je een sterke, zelfstandige salesprofessional.",
  },
  {
    title: "De moderne manier van verkopen",
    desc: "Je leert hoe outbound en go-to-market vandaag echt werken: datagedreven, technisch en met een moderne tech stack.",
  },
  {
    title: "Mentorschap dat telt",
    desc: "Coaching door ervaren technische salesmensen. Geen theorie, wel praktijk.",
  },
  {
    title: "Echte impact",
    desc: "Je werk is meteen zichtbaar en maakt het verschil bij de klant.",
  },
  {
    title: "Een traject, geen jobke",
    desc: "We bouwen een internationaal groeiend salesbedrijf. Jij bouwt mee vanaf het begin.",
  },
];

const PERKS = ["Bedrijfscomputer", "Thuiswerkopties"];

const APPLICATION_QUESTIONS = ["Woon je in of rondom 3200 Aarschot?"];
const LANGUAGES = ["Nederlands (Vereist)", "Engels (Vereist)", "Frans (Vereist)"];

const Jobs = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Head>
        <title>Business Development Representative (BDR) — Jobs bij REDFOXX</title>
        <meta
          name="description"
          content="REDFOXX zoekt een Business Development Representative (BDR) voor B2B outbound sales in Aarschot. Cold calling, e-mail en LinkedIn voor technische B2B-klanten."
        />
        <link rel="canonical" href="https://redfoxx.be/jobs" />
        <meta property="og:title" content="Business Development Representative (BDR) — Jobs bij REDFOXX" />
        <meta
          property="og:description"
          content="Word BDR bij REDFOXX. Cold calling, e-mail en LinkedIn voor technische B2B-klanten. Aarschot, België."
        />
        <meta property="og:url" content="https://redfoxx.be/jobs" />
      </Head>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.06] mask-radial pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-ember opacity-40 pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <Home className="h-3.5 w-3.5" />
              Terug naar home
            </Link>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-5">
              We zoeken · Aarschot
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-balance leading-[1.05]">
              Business Development Representative{" "}
              <span className="gradient-text">(BDR)</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              B2B outbound sales bij REDFOXX — de telefoon is je belangrijkste wapen.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary-glow" />
                Voltijds
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-glow" />
                Aarschot, België
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-glow" />
                Werklocatie: fysiek
              </span>
            </div>

            <div className="mt-10">
              <a
                href="mailto:helena@redfoxx.be?subject=BDR%20sollicitatie%20%E2%80%94%20REDFOXX"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform"
              >
                Solliciteer nu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="card-glass rounded-3xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-balance leading-relaxed">
              REDFOXX helpt technische B2B-bedrijven groeien met outbound sales die
              echt werkt. Geen call center, geen lukrake belrondes. Wij bouwen
              voorspelbare prospectiesystemen en voeren campagnes uit als
              verlengstuk van het salesteam van onze klanten.
            </p>
            <p className="mt-5 text-lg md:text-xl text-balance leading-relaxed">
              We groeien snel, ook over de grenzen. En we zoeken BDR's die mee
              bouwen — niet alleen bellen.
            </p>
            <p className="mt-8 font-display text-2xl md:text-3xl gradient-text">
              We win. You win bigger.
            </p>
          </div>
        </div>
      </section>

      {/* Wat je doet */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            Wat je doet
          </h2>
          <ul className="space-y-4">
            {RESPONSIBILITIES.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur p-5"
              >
                <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-gradient-primary" />
                <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wie je bent */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            Wie je bent
          </h2>
          <ul className="space-y-4">
            {REQUIREMENTS.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur p-5"
              >
                <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-gradient-primary" />
                <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wat wij bieden */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            Wat wij bieden
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6"
              >
                <p className="font-display text-lg md:text-xl mb-2">{b.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary-glow mb-4">
                Voordelen
              </h3>
              <ul className="space-y-2">
                {PERKS.map((p) => (
                  <li key={p} className="text-base text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary-glow mb-4">
                Talen
              </h3>
              <ul className="space-y-2">
                {LANGUAGES.map((l) => (
                  <li key={l} className="text-base text-muted-foreground">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 md:col-span-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary-glow mb-4">
                Sollicitatievragen
              </h3>
              <ul className="space-y-2">
                {APPLICATION_QUESTIONS.map((q) => (
                  <li key={q} className="text-base text-muted-foreground">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-balance">
            Interesse?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Stuur een korte e-mail of bericht. Vertel ons niet wat er op je cv
            staat. Vertel ons waarom jij de telefoon durft pakken.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:helena@redfoxx.be?subject=BDR%20sollicitatie%20%E2%80%94%20REDFOXX"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform"
            >
              <Mail className="h-4 w-4" />
              helena@redfoxx.be
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Jobs;
