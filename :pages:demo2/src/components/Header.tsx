import React, { useState, useEffect } from "react";
import { SheenButton } from "./ui/SheenButton";
import { Menu } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { Link } from "react-router-dom";

const logoUrl = "https://lovable.dev/opengraph-image-p98pqg.png";
const BOOKING_LINK = "https://pages.razorpay.com/pl_QVjqHbuT5A7Iy8/view";

// New navigation sections
const NAV = [
  { name: "About", section: "about" },
  { name: "How it works", section: "whyitworks" },
  { name: "Pricing", section: "finalcta" },
  { name: "Testimonials", section: "testimonials" },
  { name: "Contact", section: "contact" },
];

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < 20) setShow(true);
      else setShow(scrolled < lastScroll);
      setLastScroll(scrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const openBooking = () => {
    window.open(BOOKING_LINK, "_blank", "noopener,noreferrer");
  };

  // Scrolls to the section and (on mobile) closes menu
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenu(false);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-[1px]"
          onClick={() => setMobileMenu(false)}
        />
      )}
      <FadeIn direction="up" delay={0} className={`
        fixed top-0 left-0 w-full z-50 bg-white/90 border-b border-accent-soft
        backdrop-blur transition-transform duration-500
        ${show ? "translate-y-0 shadow-sm" : "-translate-y-24"}
      `}>
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoUrl} alt="FluentWays logo" className="w-8 h-8 rounded-md border border-accent hover:scale-110 transition" />
            <span className="ml-2 text-xl font-playfair font-extrabold text-accent tracking-wide group-hover:text-accent/80 transition">
              FluentWays
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(link => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.section)}
                className="text-lg font-medium text-zinc-700 hover:text-accent transition relative after:absolute after:bg-accent after:rounded after:h-0.5 after:w-0 left-0 after:bottom-0 hover:after:w-full hover:after:h-0.5 after:transition-all after:duration-300 focus:outline-none"
                style={{ background: "none", border: 0, padding: 0, margin: 0 }}
              >
                {link.name}
              </button>
            ))}
            <SheenButton
              className="ml-4 font-semibold drop-shadow-lg px-6 py-2"
              onClick={openBooking}
              glow
            >
              Book Demo
            </SheenButton>
          </nav>
          {/* Hamburger for mobile */}
          <button className="md:hidden flex items-center p-2"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={28} className="text-accent" />
          </button>
        </div>
      </FadeIn>
      {/* Mobile menu */}
      <div
        className={`
          fixed top-0 right-0 z-50 bg-white w-5/6 max-w-xs h-full shadow-2xl transition-transform duration-500
          flex flex-col gap-4 py-8 px-6 md:hidden
          ${mobileMenu ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ transitionProperty: "transform" }}
      >
        <button className="self-end mb-4 px-2 py-1 rounded hover:bg-accent-soft" onClick={() => setMobileMenu(false)}>&#10005;</button>
        {NAV.map(link => (
          <button
            key={link.name}
            type="button"
            onClick={() => handleNavClick(link.section)}
            className="text-xl py-2 font-semibold text-zinc-700 hover:text-accent transition text-left"
            style={{ background: "none", border: 0, padding: 0, margin: 0 }}
          >
            {link.name}
          </button>
        ))}
        <SheenButton
          className="mt-4 font-semibold text-lg"
          style={{ width: "100%" }}
          onClick={() => {
            setMobileMenu(false);
            openBooking();
          }}
          glow
        >
          Book Demo
        </SheenButton>
      </div>
    </>
  );
};
