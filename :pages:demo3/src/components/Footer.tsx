import FluentLogo from "./FluentLogo";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Demo", href: "#hero" },
  { label: "Privacy", href: "#privacy" },
];

const socials = [
  {
    href: "https://instagram.com",
    icon: <Instagram size={22} />,
    label: "Instagram",
  },
  {
    href: "https://facebook.com",
    icon: <Facebook size={22} />,
    label: "Facebook",
  },
  {
    href: "https://linkedin.com",
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
  }
];

const Footer = () => (
  <footer className="bg-background border-t border-muted py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center">
        <FluentLogo size={32} />
      </div>
      <div className="flex gap-5">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="text-muted-foreground hover:underline transition-all font-medium text-base">
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex gap-3">
        {socials.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition">
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
