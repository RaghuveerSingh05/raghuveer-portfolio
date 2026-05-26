export default function Landing() {
  return (
    <section className="space-y-8">

      <p className="text-green-400">
        {">"} SYSTEM ONLINE
      </p>

      <div>

        <h1 className="pixel-title text-3xl md:text-6xl leading-tight">
          RAGHUVEER SINGH SHEKHAWAT
        </h1>

        <p className="text-cyan-400 text-xl mt-6">
          Game Developer & Aspiring Software Engineer
        </p>

      </div>

      <div className="bg-[#111827] border border-[#374151] p-6 max-w-3xl">

        <p className="text-lg leading-relaxed text-gray-300">
          Building games, AI systems,
          and interactive experiences with
          modern development tools.
        </p>

      </div>

      <div className="flex gap-4 flex-wrap">

        <button className="bg-purple-600 px-6 py-3 border-2 border-black hover:bg-purple-500 transition">
          PROJECTS
        </button>

        <button className="bg-cyan-500 text-black px-6 py-3 border-2 border-black hover:bg-cyan-400 transition">
          GITHUB
        </button>

      </div>

    </section>
  );
}