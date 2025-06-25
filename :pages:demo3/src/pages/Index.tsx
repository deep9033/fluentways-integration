
import Header from "@/components/Header";
import FluentLogo from "@/components/FluentLogo";
import TimelineSection from "@/components/TimelineSection";
import CardSection from "@/components/CardSection";
import InfoBlocks from "@/components/InfoBlocks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full pt-12 pb-20 bg-gradient-to-br from-white via-accent to-muted"
      >
        <div className="container flex flex-col gap-6 items-center justify-center max-w-3xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-1 w-full">
            <FluentLogo size={70} />
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl text-primary font-bold leading-tight mb-1 text-center">
            Speak better English.
          </h1>
          <h2 className="text-xl sm:text-2xl text-primary font-medium mb-1 text-center">
            In less time than you think.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 text-center font-sans max-w-md">
            Real-life 1-on-1 sessions to build fluency, fast.
          </p>
          <a
            href="#book-demo"
            className="inline-flex items-center px-8 py-3 rounded-2xl font-playfair text-lg font-bold shadow-card bg-brand text-white hover:bg-primary transition hover:scale-105 focus-visible:ring-2 ring-brand ring-offset-2 animate-fade-in"
          >
            Book Demo
          </a>
        </div>
      </section>
      
      {/* How demo works */}
      <TimelineSection />

      {/* Who is this for? */}
      <CardSection />

      {/* Why different */}
      <InfoBlocks />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section
        id="book-demo"
        className="w-full bg-gradient-to-br from-white via-accent to-muted"
        style={{
          paddingTop: "120px",
          paddingBottom: "100px",
        }}
      >
        <div className="container flex flex-col items-center justify-center max-w-3xl mx-auto animate-fade-in">
          <h2
            className="font-dm-serif text-primary text-center text-[2.3rem] sm:text-[2.7rem] font-normal"
            style={{
              lineHeight: 1.35,
              marginBottom: "24px",
            }}
          >
            <span>Better English isn’t a dream.</span>
            <br />
            <span>It’s a decision — and a demo away.</span>
          </h2>
          <div
            className="text-muted-foreground text-center"
            style={{
              fontSize: "20px",
              lineHeight: 1.6,
              marginTop: "32px",
              fontWeight: 500,
              maxWidth: "580px",
            }}
          >
            Join live, 1-on-1 sessions designed to upgrade how you speak — forever.
          </div>
          <a
            href="https://fluentways.com/book"
            className="mt-10 font-inter-bold inline-flex items-center justify-center text-brand bg-white rounded-[40px] shadow-cta transition-all text-[18px] px-[44px] py-4 font-bold"
            style={{
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              borderRadius: "40px",
              padding: "16px 44px",
            }}
          >
            Book Your Demo Class <span className="ml-2">→</span>
          </a>
          <div
            className="text-center text-muted-foreground"
            style={{
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            <span className="hidden sm:inline">Just ₹9. No pressure. Just progress.</span>
            <span className="sm:hidden" style={{ fontSize: "14px" }}>Just ₹9. No pressure. Just progress.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;

