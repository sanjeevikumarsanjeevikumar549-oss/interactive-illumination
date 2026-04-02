import { useState, useEffect, useId } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        scrolled || open ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#hero" className="font-display text-lg font-bold text-gradient sm:text-xl">
          Sanjeevi
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ThemeToggle />
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-glow rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Let's Talk
          </a>
        </div>

        <div className="relative z-[1] flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 touch-manipulation p-2 text-foreground"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls={menuId}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          role="navigation"
          aria-label="Mobile"
          className="border-b border-border bg-background/98 backdrop-blur-xl md:hidden"
        >
          <div className="flex max-h-[min(70dvh,calc(100dvh-4rem))] flex-col gap-2 overflow-y-auto overscroll-contain px-4 pb-5 pt-2 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg bg-secondary/30 px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-glow mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Let's Talk
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
