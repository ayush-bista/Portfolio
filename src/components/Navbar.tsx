import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="text-foreground text-sm font-semibold tracking-[0.2em] uppercase min-w-[150px]"
      >
        Ayush Bista
      </a>

      {/* Desktop links - Centered */}
      <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-10">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
            className="text-foreground text-[13px] tracking-wide hover:text-foreground/60 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Socials & CTA */}
      <div className="hidden md:flex items-center gap-4 min-w-[150px] justify-end">
        <div className="flex items-center gap-5 border-r border-border/30 pr-4 mr-2">
          <a
            href="https://github.com/ayush-bista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/60 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-bista-ab2a76322/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/60 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/aayush.biista/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/60 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          className="bg-foreground text-background px-6 py-2.5 rounded-full text-xs font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg p-8 flex flex-col gap-5 md:hidden border-t border-border/30">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.id); setIsOpen(false); }}
              className="text-foreground/70 text-sm hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); setIsOpen(false); }}
            className="bg-foreground text-background px-6 py-2.5 rounded-full text-xs font-medium tracking-wide text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
