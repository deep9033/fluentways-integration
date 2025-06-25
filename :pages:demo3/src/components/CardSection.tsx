import { Contact, Book, Calendar, Youtube } from "lucide-react";

const cards = [
  {
    icon: Contact,
    title: "Professionals",
    desc: "Speak clearly in meetings, interviews, and presentations.",
    bullets: [
      "– Express your ideas confidently in English meetings",
      "– Prepare fluently for interviews and appraisals",
      "– Speak up during client calls without hesitation",
    ],
  },
  {
    icon: Book,
    title: "Parents",
    desc: "Help your child succeed in school, interviews, and life.",
    bullets: [
      "– Support your child’s English at home",
      "– Talk confidently with school teachers or principals",
      "– Prepare your kids for global opportunities",
    ],
  },
  {
    icon: Calendar,
    title: "Students",
    desc: "Ace interviews, competitive exams, and group discussions.",
    bullets: [
      "– Prepare for college and job interviews",
      "– Speak confidently in class and viva exams",
      "– Get ready for IELTS, TOEFL, and GD rounds",
    ],
  },
  {
    icon: Youtube,
    title: "Freelancers",
    desc: "Impress international clients and win better projects.",
    bullets: [
      "– Pitch your services fluently on Zoom or Upwork",
      "– Understand and reply to client emails confidently",
      "– Build long-term trust with international clients",
    ],
  },
];

const iconBg = "bg-[#EDF3FA]";
const cardBorder = "border border-[#E6EAF2]";
const cardBg = "bg-[#FAFAFF]";
const shadow = "shadow-[0_4px_12px_rgba(0,0,0,0.04)]";

const CardSection = () => (
  <section
    className="w-full bg-background"
    id="who-for"
    style={{ paddingTop: 100, paddingBottom: 100 }}
  >
    <div className="container max-w-5xl">
      <h2
        className="font-playfair text-2xl sm:text-3xl font-semibold text-primary text-center mb-10"
        style={{ marginBottom: 40 }}
      >
        Is FluentWays right for you?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`${cardBorder} ${cardBg} ${shadow} rounded-[16px] p-6 flex flex-col items-start`}
              style={{
                padding: 24,
                borderRadius: 16,
                borderColor: "#E6EAF2",
                background: "#FAFAFF",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <span
                  className={`${iconBg} flex items-center justify-center rounded-full mr-0`}
                  style={{
                    width: 48,
                    height: 48,
                    background: "#EDF3FA",
                  }}
                >
                  <Icon size={28} color="#4A6CF7" />
                </span>
              </div>
              <h3
                className="font-sans font-semibold mb-2"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#1B1F36", // Enforce primary hierarchy
                }}
              >
                {card.title}
              </h3>
              <div
                className="mb-5"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#3E445A", // Consistent neutral body color
                  lineHeight: 1.6,
                }}
              >
                {card.desc}
              </div>
              <ul className="pl-0 mt-0 space-y-2 w-full">
                {card.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 300,
                      fontSize: 15,
                      color: "#6C768A",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      className="mr-2"
                      aria-hidden="true"
                      style={{
                        fontSize: 18,
                        lineHeight: "24px",
                        color: "#4A6CF7",
                        fontWeight: 400,
                        position: "relative",
                        top: 2,
                        minWidth: 18,
                        display: "inline-block",
                        textAlign: "center",
                      }}
                    >
                      ✓
                    </span>
                    <span>{bullet.slice(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CardSection;
