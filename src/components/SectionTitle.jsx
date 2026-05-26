// src/components/SectionTitle.jsx

export default function SectionTitle({ title }) {
  return (
    <div className="mb-8">

      <h2 className="pixel-title text-lg md:text-2xl text-[#6D28D9]">
        {title}
      </h2>

      <div className="w-32 h-2 bg-[#0891B2] mt-4"></div>

    </div>
  );
}