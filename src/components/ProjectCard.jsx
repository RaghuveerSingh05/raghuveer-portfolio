export default function ProjectCard({
  title,
  stack,
  description,
}) {
  return (
    <div className="bg-[#111827] border border-[#374151] p-6 hover:border-cyan-400 transition">

      <h3 className="pixel-title text-sm md:text-lg mb-4">
        {title}
      </h3>

      <p className="text-cyan-400 mb-4">
        {stack}
      </p>

      <p className="text-gray-300">
        {description}
      </p>

    </div>
  );
}