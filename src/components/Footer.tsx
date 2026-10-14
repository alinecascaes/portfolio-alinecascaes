import { Wrapper } from "./Wrapper";
import { Reveal } from "./Reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Reveal>
        <div className="h-px w-full bg-text-muted/20" />
      </Reveal>
        <Reveal delay={80}>
          <Wrapper className="flex flex-col items-center gap-1 py-8 px-0 text-center text-text-muted md:flex-row md:justify-between md:text-left">
            <p className="text-sm">
              {"\u00A9"} {currentYear} Aline Cascaes.
            </p>
            <p className="text-xs opacity-60">Todos os direitos reservados.</p>
          </Wrapper>
        </Reveal>
    </footer>
  );
}
