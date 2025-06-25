
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { DemoSteps } from "../components/DemoSteps";
import { TargetUsers } from "../components/TargetUsers";
import { WhyItWorks } from "../components/WhyItWorks";
import { Curriculum } from "../components/Curriculum";
import { Testimonials } from "../components/Testimonials";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { StickyMobileCTAButton } from "../components/StickyMobileCTAButton";

const Index = () => {
  return (
    <div className="bg-white text-zinc-900 min-h-screen overflow-x-hidden">
      <Header />
      <main className="mt-16 space-y-0">
        <Hero />
        <DemoSteps />
        <TargetUsers />
        <WhyItWorks />
        <Curriculum />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTAButton />
    </div>
  );
};

export default Index;
