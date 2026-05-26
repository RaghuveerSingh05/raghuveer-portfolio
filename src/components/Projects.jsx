import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section>

      <h2 className="pixel-title text-xl text-purple-400 mb-6">
        PROJECTS
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            title={project.title}
            stack={project.stack}
            description={project.description}
          />

        ))}

      </div>

    </section>
  );
}