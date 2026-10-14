import { useState } from "react";
import { Wrapper } from "../Wrapper";
import { Reveal } from "../Reveal";
import { ProjectDialog } from "./ProjectDialog";
import { projects, type Project } from "../../data/Projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="bg-bg transition-colors motion-reduce:transition-none"
    >
      <Wrapper className="py-[clamp(4rem,4.5rem+4vw,7rem)]">
        <Reveal>
          <header className="mb-[clamp(2.5rem,2rem+4vw,4rem)] text-center md:text-left">
            <h2 className="relative inline-block text-xl font-bold leading-tight text-text after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-11 after:bg-primary after:content-[''] tablet:text-2xl">
              Projetos
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-[clamp(1.25rem,1rem+1.5vw,2rem)] sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 160}
              className="[&>*]:h-full"
            >
              <ProjectCard
                project={project}
                onOpenDetails={() => setSelectedProject(project)}
              />
            </Reveal>
          ))}
        </div>
      </Wrapper>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
