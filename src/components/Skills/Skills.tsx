import { Wrapper } from "../Wrapper";
import { skills } from "../../data/Skills";

export function Skills() {
  return (
    <section
      id="stacks"
      className="bg-bg-alt transition-colors motion-reduce:transition-none"
    >
      <Wrapper className="py-[clamp(4rem,4.5rem+4vw,7rem)]">
        <header className="mb-[clamp(2.5rem,2rem+4vw,4rem)] text-center md:text-left">
          <h2 className="relative inline-block text-xl font-bold leading-tight text-text after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-11 after:bg-primary after:content-[''] tablet:text-2xl">
            Stacks e Ferramentas
          </h2>
        </header>

        <ul className="grid grid-cols-2 gap-[clamp(1rem,0.75rem+1.5vw,1.5rem)] sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="group flex flex-col items-center justify-center gap-3 rounded-md border border-border bg-surface px-4 py-[clamp(1.5rem,1.25rem+1vw,2.5rem)] text-text transition-colors duration-300 hover:border-primary">
                <skill.icon
                  size={32}
                  className="transition-colors duration-300 group-hover:text-primary"
                />
                <span className="text-sm font-medium text-text-muted transition-colors duration-300 group-hover:text-primary">
                  {skill.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
