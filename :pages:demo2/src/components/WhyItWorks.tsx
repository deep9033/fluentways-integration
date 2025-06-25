import React, { useEffect, useRef, useState } from "react";
import { FadeIn } from "./ui/FadeIn";

// Timeline milestones data
const milestones = [
  {
    icon: "🧑‍🏫",
    title: "1-on-1 Coaching",
    text: "Get 100% personal attention from real English trainers.",
  },
  {
    icon: "💬",
    title: "No Theory, Just Speaking",
    text: "Zero boring grammar. Only practical, real conversations.",
  },
  {
    icon: "🕒",
    title: "Flexible Timings",
    text: "Book your sessions when it works for you — anytime.",
  },
  {
    icon: "🎯",
    title: "Trusted by",
    text: "10,000+ Learners",
  },
];

export const WhyItWorks = () => {
  const [count, setCount] = useState(9990);
  const seen = useRef(false);

  // Animate the last milestone counter
  useEffect(() => {
    const onScroll = () => {
      if (seen.current) return;
      const el: any = document.getElementById("learners-counter");
      if (el && el.getBoundingClientRect().top < window.innerHeight - 120) {
        seen.current = true;
        let n = 9990;
        const t = setInterval(() => {
          n += Math.floor(Math.random() * 4) + 1;
          setCount(Math.min(n, 10063));
          if (n >= 10060) clearInterval(t);
        }, 22);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative z-10 py-24 px-3 sm:px-8 bg-gradient-to-br from-accent-soft/80 via-white to-accent-soft/70 overflow-visible"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 72% 63% at 55% 12%, #eef2ff 70%, transparent 100%)",
      }}
    >
      {/* Decorative luminous background brush */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-14 w-[590px] h-28 lg:w-[880px] bg-gradient-to-r from-accent/15 via-accent/5 to-transparent blur-2xl rounded-full opacity-80"
        aria-hidden="true"
      />
      <FadeIn direction="up" delay={20}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-extrabold text-center mb-16 sm:mb-20 relative text-zinc-900 tracking-tight">
          <span className="inline-block relative px-2">
            Why
            <span className="mx-2 bg-gradient-to-r from-accent/60 to-accent/90 text-transparent bg-clip-text">
              FluentWays
            </span>
            Actually Works
            <span
              className="absolute left-0 right-0 -bottom-1.5 h-2 bg-accent/10 blur rounded-md"
              aria-hidden="true"
            />
          </span>
        </h2>
      </FadeIn>

      <div className="relative max-w-2xl mx-auto flex flex-col items-center px-2 sm:px-4">
        {/* Central vertical line removed; milestone connectors only below icons now */}

        <ol className="relative z-10 w-full flex flex-col gap-16 sm:gap-20">
          {milestones.map((m, i) => (
            <li
              key={m.title}
              className="relative flex items-center w-full min-h-[88px] group"
            >
              {/* Icon (no connector lines anymore) */}
              <div className="flex flex-col items-center justify-center min-w-[72px] sm:min-w-[94px] mr-2 sm:mr-4 z-20">
                <FadeIn direction="up" delay={80 + i * 160}>
                  <div
                    className={`
                      flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent/80 via-accent/90 to-accent shadow-xl border-4 border-white
                      transition-transform duration-500 relative outline outline-2 outline-accent/10
                      group-hover:scale-105
                      before:absolute before:inset-[-18%] before:rounded-full before:bg-accent/60 before:blur-2xl before:opacity-30
                    `}
                    style={{
                      boxShadow:
                        "0 0 0 3px #dbeafe99, 0 1px 38px 8px #6366f129",
                      animation: `bouncefast 0.7s cubic-bezier(.36,.07,.19,.97) both`,
                      animationDelay: `${130 + i * 120}ms`,
                    }}
                    aria-label={m.title}
                  >
                    <span className="relative z-10 text-white text-2xl sm:text-3xl">
                      {m.icon}
                    </span>
                    {/* Milestone number */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-accent/30 text-accent font-semibold text-xs px-2 py-0.5 rounded-full shadow opacity-90 select-none tracking-wide">
                      {i + 1}
                    </span>
                  </div>
                </FadeIn>
                {/* Connector below icon removed */}
              </div>
              {/* Milestone Text */}
              <FadeIn
                direction="up"
                delay={180 + i * 170}
                className="flex-1 min-w-0 pl-1 sm:pl-3"
                style={{ minHeight: 64 }}
              >
                <div className="font-bold text-lg sm:text-xl md:text-2xl text-zinc-900 mb-1 tracking-tight flex flex-wrap items-center gap-2">
                  {m.title}
                  {/* Learners counter */}
                  {m.title === "Trusted by" && (
                    <span
                      id="learners-counter"
                      className="text-accent text-2xl md:text-3xl font-extrabold ml-1 transition-all"
                    >
                      {count.toLocaleString()}+
                    </span>
                  )}
                </div>
                <div
                  className={
                    m.title === "Trusted by"
                      ? "text-base sm:text-lg text-zinc-600 font-medium"
                      : "text-base sm:text-lg text-zinc-700 font-medium"
                  }
                >
                  {m.title !== "Trusted by" ? (
                    <>{m.text}</>
                  ) : (
                    <span>
                      Students, professionals, parents&nbsp;— everyone sees results.
                    </span>
                  )}
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
      {/* Subtle bottom accent glow */}
      <div
        className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 w-[360px] h-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-bl-full blur-xl opacity-60"
        aria-hidden="true"
      />
    </section>
  );
};
