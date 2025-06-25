
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { FadeIn } from "./ui/FadeIn";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Add a type for a testimonial object
type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aman Kumar",
    role: "Corporate Trainer",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=300&q=80",
    text:
      "I always felt nervous speaking English in front of clients. After just a few sessions with FluentWays, I started leading presentations without second-guessing myself. It’s not just a class — it’s a mindset shift."
  },
  {
    name: "Nikita Sharma",
    role: "Freelancer, India",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=300&q=80",
    text:
      "I used to avoid English Zoom calls with international clients. Now I join them confidently and even close deals. FluentWays didn’t just help me speak — it made me believe in my voice."
  },
  {
    name: "Hitesh Rajde",
    role: "Freelancer, Mumbai",
    avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=300&q=80",
    text:
      "I’ve spent on courses before but nothing worked. FluentWays gave me 1-on-1 feedback, real practice, and encouragement every step. I saw results within 3 classes. Best investment I’ve made in myself."
  }
];

function useResponsiveSlides() {
  // Hook returns slidesPerView: 1 (mobile), 2 (desktop ≥ md)
  const [slidesPerView, setSlidesPerView] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1
  );
  useEffect(() => {
    function handleResize() {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slidesPerView;
}

export const Testimonials = () => {
  const slidesPerView = useResponsiveSlides();
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto scroll every 6s
  useEffect(() => {
    if (!emblaApi) return;
    autoPlayRef.current && clearInterval(autoPlayRef.current as any);
    autoPlayRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 6000);
    return () => {
      autoPlayRef.current && clearInterval(autoPlayRef.current as any);
    };
  }, [emblaApi, slidesPerView]);

  // Pagination dots updates (react to slide)
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    const cb = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", cb);
    return () => {
      emblaApi.off("select", cb);
    };
  }, [emblaApi]);

  // For spread (slidesPerView: 2 needs special chunk)
  function pagedTestimonials(): Testimonial[][] {
    if (slidesPerView > 1) {
      // 2 per slide, chunk array accordingly
      let pages: Testimonial[][] = [];
      for (let i = 0; i < testimonials.length; i += 2) {
        pages.push(testimonials.slice(i, i + 2));
      }
      return pages;
    }
    // Always return an array of arrays for each testimonial
    return testimonials.map(t => [t]);
  }
  const pages = pagedTestimonials();

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 px-[5vw] sm:px-[7vw] bg-white"
    >
      <FadeIn direction="up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-extrabold text-center mb-14 text-zinc-900">
          Thousands Have Transformed Their English With Us
        </h2>
      </FadeIn>
      <div className="relative max-w-3xl mx-auto">
        <Carousel
          opts={{
            dragFree: false,
            slidesToScroll: 1,
            align: "center",
            loop: true,
            skipSnaps: false,
            containScroll: "trimSnaps"
          }}
          className="w-full group"
          setApi={setEmblaApi}
        >
          <CarouselContent>
            {pages.map((page, slideIdx) => (
              <CarouselItem
                key={slideIdx}
                className={cn(
                  "flex gap-6 transition-all duration-500 ease-in-out",
                  slidesPerView > 1 ? "md:flex-row flex-col" : "flex-col"
                )}
              >
                {page.map((t, cardIdx) => (
                  <Card
                    key={t.name}
                    className={cn(
                      "w-full flex flex-col min-h-[345px] bg-white rounded-2xl shadow-xl border border-accent-soft/40 px-6 py-8 relative transition-transform duration-400",
                      slidesPerView > 1 ? "md:max-w-lg" : "max-w-md mx-auto"
                    )}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-14 h-14 shadow">
                        <AvatarImage src={t.avatar} alt={t.name} />
                        <AvatarFallback>
                          {t.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 mt-1">
                        <span className="block font-semibold text-zinc-900 text-lg mb-0.5">{t.name}</span>
                        <span className="text-accent text-xs font-bold uppercase tracking-widest">{t.role}</span>
                      </div>
                    </div>
                    <CardContent className="flex-1 flex flex-col justify-center px-0 pt-0">
                      <div className="flex flex-row items-start gap-2">
                        <Quote className="w-6 h-6 text-accent/70 -ml-1" />
                        <blockquote className="text-zinc-800 text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                          {t.text}
                        </blockquote>
                        <Quote className="w-6 h-6 text-accent/70 rotate-180 self-end -mr-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Nav arrows */}
          <CarouselPrevious className="left-3 md:left-[-54px] top-1/2 -translate-y-1/2 bg-white/80 border border-accent-soft shadow hover:shadow-md" />
          <CarouselNext className="right-3 md:right-[-54px] top-1/2 -translate-y-1/2 bg-white/80 border border-accent-soft shadow hover:shadow-md" />
        </Carousel>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {pages.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial page ${idx + 1}`}
              className={cn(
                "w-3 h-3 rounded-full transition-colors border-accent/30 border-[1.5px]",
                idx === selectedIndex
                  ? "bg-accent/90 border-accent shadow"
                  : "bg-accent-soft/80 hover:bg-accent/60"
              )}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
