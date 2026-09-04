import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Briefcase, Globe, Home } from "lucide-react";
import { Navbar } from "@/components/redfoxx/Navbar";
import { Footer } from "@/components/redfoxx/CTA";
import logoLockup from "@/assets/redfoxx-lockup.png";

const RESPONSIBILITIES = [
  "You run cold and warm prospecting conversations via phone, email and LinkedIn. The phone is your most important weapon.",
  "You work with a modern, data-driven sales and AI technology stack to find, qualify and follow up on leads.",
  "You help build outbound campaigns and the go-to-market (GTM) for our clients.",
  "You conduct discovery calls and qualify appointments that you hand over to the client.",
  "You grow into a trusted commercial partner of our clients in a short time.",
];

const REQUIREMENTS = [
  "You speak fluent Dutch and English. Both are a must. French is a very strong plus.",
  "You have commercial drive and pick up the phone without hesitation.",
  "You communicate empathically and professionally.",
  "You work independently, but feel at home in a team.",
  "You learn fast and love to sink your teeth into a new field.",
  "A technical or industrial background is a nice plus, but not a requirement. Affinity with technology helps, since our clients are technical.",
];

const BENEFITS = [
  {
    title: "Fast growth in sales",
    desc: "A steep learning curve. In a short time you become a strong, independent sales professional.",
  },
  {
    title: "The modern way of selling",
    desc: "You learn how outbound and go-to-market really work today: data-driven, technical, and with a modern tech stack.",
  },
  {
    title: "Mentoring that counts",
    desc: "Coaching by experienced technical sales people. No theory, just practice.",
  },
  {
    title: "Real impact",
    desc: "Your work is immediately visible and makes the difference at the client.",
  },
  {
    title: "A journey, not a job",
    desc: "We are building an internationally growing sales company. You build along from the start.",
  },
];

const PERKS = ["Company laptop", "Remote work options"];

const APPLICATION_QUESTIONS = ["Do you live in or around 3200 Aarschot?"];
const LANGUAGES = ["Dutch (Required)", "English (Required)", "French (Required)"];

const Jobs = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Head>
        <title>BDR (B2B Outbound Sales) — Jobs at REDFOXX</title>
        <meta
          name="description"
          content="REDFOXX is hiring a Business Development Representative (BDR) for B2B outbound sales in Aarschot. Cold calling, email and LinkedIn for technical B2B clients."
        />
        <link rel="canonical" href="https://redfoxx.be/jobs" />
        <meta property="og:title" content="BDR (B2B Outbound Sales) — Jobs at REDFOXX" />
        <meta
          property="og:description"
          content="Join REDFOXX as a Business Development Representative. Cold calling, email and LinkedIn for technical B2B clients. Aarschot, Belgium."
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
              Back to home
            </Link>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-5">
              We're hiring · Aarschot
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-balance leading-[1.05]">
              Business Development Representative{" "}
              <span className="gradient-text">(BDR)</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              B2B outbound sales at REDFOXX — the phone is your most important weapon.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary-glow" />
                Full-time
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-glow" />
                Aarschot, Belgium
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-glow" />
                On-site
              </span>
            </div>

            <div className="mt-10">
              <a
                href="mailto:helena@redfoxx.be?subject=BDR%20application%20%E2%80%94%20REDFOXX"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform"
              >
                Apply now
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
              REDFOXX helps technical B2B companies grow with outbound sales that
              actually works. No call center, no random dialing. We build
              predictable prospecting systems and run campaigns as an extension
              of our clients' sales team.
            </p>
            <p className="mt-5 text-lg md:text-xl text-balance leading-relaxed">
              We're growing fast, also across borders. And we're looking for BDRs
              who help build — not just call.
            </p>
            <p className="mt-8 font-display text-2xl md:text-3xl gradient-text">
              We win. You win bigger.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll do */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            What you'll do
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

      {/* Who you are */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            Who you are
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

      {/* What we offer */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            What we offer
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
                Perks
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
                Languages
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
                Application questions
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
            Interested?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Send a short email or message. Don't tell us what's on your CV. Tell
            us why you dare to pick up the phone.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:helena@redfoxx.be?subject=BDR%20application%20%E2%80%94%20REDFOXX"
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
