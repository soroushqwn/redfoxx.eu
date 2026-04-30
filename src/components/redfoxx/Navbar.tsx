import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/redfoxx-mark.png";

const links = [
  { label: "How it works", href: "#how" },
  { label: "For whom", href: "#for-whom" },
  { label: "Services", href: "#services" },
  { label: "The System", href: "#system" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logoMark} alt="REDFOXX" className="h-9 w-9 object-contain" />
          <span className="font-semibold tracking-[0.02em] text-primary text-lg" style={{ fontFamily: "'Montserrat', 'Gotham', sans-serif" }}>REDFOXX</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/40 backdrop-blur px-1.5 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-ember hover:scale-[1.03] transition-transform"
          >
            Book a call
          </a>
          <button
            aria-label="Menu"
            className="md:hidden rounded-lg border border-border p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden container mt-3 card-glass rounded-2xl p-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm hover:bg-secondary rounded-lg"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
