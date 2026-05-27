import { useState } from "react";
import projects from "../data/projects";
import ImageModal from "./ImageModal";

export default function Projects() {
  const [selectedImages, setSelectedImages] = useState(null);

  const featured = projects.filter(p => p.status === "featured");
  const queued = projects.filter(p => p.status === "queued");

  return (
    <section id="projects" className="space-y-14">

      {/* TITLE */}
      <div className="pixel-title text-2xl">
        SELECTED PROJECTS
      </div>

      {/* FEATURED */}
      <div className="grid md:grid-cols-2 gap-6">

        {featured.map((project, index) => (
          <div key={project.title} className="pixel-window p-5 space-y-4">

            {/* VIDEO (AUTOPLAY LOOP) */}
            {project.video && project.video.endsWith(".mp4") && (
              <div className="border border-[#3A312B] overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* HEADER BAR */}
            <div className="bg-[#3A312B] h-10 flex items-center px-4">
              <p className="text-white text-xs">
                FEATURED #{index + 1}
              </p>
            </div>

            {/* TITLE */}
            <h3 className="pixel-title text-lg">
              {project.title}
            </h3>

            {/* CONTEXT */}
            <p className="text-sm">{project.context}</p>

            {/* STACK */}
            <p className="text-[#0891B2] text-sm">{project.stack}</p>

            {/* VIEW IMAGES */}
            {project.images && (
              <button
                onClick={() => setSelectedImages(project.images)}
                className="pixel-btn"
              >
                VIEW IMAGES
              </button>
            )}

            {/* LINK */}
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn inline-block ml-2"
            >
              OPEN PROJECT
            </a>

          </div>
        ))}

      </div>

      {/* QUEUED */}
      <div className="space-y-6">

        <div className="pixel-title text-xl">
          QUEUED PROJECTS
        </div>

        <div className="grid md:grid-cols-2 gap-6 opacity-80">

          {queued.map((project) => (
            <div key={project.title} className="pixel-window p-5 space-y-3">

              <h3 className="pixel-title text-lg">{project.title}</h3>

              <p className="text-sm">{project.context}</p>

              <p className="text-[#0891B2] text-sm">{project.stack}</p>

              {/* VIEW IMAGES */}
              {project.images && (
                <button
                  onClick={() => setSelectedImages(project.images)}
                  className="pixel-btn"
                >
                  VIEW PROGRESS
                </button>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedImages && (
        <ImageModal
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}

    </section>
  );
}