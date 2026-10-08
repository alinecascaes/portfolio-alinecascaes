import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";
import { MobileMenu } from "./MobileMenu";
import { DownloadCV } from "./DownloadCV";
import { ThemeButton } from "./ThemeButton";
import { MobileMenuButton } from "./MobileMenuButton";
import { Wrapper } from "../Wrapper";

const desktopLinkClassName =
  "relative py-1 text-text-muted after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-text hover:after:scale-x-100";

const sectionIds = ["about", "experience", "projects", "stacks", "contact"];
const ACTIVE_OFFSET = 140;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 0;
      setIsScrolled((prev) => (prev === next ? prev : next));

      const probe = window.scrollY + ACTIVE_OFFSET;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= probe) {
          current = id;
        }
      }

      const { scrollHeight } = document.documentElement;
      if (window.innerHeight + window.scrollY >= scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleOpenDrawerMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="sticky top-0 z-30 bg-bg transition-colors motion-reduce:transition-none">
      <Wrapper className="flex items-center justify-between">
        <a href="#" className="text-xl font-bold uppercase">
          ac
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`${desktopLinkClassName} ${isActive ? "text-text after:scale-x-100" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeButton />
          <DownloadCV />
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={handleOpenDrawerMenu}
          />
        </div>
      </Wrapper>
      <div
        aria-hidden="true"
        className={`h-px w-full bg-text-muted/20 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <MobileMenu
        id="mobile-menu"
        isOpen={isMenuOpen}
        onClose={handleOpenDrawerMenu}
        activeSection={activeSection}
      />
    </header>
  );
}
