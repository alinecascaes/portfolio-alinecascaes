import { useId } from "react";
import { ChevronDown } from "lucide-react";
import type { ExperienceProject } from "../../data/Experience";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  projects: ExperienceProject[];
  isOpen: boolean;
  onToggle: () => void;
}

export function ExperienceItem({
  role,
  company,
  period,
  description,
  projects,
  isOpen,
  onToggle,
}: ExperienceItemProps) {
  const headerId = useId();
  const contentId = useId();

  return (
    <li className="mb-[clamp(1.5rem,1.75rem+1vw,2.5rem)] grid grid-cols-[var(--tlw)_1fr] items-start gap-[clamp(0.875rem,1rem+0.5vw,1.5rem)] last:mb-0">
      <span
        aria-hidden="true"
        className="mt-[clamp(1.55rem,1.6rem+0.6vw,2rem)] h-2.5 w-2.5 justify-self-center rounded-full bg-primary shadow-[0_0_0_5px_var(--color-bg)]"
      />

      <div className="group rounded-md border border-border bg-surface transition-colors duration-300 hover:border-primary focus-within:border-primary">
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full cursor-pointer flex-col items-stretch gap-[clamp(0.875rem,0.95rem+0.4vw,1.25rem)] px-[clamp(1rem,1.125rem+0.5vw,1.5rem)] py-[clamp(0.875rem,0.95rem+0.4vw,1.25rem)] text-left transition-colors duration-300 md:flex-row md:items-center md:gap-x-3"
        >
          <span className="min-w-0 flex-1">
            <span className="block text-[clamp(1.05rem,0.6rem+1vw,1.375rem)] font-semibold leading-snug text-text transition-colors duration-300 group-hover:text-primary">
              {role}
            </span>
            <span className="mt-0.5 block text-sm font-medium text-primary">
              {company}
            </span>
          </span>

          <span className="flex items-center justify-between gap-3 md:contents">
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted">
              {period}
            </span>

            <ChevronDown
              aria-hidden="true"
              size={18}
              className={`mt-1 text-text-muted transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180 text-primary" : ""}`}
            />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div
              role="region"
              id={contentId}
              aria-label={`${role} na ${company}`}
              className="border-t border-border px-[clamp(1rem,1.125rem+0.5vw,1.5rem)] pb-[clamp(1rem,1.125rem+0.5vw,1.5rem)] pt-[clamp(0.875rem,0.95rem+0.4vw,1.25rem)]"
            >
              {description && (
                <p className="mb-[clamp(1rem,1rem+0.5vw,1.5rem)] text-[clamp(0.875rem,0.81rem+0.25vw,1rem)] leading-relaxed text-text-muted">
                  {description}
                </p>
              )}

              <div className="flex flex-col gap-[clamp(1.25rem,1.25rem+1vw,2rem)]">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="mb-[clamp(0.5rem,0.55rem+0.2vw,0.75rem)]">
                      <h3 className="text-[clamp(1rem,0.9rem+0.4vw,1.125rem)] font-semibold leading-snug text-text transition-colors duration-300 group-hover:text-primary">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">
                        {project.description}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-[clamp(0.5rem,0.55rem+0.2vw,0.75rem)]">
                      {project.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[clamp(0.875rem,0.81rem+0.25vw,1rem)] leading-relaxed text-text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
