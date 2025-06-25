import React, { useEffect, useState, useRef } from "react";
import { SheenButton } from "./ui/SheenButton";

// Animation classes for fade in/out
const FADE_SHOW_CLASS = "stickycta-fade-show";
const FADE_HIDE_CLASS = "stickycta-fade-hide";
const FADE_IDLE_CLASS = "stickycta-fade-idle";

const BOOKING_LINK = "https://pages.razorpay.com/pl_QVjqHbuT5A7Iy8/view";

export const StickyMobileCTAButton: React.FC = () => {
  const [show, setShow] = useState(false); // Hero visibility logic
  const [ctaVisible, setCtaVisible] = useState(false); // CTA in view logic
  const [fadeClass, setFadeClass] = useState(FADE_IDLE_CLASS);
  const lastRendered = useRef(false);

  // Listen for hero-section visibility (scroll below hero)
  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("hero-section");
      if (!hero) return setShow(false);
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShow(heroBottom <= 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for CTA
  useEffect(() => {
    const cta = document.getElementById("cta");
    if (!cta) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setCtaVisible(entry.isIntersecting),
      { root: null, threshold: 0.05 }
    );
    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  // Animation management: Fading in and out
  useEffect(() => {
    const shouldShow = show && !ctaVisible;
    if (shouldShow && !lastRendered.current) {
      setFadeClass(FADE_SHOW_CLASS);
    } else if (!shouldShow && lastRendered.current) {
      setFadeClass(FADE_HIDE_CLASS);
    }
    lastRendered.current = shouldShow;
    if (!shouldShow) {
      const timeout = setTimeout(() => setFadeClass(FADE_IDLE_CLASS), 400);
      return () => clearTimeout(timeout);
    }
  }, [show, ctaVisible]);

  // Glow pulse every 5s (same as before)
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const shouldShow = show && !ctaVisible;
    if (!shouldShow || !btnRef.current) return;
    let pulse: any = setInterval(() => {
      btnRef.current!.classList.add("animate-pulse");
      setTimeout(() => {
        btnRef.current && btnRef.current.classList.remove("animate-pulse");
      }, 1200);
    }, 5000);
    return () => clearInterval(pulse);
  }, [show, ctaVisible]);

  // Render visibility: never during idle (except active animation out)
  const visible = (show && !ctaVisible) || fadeClass === FADE_HIDE_CLASS;

  return visible ? (
    <div
      className={`
        fixed z-[130] left-1/2 -translate-x-1/2
        w-[96vw] max-w-md bottom-3 sm:bottom-7 flex px-0
        ${fadeClass === FADE_SHOW_CLASS ? "stickycta-fade stickycta-fadein" : ""}
        ${fadeClass === FADE_HIDE_CLASS ? "stickycta-fade stickycta-fadeout" : ""}
        ${fadeClass !== FADE_IDLE_CLASS ? "pointer-events-auto" : ""}
      `}
      style={{
        transition: 'all .33s cubic-bezier(.42,0,.52,1)',
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-live="polite"
      aria-hidden={!show || ctaVisible}
    >
      <SheenButton
        ref={btnRef}
        className="w-full rounded-full py-4 px-6 text-base sm:text-lg font-bold border-2 border-accent shadow-cta-glow bg-accent text-white transition hover:bg-accent/90"
        glow
        onClick={() => window.open(BOOKING_LINK, "_blank", "noopener,noreferrer")}
        style={{
          boxShadow:"0 4px 32px -4px #7a8cff44,0 1.5px 4px 0 #b3bafc33"
        }}
      >
        Yes, I Want to Book My ₹9 Demo
      </SheenButton>
    </div>
  ) : null;
};
