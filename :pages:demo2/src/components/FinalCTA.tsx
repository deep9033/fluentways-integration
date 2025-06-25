
import React from "react";
import { SheenButton } from "./ui/SheenButton";
import { FadeIn } from "./ui/FadeIn";
import { Timer } from "lucide-react";
import { useDaily4amTimer } from "./hooks/useDaily4amTimer";

const BOOKING_LINK = "https://pages.razorpay.com/pl_QVjqHbuT5A7Iy8/view";

export const FinalCTA = () => {
  const timer = useDaily4amTimer();

  return (
    <section
      id="cta"
      className="
        relative
        px-[5vw]
        py-16 sm:py-20 md:py-[78px]
        min-h-[480px]
        max-w-2xl mx-auto flex flex-col items-center
        rounded-2xl shadow-accent/10
        bg-gradient-to-tr from-accent-soft/75 to-white
        overflow-hidden
        "
      style={{
        background:
          "radial-gradient(ellipse at 60% 10%, #6366f133 0%, #eef2ff77 66%, #fff 100%)"
      }}
    >
      {/* Headline */}
      <FadeIn direction="up">
        <h2
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-playfair font-extrabold
            text-center
            text-accent
            tracking-tight
            drop-shadow-sm
            leading-tight
            mt-6 mb-8 sm:mt-10 sm:mb-10
            "
          style={{
            letterSpacing: "-0.01em",
            lineHeight: 1.17,
          }}
        >
          Ready to<br />
          <span className="text-zinc-900">
            Speak English<br className="hidden sm:inline" />
            Confidently?
          </span>
        </h2>
      </FadeIn>

      {/* Subheadline */}
      <FadeIn direction="up" delay={120}>
        <div
          className="
            text-lg sm:text-2xl md:text-2xl
            text-zinc-600 text-center
            font-medium px-3 max-w-lg mx-auto
            leading-snug
            mb-14
          "
          style={{
            color: "#3e4662",
            lineHeight: 1.7,
            maxWidth: 520,
            wordSpacing: "0.01em",
          }}
        >
          Book your{" "}
          <span className="text-accent font-bold">₹9 demo class</span>{" "}
          now
          <br />
          <span className="inline-block mt-2 font-normal text-zinc-500 opacity-95">
            <span className="text-xs align-middle">–</span>{" "}
            <span>
              limited-time offer&nbsp;
              <span className="line-through text-zinc-400">₹99</span>
              {" "}original price.
            </span>
          </span>
        </div>
      </FadeIn>

      {/* CTA Button */}
      <FadeIn direction="up" delay={240}>
        <div className="w-full flex justify-center mb-12">
          <SheenButton
            className="
              text-lg md:text-2xl px-12 py-5
              shadow-xl font-bold border-2 border-accent
              w-full sm:w-auto
              transition-transform duration-200 ease-out
              rounded-full
              hover:scale-105 hover:bg-accent/95 hover:text-white
              focus:ring-2 focus:ring-offset-2 focus:ring-accent
              shadow-[0_8px_36px_-8px_#6366f155,0_2px_6px_#b8c9ff22]
              ring-1 ring-accent/20
              tracking-wide
              outline-none
            "
            style={{
              minWidth: 260,
              maxWidth: "100%",
              letterSpacing: ".01em",
            }}
            glow
            onClick={() => window.open(BOOKING_LINK, "_blank", "noopener,noreferrer")}
            aria-label="Book demo class for ₹9"
          >
            Yes, I Want <span className="hidden xs:inline">to Book</span> My ₹9 Demo
          </SheenButton>
        </div>
      </FadeIn>

      {/* Timer Capsule */}
      <FadeIn direction="up" delay={380}>
        <div className="w-full flex justify-center mt-2 sm:mt-3 mb-2">
          <span
            className="
              flex items-center gap-2
              bg-white/95 text-accent
              px-6 sm:px-10 md:px-12
              py-3 sm:py-3.5
              rounded-full border-2 border-accent/25
              shadow-md font-mono
              tracking-wider font-semibold
              select-none transition text-center
              backdrop-blur-sm
              text-base xs:text-lg sm:text-xl
              max-w-full
              "
            style={{
              fontSize: "1.13rem",
              boxShadow: "0 4px 28px -10px #6366f133, 0 2.5px 8px 0 #7a8cff13",
              lineHeight: 1.5,
            }}
          >
            <Timer size={20} className="text-accent/90 -ml-1" aria-hidden="true" />
            <span className="text-zinc-700 mr-2 font-medium whitespace-nowrap">Offer ends in</span>
            <span className="ml-1 tabular-nums font-bold text-accent">{timer}</span>
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

