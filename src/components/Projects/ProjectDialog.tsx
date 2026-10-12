import { ExternalLink } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Dialog } from "../Dialog";
import type { Project } from "../../data/Projects";

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Dialog title={project.title} onClose={onClose} backdropClick>
      <div className="flex flex-col gap-[clamp(1rem,1rem+0.5vw,1.5rem)]">
        <section className="flex flex-col gap-3">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            Problema
          </h4>
          <p className="text-sm leading-relaxed text-text-muted">
            {project.details.problem}
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            Solução
          </h4>
          <p className="text-sm leading-relaxed text-text-muted">
            {project.details.solution}
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            O que implementei
          </h4>
          <ul className="flex flex-col gap-2">
            {project.details.implemented.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.details.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        {project.deployUrl && (
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-150 hover:bg-primary/90"
          >
            <ExternalLink size={16} />
            Ver deploy
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-bg px-5 py-2.5 text-sm font-semibold text-text transition-colors duration-150 hover:border-primary hover:text-primary"
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </a>
        )}
      </footer>
    </Dialog>
  );
}
