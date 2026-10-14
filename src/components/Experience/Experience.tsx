import { useState } from "react";
import { Wrapper } from "../Wrapper";
import { Reveal } from "../Reveal";
import { ExperienceItem } from "./ExperienceItem";
import { experiences } from "../../data/Experience";

export function Experience() {
  const [openId, setOpenId] = useState<number | null>(
    experiences[0]?.id ?? null,
  );

  function handleToggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="experience"
      className="bg-bg-alt transition-colors motion-reduce:transition-none"
    >
      <Wrapper className="py-[clamp(4rem,4.5rem+4vw,7rem)]">
        <Reveal>
          <header className="mb-[clamp(2.5rem,2rem+4vw,4rem)] text-center md:text-left">
            <h2 className="relative inline-block text-xl font-bold leading-tight text-text after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-11 after:bg-primary after:content-[''] tablet:text-2xl">
              Experiência
            </h2>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <ul className="relative [--tlw:clamp(1.25rem,1.5rem+1.5vw,2.5rem)]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 top-2 left-[calc(var(--tlw)/2)] w-px -translate-x-1/2 bg-primary/15"
          />

          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              {...experience}
              isOpen={openId === experience.id}
              onToggle={() => handleToggle(experience.id)}
            />
          ))}
          </ul>
        </Reveal>
      </Wrapper>
    </section>
  );
}
