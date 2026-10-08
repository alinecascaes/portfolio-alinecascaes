import { Download } from "lucide-react";
import { navLinks } from "./navLinks";

type MobileMenuProps = {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
};

export function MobileMenu({
  id,
  isOpen,
  onClose,
  activeSection,
}: MobileMenuProps) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id={id}
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-surface p-6 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  className={`border-l-2 border-transparent pl-3 text-text-muted transition-colors hover:text-text ${isActive ? "border-primary text-primary" : ""}`}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href=""
          onClick={onClose}
          className="group mt-8 inline-flex h-11 w-31.5 items-center justify-center gap-2 rounded-full border border-border px-5 text-[13px] font-semibold whitespace-nowrap transition-colors hover:border-primary hover:text-primary"
        >
          <Download
            aria-hidden="true"
            size={18}
            className="motion-safe:group-hover:animate-bounce"
          />
          Baixar CV
        </a>
      </aside>
    </>
  );
}
