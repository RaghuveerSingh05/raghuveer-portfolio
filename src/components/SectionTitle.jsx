export default function SectionTitle({ title }) {
  return (
    <div className="mb-8">

      <h2 className="pixel-title text-lg md:text-2xl text-purple-400">
        {title}
      </h2>

      <div className="w-32 h-1 bg-cyan-400 mt-4"></div>

    </div>
  );
}