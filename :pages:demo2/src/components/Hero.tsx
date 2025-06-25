
import React from "react";
import { SheenButton } from "./ui/SheenButton";
import { FadeIn } from "./ui/FadeIn";

const BOOKING_LINK = "https://pages.razorpay.com/pl_QVjqHbuT5A7Iy8/view";

export const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[68vh] flex flex-col justify-center items-center bg-gradient-to-b from-accent-soft/80 via-white to-white overflow-hidden px-[5vw] pt-14 pb-10 sm:py-24"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <FadeIn direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-extrabold tracking-tight text-center text-zinc-900 leading-tight mb-5 mt-2 md:mt-4">
            Speak better English.
            <br className="hidden md:block" />
            <span className="text-accent">In less time than you think.</span>
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={140}>
          <p className="max-w-xl text-lg sm:text-2xl text-zinc-600 text-center mb-7 px-1 sm:px-0">
            Not textbook theory. Not boring lessons.<br />
            <span className="inline-block">
              Just real-life English speaking practice.
            </span>
            <br />
            <span className="inline-block">
              With your own <b>1-on-1 trainer.</b>
            </span>
          </p>
        </FadeIn>
        <FadeIn
          direction="up"
          delay={260}
          className="flex flex-col items-center gap-2 w-full"
        >
          <SheenButton
            id="hero-cta-btn"
            className="text-lg sm:text-xl px-7 py-4 sm:px-10 sm:py-4 shadow-xl font-bold border-2 border-accent w-full sm:w-auto"
            onClick={() =>
              window.open(BOOKING_LINK, "_blank", "noopener,noreferrer")
            }
            glow
          >
            Book ₹9 Demo Class
          </SheenButton>
          <span className="text-accent font-medium tracking-wide animate-pulse text-xs mt-3 bg-accent-soft/45 px-3 py-1 rounded-full border border-accent/10">
            Original Price ₹99 — Limited Offer
          </span>
          <span className="text-zinc-500 text-xs mt-1">
            One-time trial. No recurring charges.
          </span>
        </FadeIn>
      </div>
    </section>
  );
};
