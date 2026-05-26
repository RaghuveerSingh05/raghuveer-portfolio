export default function ProjectCard({
  title,
  stack,
  description,
  github,
}) {
  return (
    <div className="bg-[#111827] border border-[#374151] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[6px_6px_0px_#000]">

      <h3 className="pixel-title text-sm md:text-lg mb-4">
        {title}
      </h3>

      <p className="text-cyan-400 mb-4">
        {stack}
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        {description}
      </p>

      <a
        href={github}
        target="_blank"
        className="inline-block bg-cyan-500 text-black px-4 py-2 border-2 border-black hover:bg-cyan-400 transition"
      >
        VIEW PROJECT
      </a>

    </div>
  );
}