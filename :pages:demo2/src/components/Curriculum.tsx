import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { Check } from "lucide-react";

const learningPoints = [
  {
    icon: "🎤",
    title: "Speak Fluently",
    subtext: "Talk confidently without searching for words.",
    step: 1,
  },
  {
    icon: "🧠",
    title: "Think in English",
    subtext: "Stop translating in your head — speak naturally.",
    step: 2,
  },
  {
    icon: "💬",
    title: "Handle Real Conversations",
    subtext: "Meetings, interviews, video calls — all covered.",
    step: 3,
  },
  {
    icon: "👂",
    title: "Improve Listening",
    subtext: "Understand accents and respond smoothly.",
    step: 4,
  },
  {
    icon: "💡",
    title: "Build Confidence",
    subtext: "Feel proud when you speak — anytime, anywhere.",
    step: 5,
  },
];

export const Curriculum = () => (
  <section className="relative py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-tl from-accent-soft/80 via-white to-accent-soft/70 overflow-hidden">
    {/* Blurred background effect */}
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[60vw] h-[34vw] max-w-[630px] blur-3xl rounded-full bg-accent/10 opacity-60"
      style={{ zIndex: 0 }}
    />
    <FadeIn direction="up">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-extrabold text-center mb-14 text-zinc-900 tracking-tight">
        What You’ll Learn With FluentWays
      </h2>
    </FadeIn>
    {/* Infographic transformation tiles */}
    <div
      className="
        relative
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-x-8
        gap-y-10
        justify-items-center
        max-w-5xl
        mx-auto
        z-10
      "
    >
      {learningPoints.map((item, i) => {
        const fadeDir =
          (i % 2 === 0 && window.innerWidth > 640)
            ? "left"
            : "right";
        const delay = 140 + i * 190;
        return (
          <FadeIn
            key={item.title}
            direction={fadeDir}
            delay={delay}
            className={`
              flex flex-col items-center text-center rounded-2xl bg-white/90 border border-accent-soft/30 shadow-xl group
              hover:-translate-y-1.5 hover:shadow-2xl transition-transform duration-400 cursor-pointer
              min-h-[275px] sm:min-h-[265px] md:min-h-[310px] w-full max-w-xs 
              pb-6 pt-8 px-5 sm:px-7
              relative
              focus:outline-none
            `}
          >
            {/* Branded Fluent Pillar tag (text-only, no tick icon) */}
            <span className="absolute left-4 top-4 sm:left-5 sm:top-5 flex items-center gap-1 text-xs font-bold uppercase bg-accent-soft/90 text-accent px-2 py-0.5 rounded-full shadow-sm min-w-[80px] tracking-wide border border-accent/15">
              Fluent Pillar #{item.step}
            </span>
            {/* Glowing icon + animated check */}
            <div className="relative flex items-center justify-center mb-4 mt-6">
              {/* Glow bubble */}
              <div className="absolute inset-0 w-14 h-14 m-auto bg-gradient-to-br from-accent/30 via-accent/10 to-accent/0 blur-xl rounded-full scale-125 opacity-60 -z-10" />
              {/* Icon container */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-tl from-accent/70 via-accent/90 to-accent/70 border-2 border-accent-soft shadow-lg text-3xl sm:text-4xl group-hover:scale-105 transition-transform duration-400 select-none relative">
                <span
                  aria-label={item.title}
                  className="z-10"
                  style={{ filter: "drop-shadow(0 2px 4px #6366f133)" }}
                >
                  {item.icon}
                </span>
                {/* Animated check: fade/slide-in when in view */}
                <span
                  className={`
                    absolute -bottom-2 -right-2 
                    bg-white border border-accent/20 rounded-full text-accent shadow-md
                    flex items-center justify-center w-6 h-6
                    animate-fade-up
                  `}
                  style={{ animationDelay: `${delay + 220}ms` }}
                  aria-label="Achieved"
                >
                  <Check size={16} className="stroke-[2.2] text-accent" />
                </span>
              </div>
            </div>
            {/* Main title */}
            <span className="font-semibold text-lg sm:text-xl md:text-2xl text-zinc-900 mb-2">
              {item.title}
            </span>
            {/* Subtext */}
            <span className="text-sm sm:text-base text-zinc-600 font-medium mt-1">
              {item.subtext}
            </span>
          </FadeIn>
        );
      })}
    </div>
    {/* Subtle divider at bottom */}
    <div className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 w-[320px] h-12 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-bl-full blur-xl opacity-50 z-0" />
  </section>
);
