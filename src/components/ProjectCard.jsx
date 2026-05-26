// src/components/ProjectCard.jsx

export default function ProjectCard({
  title,
  stack,
  description,
  github,
}) {
  return (
    <div className="bg-[#E7DFC9] border-4 border-[#3A312B]">

      <div className="bg-[#3A312B] h-10 flex items-center gap-2 px-4">

        <div className="w-4 h-4 bg-red-400"></div>

        <div className="w-4 h-4 bg-yellow-400"></div>

        <div className="w-4 h-4 bg-green-400"></div>

      </div>

      <div className="p-6">

        <h3 className="pixel-title text-sm md:text-lg mb-4">
          {title}
        </h3>

        <p className="text-[#0891B2] mb-4">
          {stack}
        </p>

        <p className="leading-relaxed mb-6">
          {description}
        </p>

        <a
          href={github}
          target="_blank"
          className="inline-block bg-[#6D28D9] text-white px-4 py-2 border-4 border-[#3A312B] hover:-translate-y-1 transition"
        >
          VIEW PROJECT
        </a>

      </div>

    </div>
  );
}