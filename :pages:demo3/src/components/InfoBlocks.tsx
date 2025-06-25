import { UserCheck, Volume2, Globe2 } from "lucide-react";

const blocks = [
  {
    title: "1-on-1 live coaching",
    subtitle: "You’re never on mute.",
    desc: "Every session is personal — real conversations with real trainers.",
    Icon: UserCheck,
  },
  {
    title: "No theory — only real speaking practice",
    subtitle: "You’ll never “just listen.”",
    desc: "You’ll speak, respond, and be corrected in real time.",
    Icon: Volume2,
  },
  {
    title: "Designed for Indian learners",
    subtitle: "Your coach gets your challenges.",
    desc: "Accent, fluency, confidence — we’ve trained speakers just like you.",
    Icon: Globe2,
  },
];

const cardBg = "#FAFAFF";
const cardBorder = "#E6EAF2";
const cardRadius = 20;
const cardPadding = 32;
const cardShadow = "0 6px 20px rgba(0,0,0,0.05)";
const iconBg = "#EDF3FA";

const InfoBlocks = () => (
  <section
    className="w-full"
    id="why-different"
    style={{
      paddingTop: 120,
      paddingBottom: 100,
    }}
  >
    <div className="container max-w-4xl">
      <h2
        className="font-playfair text-2xl sm:text-3xl font-semibold text-primary text-center animate-fade-in"
        style={{ marginBottom: 40 }}
      >
        Why FluentWays is different
      </h2>
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
        style={{
          gap: 40,
        }}
      >
        {blocks.map((b) => (
          <div
            key={b.title}
            className="animate-fade-in"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: cardRadius,
              padding: cardPadding,
              boxShadow: cardShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <b.Icon size={28} className="text-primary" />
            </div>
            <h3
              className="font-sans font-semibold mb-2 mt-0"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 20,
                color: "#1B1F36",
                marginBottom: 8,
                marginTop: 0,
              }}
            >
              {b.title}
            </h3>
            <div
              className="font-sans font-normal text-base mb-1"
              style={{
                color: "#3E445A",
                fontWeight: 500,
                fontSize: 16,
                marginBottom: 6,
                lineHeight: 1.3,
              }}
            >
              {b.subtitle}
            </div>
            <div
              className="font-sans font-normal text-base"
              style={{
                color: "#6C768A",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.6,
                marginBottom: 0,
                marginTop: 2,
              }}
            >
              {b.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoBlocks;
