// src/components/Projects.jsx

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects">

      <SectionTitle title="PROJECTS" />

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            title={project.title}
            stack={project.stack}
            description={project.description}
            github={project.github}
          />

        ))}

      </div>

    </section>
  );
}