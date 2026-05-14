import { Navbar } from "@/components/redfoxx/Navbar";
import { Hero } from "@/components/redfoxx/Hero";
import { LogoMarquee } from "@/components/redfoxx/LogoMarquee";
import { Problem } from "@/components/redfoxx/Problem";
import { HowItWorks } from "@/components/redfoxx/HowItWorks";
import { ForWhom } from "@/components/redfoxx/ForWhom";
import { Services } from "@/components/redfoxx/Services";
import { System } from "@/components/redfoxx/System";
import { WhyRedfoxx } from "@/components/redfoxx/WhyRedfoxx";
import { CTA, Footer } from "@/components/redfoxx/CTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>REDFOXX — Outbound Sales for Technical B2B</title>
        <meta name="description" content="REDFOXX is the extension of your sales team. Multichannel outbound — cold calling, email, LinkedIn — that books qualified meetings for technical B2B companies." />
        <link rel="canonical" href="https://redfoxx.be/" />
        <meta property="og:title" content="REDFOXX — Outbound Sales for Technical B2B" />
        <meta property="og:description" content="Qualified meetings, straight into your calendar. Multichannel outbound built for technical B2B." />
        <meta property="og:url" content="https://redfoxx.be/" />
      </Helmet>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Problem />
      <HowItWorks />
      <ForWhom />
      <Services />
      <System />
      <WhyRedfoxx />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
