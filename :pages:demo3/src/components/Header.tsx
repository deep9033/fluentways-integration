import FluentLogo from "./FluentLogo";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import * as React from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "How Demo Works", href: "#how-demo-works" },
  { label: "Who For", href: "#who-for" },
  { label: "Why Different", href: "#why-different" },
  { label: "Success Stories", href: "#success-stories" },
  // Book Demo CTA will be handled separately!
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full border-b border-muted bg-background sticky top-0 z-40">
      <nav className="container flex items-center justify-between h-16 md:h-20 mx-auto">
        {/* Brand/Logo */}
        <a
          href="#hero"
          className="flex items-center font-playfair text-xl sm:text-2xl font-bold text-primary"
          style={{ textDecoration: "none", letterSpacing: "-0.02em" }}
        >
          <FluentLogo size={40} />
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className="font-sans text-base font-medium px-4 py-2 text-muted-foreground hover:text-primary hover:underline rounded transition"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <a href="#book-demo">
            <Button
              className="ml-4 px-6 py-2 rounded-2xl font-playfair text-base font-bold bg-brand text-white hover:bg-primary transition shadow-card"
              variant="default"
              size="default"
            >
              Book Demo
            </Button>
          </a>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-lg hover:bg-accent focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMobileMenuOpen((v) => !v)}
            type="button"
          >
            <Menu size={28} />
          </button>
          {/* Mobile Dropdown Panel */}
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-background border-t border-muted shadow-md z-50 animate-in fade-in">
              <ul className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block font-sans text-lg font-medium text-muted-foreground hover:text-primary py-2 px-3 rounded transition"
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a href="#book-demo" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      className="w-full px-0 py-3 rounded-2xl font-playfair text-lg font-bold bg-brand text-white hover:bg-primary transition shadow-card"
                      variant="default"
                      size="default"
                    >
                      Book Demo
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
