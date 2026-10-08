import { Menu, X } from "lucide-react";

interface MobileMenuButton {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButton) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
      className="relative z-50 flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary md:hidden"
    >
      <span className="relative block h-5 w-5">
        <Menu
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
