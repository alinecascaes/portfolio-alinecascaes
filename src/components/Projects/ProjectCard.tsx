import { ExternalLink, Eye } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card } from "../Card";
import type { Project } from "../../data/Projects";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: () => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <Card>
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none cursor-pointer"
					onClick={onOpenDetails}
        />
      </div>

      <div className="flex flex-1 flex-col gap-[clamp(0.875rem,0.8rem+0.4vw,1.25rem)] p-[clamp(1rem,0.875rem+0.6vw,1.5rem)]">
        <h3 className="text-[clamp(1.1rem,0.875rem+0.75vw,1.375rem)] font-semibold leading-snug text-text transition-colors duration-300 group-hover:text-primary">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <nav
          aria-label={`Links do projeto ${project.title}`}
          className="mt-auto flex flex-wrap items-center gap-x-[clamp(1rem,0.75rem+1vw,1.5rem)] gap-y-2 border-t border-border pt-[clamp(0.875rem,0.8rem+0.4vw,1.25rem)]"
        >
          <button
            type="button"
            onClick={onOpenDetails}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm px-2 py-1 -mx-2 -my-1 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-primary hover:text-on-primary"
          >
            <Eye aria-hidden="true" size={16} />
            Ver detalhes
          </button>

          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text transition-colors duration-150 hover:text-primary"
            >
              <ExternalLink aria-hidden="true" size={16} />
              Deploy
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text transition-colors duration-150 hover:text-primary"
            >
              <GitHubIcon fontSize="small" />
              {project.githubName}
							GitHub
            </a>
          )}
        </nav>
      </div>
    </Card>
  );
}
