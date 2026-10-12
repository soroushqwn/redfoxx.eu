import { Navbar } from "@/components/redfoxx/Navbar";
import { Hero } from "@/components/redfoxx/Hero";
import { ClientMarquee } from "@/components/redfoxx/ClientMarquee";
import { ServicesOverview, HowWeWork, WhyShort } from "@/components/redfoxx/HomeSections";
import { CTA, Footer } from "@/components/redfoxx/CTA";
import { Seo } from "@/seo/Seo";
import { useLang } from "@/i18n/LanguageContext";

/** Umbrella page: outbound + inbound. Detailed outbound content lives on /outbound. */
const Index = () => {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo page="home" lang={lang} />
      <Navbar />
      <Hero variant="home" />
      <ClientMarquee />
      <ServicesOverview />
      <HowWeWork />
      <WhyShort />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
