import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


const SHOW_THRESHOLD = 400;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > SHOW_THRESHOLD;
      setIsVisible((prev) => (prev === next ? prev : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleScrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-text-muted shadow-lg transition-[opacity,transform] duration-300 ease-out hover:border-primary hover:text-primary motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
    >
      <ArrowUp aria-hidden="true" size={20} />
    </button>
  );
}
