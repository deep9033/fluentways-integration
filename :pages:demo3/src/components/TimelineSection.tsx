
import { Calendar, Contact, Book, ArrowUp } from "lucide-react";

const steps = [
  {
    icon: <Book size={28} className="text-brand" />,
    title: "Book your time",
    desc: "Pick a slot that fits your schedule.",
  },
  {
    icon: <Contact size={28} className="text-brand" />,
    title: "Meet your trainer",
    desc: "Connect 1-on-1 with a real English coach.",
  },
  {
    icon: <ArrowUp size={28} className="text-brand rotate-90" />,
    title: "Speak in real time",
    desc: "Practice real conversation, not theory.",
  },
  {
    icon: <Calendar size={28} className="text-brand" />,
    title: "Get your fluency roadmap",
    desc: "Walk away with a custom improvement plan.",
  },
];

const TimelineSection = () => (
  <section
    className="w-full py-20 bg-accent"
    id="how-demo-works"
    aria-label="How the demo class works"
  >
    <div className="container max-w-4xl mx-auto">
      <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-primary text-center mb-10 animate-fade-in">
        How does the demo work?
      </h2>
      {/* Subtle horizontal line container on desktop */}
      <div className="relative hidden md:block w-full h-0 mb-1">
        <div
          className="absolute left-0 right-0 mx-auto w-[92%] h-[1.5px] bg-brand/10 rounded-lg"
          style={{ top: 35, zIndex: 0 }}
          aria-hidden="true"
        />
      </div>
      <ol className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0 border-l-0 md:border-t-0">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className="relative flex flex-row md:flex-col items-start md:items-center group md:w-1/4 pl-3 md:pl-0"
            style={{ zIndex: 2 }}
          >
            {/* Icon with soft glow */}
            <div className="flex-shrink-0 z-10">
              <div className="
                flex items-center justify-center
                w-14 h-14
                rounded-full
                bg-white
                shadow-[0_0_18px_0_rgba(74,108,247,0.13)]
                border border-brand/10
                mb-0 md:mb-6
                mr-4 md:mr-0
                "
                style={{
                  boxShadow: "0 0 18px 0 rgba(74,108,247,0.11), 0 1.5px 8px rgba(74,108,247,0.05)"
                }}
              >
                {step.icon}
              </div>
            </div>
            <div className="flex flex-col">
              <h3
                className="font-sans font-semibold text-lg"
                style={{
                  color: "#1B1F36",
                }}
              >
                {step.title}
              </h3>
              <p
                className="font-sans text-base"
                style={{
                  color: "#3E445A",
                }}
              >
                {step.desc}
              </p>
            </div>
            {/* Connecting lines */}
            {idx !== steps.length - 1 && (
              <>
                {/* Mobile: subtle vertical line */}
                <span
                  className="
                    block absolute left-[34px] top-14 h-10 w-[1.5px] bg-brand/10 md:hidden
                  "
                  aria-hidden="true"
                />
                {/* No direct line on desktop, it's handled by the shared line above */}
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TimelineSection;

