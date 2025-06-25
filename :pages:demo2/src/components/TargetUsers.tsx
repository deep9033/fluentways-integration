
import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const users = [
  {
    icon: "👨‍💼",
    title: "Working Professionals",
    summary: "Speak smoothly at work, in meetings & presentations.",
    benefits: [
      "Lead or present confidently in English meetings",
      "Email and talk fluently with clients or colleagues",
      "Speak up in team calls without hesitation",
    ],
  },
  {
    icon: "🧑‍🎓",
    title: "Job Seekers",
    summary: "Ace interviews and confidently answer in English.",
    benefits: [
      "Respond clearly in HR and technical interviews",
      "Make a lasting first impression",
      "Describe projects and skills with ease",
    ],
  },
  {
    icon: "👩‍👧",
    title: "Parents",
    summary: "Speak to teachers, doctors, and community confidently.",
    benefits: [
      "Communicate clearly with school staff",
      "Speak English during parent meetings",
      "Guide your child with confidence",
    ],
  },
  {
    icon: "🧑‍💻",
    title: "Freelancers",
    summary: "Sound professional with international clients.",
    benefits: [
      "Handle Zoom calls without fear",
      "Write and speak clearly during project briefs",
      "Build trust in client interactions",
    ],
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Sales Reps",
    summary: "Close more deals with fluent conversations.",
    benefits: [
      "Pitch products in English smoothly",
      "Handle objections during calls",
      "Build rapport and trust quickly",
    ],
  },
];

export const TargetUsers = () => (
  <section className="py-16 sm:py-20 px-5 sm:px-8 bg-gradient-to-br from-white to-accent-soft/60">
    <FadeIn direction="up">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-extrabold text-center mb-8 text-zinc-900">
        Who Is This Program For?
      </h2>
    </FadeIn>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-2">
      {users.map((u, i) => (
        <FadeIn direction="up" delay={i * 120} key={u.title}>
          <div
            className="
              group relative bg-white/90 rounded-2xl py-9 px-7 shadow-xl 
              border border-accent-soft/30 hover:border-accent transition-all
              hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-accent/20
              flex flex-col gap-3 min-h-[230px] cursor-pointer duration-300
              before:absolute before:inset-0 before:rounded-2xl
              before:border-2 before:border-transparent before:pointer-events-none
              before:transition-all before:duration-300
              hover:before:border-accent
              "
            style={{ overflow: "hidden" }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span
                className="
                  flex items-center justify-center w-12 h-12 rounded-full
                  bg-gradient-to-tr from-accent-soft to-accent/10
                  text-3xl md:text-4xl shadow-inner shrink-0
                  group-hover:scale-110 group-hover:rotate-2 
                  transition-transform duration-500"
                aria-label={u.title}
              >
                {u.icon}
              </span>
              <span className="ml-1 text-lg md:text-xl font-bold group-hover:text-accent transition-colors">
                {u.title}
              </span>
            </div>
            <div className="text-zinc-700 text-[1rem] mb-2">{u.summary}</div>
            <ul className="mt-2 space-y-2 text-zinc-600 text-base pl-0">
              {u.benefits.map((benefit, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle2
                    size={20}
                    className="text-accent mt-0.5 flex-shrink-0"
                    strokeWidth={2.2}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

