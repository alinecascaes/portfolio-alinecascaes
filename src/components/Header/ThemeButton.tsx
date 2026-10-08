import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ThemeButton() {
  const [isLight, setIsLight] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("light"),
  );

  function handleToggleTheme() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <button
      type="button"
      aria-label={
        isLight ? "Mudar para o tema escuro" : "Mudar para o tema claro"
      }
      aria-pressed={isLight}
      onClick={handleToggleTheme}
      className="flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-primary hover:text-primary"
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
