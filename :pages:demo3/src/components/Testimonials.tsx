
const testimonials = [
  {
    name: "Rakesh P.",
    photo:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=128&h=128&facepad=1",
    quote:
      "From the very first session, I felt heard.\nNow I speak with more clarity and confidence — even in meetings.",
  },
  {
    name: "Shruti S.",
    photo:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=128&h=128&facepad=2",
    quote:
      "FluentWays helped me finally speak up.\nI now feel confident even before interviews.",
  },
  {
    name: "Abhishek K.",
    photo:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=128&h=128&facepad=1",
    quote:
      "My trainer understood my background.\nI now handle client calls smoothly — no hesitation at all.",
  },
];

const Testimonials = () => (
  <section
    className="w-full bg-white"
    id="success-stories"
    style={{
      paddingTop: 80,
      paddingBottom: 100,
    }}
  >
    <div className="container max-w-3xl mx-auto">
      <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-primary text-center mb-12">
        Success stories
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-8 gap-y-8 items-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white"
            style={{
              borderRadius: 20,
              padding: 32,
              maxWidth: 620,
              boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
              width: "100%",
              flex: "1 1 0%",
              margin: "0 auto",
            }}
          >
            <img
              className="rounded-full mb-4"
              style={{
                width: 64,
                height: 64,
                objectFit: "cover",
                border: "2px solid #4A6CF7",
                marginBottom: 16,
              }}
              src={t.photo}
              alt={t.name}
            />
            <blockquote
              className="text-center font-sans"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 18,
                lineHeight: 1.7,
                color: "#1F2536",
                whiteSpace: "pre-line",
              }}
            >
              “{t.quote}”
            </blockquote>
            <div
              className="text-center font-sans"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: "#4A6CF7",
                marginTop: 16,
              }}
            >
              {t.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
