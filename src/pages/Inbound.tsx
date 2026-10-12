import { Navbar } from "@/components/redfoxx/Navbar";
import { ClientMarquee } from "@/components/redfoxx/ClientMarquee";
import {
  InboundHero,
  InboundProblem,
  InboundSteps,
  InboundForWhom,
  InboundStart,
  InboundFaq,
} from "@/components/redfoxx/InboundSections";
import { CTA, Footer } from "@/components/redfoxx/CTA";
import { Seo } from "@/seo/Seo";
import { useLang } from "@/i18n/LanguageContext";

const Inbound = () => {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo page="inbound" lang={lang} />
      <Navbar />
      <InboundHero />
      <InboundProblem />
      <InboundSteps />
      <ClientMarquee />
      <InboundForWhom />
      <InboundStart />
      <InboundFaq />
      <CTA />
      <Footer />
    </main>
  );
};

export default Inbound;
