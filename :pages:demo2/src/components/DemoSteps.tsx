
import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Fluency Check",
    desc: "Your trainer will understand your speaking level.",
    icon: <CheckCircle2 className="text-accent" size={28} />,
  },
  {
    title: "Live Practice",
    desc: "Engage in real conversations — no theory, just talking.",
    icon: <CheckCircle2 className="text-accent" size={28} />,
  },
  {
    title: "Feedback & Tips",
    desc: "Get instant corrections and fluency-building techniques.",
    icon: <CheckCircle2 className="text-accent" size={28} />,
  },
  {
    title: "Personal Roadmap",
    desc: "Walk away with a personalized plan for success.",
    icon: <CheckCircle2 className="text-accent" size={28} />,
  },
];

export const DemoSteps = () => (
  <section
    className="relative pt-20 pb-20 sm:pt-24 sm:pb-24 px-[5vw] sm:px-10 bg-gradient-to-br from-accent-soft/80 via-white to-white"
  >
    <FadeIn direction="up">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-extrabold text-center mb-14 text-zinc-900">
        What Happens in Your <span className="text-accent">₹9 Demo Class?</span>
      </h2>
    </FadeIn>
    <div className="max-w-xl mx-auto relative">
      {/* Timeline bar gets a bit thicker for balance */}
      <div className="absolute roadmap-bar left-8 sm:left-12 top-9 bottom-8 w-px bg-gradient-to-b from-accent/30 to-zinc-200 pointer-events-none" aria-hidden />
      <ol className="relative flex flex-col gap-0">
        {steps.map((step, i) => (
          <FadeIn
            key={i}
            direction="up"
            delay={i * 140}
            className="relative z-10"
          >
            <li className={`flex items-start mb-0 ${i < steps.length - 1 ? "pb-12 sm:pb-14" : ""}`}>
              <div className="flex flex-col items-center z-20 mr-7 sm:mr-9">
                {/* Timeline Connector */}
                <span className={`roadmap-dot bg-white border-2 border-accent flex items-center justify-center shadow ${i === 0 ? "mt-1" : ""}`}>
                  {step.icon}
                </span>
                {i < steps.length - 1 && (
                  <span className="roadmap-connector w-px flex-1 bg-gradient-to-b from-accent/30 to-zinc-200 animate-grow-line" />
                )}
              </div>
              <div className={`flex-1 min-w-0 pb-1`}>
                <div className="text-sm font-bold text-accent/90 flex items-baseline gap-2 mb-2">
                  <span className="roadmap-stepnum text-base font-mono">{i + 1}.</span>
                  <span className="font-semibold text-lg sm:text-xl text-zinc-900">{step.title}</span>
                </div>
                <div className="text-zinc-600 text-base mb-4 sm:mb-5">{step.desc}</div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </div>
    <FadeIn direction="up" delay={580}>
      <div className="mt-10 text-center text-zinc-600 font-medium">
        All this in just <span className="text-accent">20 minutes</span> — 1-on-1 with a real trainer.
      </div>
    </FadeIn>
  </section>
);

