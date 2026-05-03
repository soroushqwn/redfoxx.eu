import { Navbar } from "@/components/redfoxx/Navbar";
import { Hero } from "@/components/redfoxx/Hero";
import { LogoMarquee } from "@/components/redfoxx/LogoMarquee";
import { Problem } from "@/components/redfoxx/Problem";
import { HowItWorks } from "@/components/redfoxx/HowItWorks";
import { ForWhom } from "@/components/redfoxx/ForWhom";
import { Services } from "@/components/redfoxx/Services";
import { System } from "@/components/redfoxx/System";
import { Stats } from "@/components/redfoxx/Stats";
import { Comparison } from "@/components/redfoxx/Comparison";
import { CTA, Footer } from "@/components/redfoxx/CTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Problem />
      <HowItWorks />
      <ForWhom />
      <Services />
      <System />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
