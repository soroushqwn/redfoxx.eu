import { Navbar } from "@/components/redfoxx/Navbar";
import { Hero } from "@/components/redfoxx/Hero";
import { ClientMarquee } from "@/components/redfoxx/ClientMarquee";
import { LogoMarquee } from "@/components/redfoxx/LogoMarquee";
import { Problem } from "@/components/redfoxx/Problem";
import { HowItWorks } from "@/components/redfoxx/HowItWorks";
import { ForWhom } from "@/components/redfoxx/ForWhom";
import { Services } from "@/components/redfoxx/Services";
import { System } from "@/components/redfoxx/System";
import { WhyRedfoxx } from "@/components/redfoxx/WhyRedfoxx";
import { CTA, Footer } from "@/components/redfoxx/CTA";
import { Seo } from "@/seo/Seo";
import { useLang } from "@/i18n/LanguageContext";

// Phase 2 turns this into the outbound + inbound umbrella page.
const Index = () => {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo page="home" lang={lang} />
      <Navbar />
      <Hero />
      <ClientMarquee />
      <Problem />
      <HowItWorks />
      <ForWhom />
      <Services />
      <LogoMarquee />
      <System />
      <WhyRedfoxx />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
