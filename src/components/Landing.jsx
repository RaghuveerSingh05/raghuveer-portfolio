export default function Landing() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center space-y-8"
    >

      <p className="text-green-400 text-sm md:text-base">
        {">"} SYSTEM STATUS: ONLINE
      </p>

      <div>

        <h1 className="pixel-title text-3xl md:text-6xl leading-tight">
          RAGHUVEER
          <br />
          SHEKHAWAT
        </h1>

        <p className="text-cyan-400 text-xl md:text-3xl mt-8">
          Game Developer &
          <br />
          Aspiring Software Engineer
        </p>

      </div>

      <div className="bg-[#111827] border border-[#374151] p-6 max-w-3xl">

        <p className="text-lg leading-relaxed text-gray-300">
          Building games, AI systems,
          gameplay mechanics, and
          interactive digital experiences
          with modern technologies.
        </p>

      </div>

      <div className="flex gap-4 flex-wrap">

        <a
          href="#projects"
          className="bg-purple-600 px-6 py-3 border-2 border-black hover:bg-purple-500 transition"
        >
          VIEW PROJECTS
        </a>

        <a
          href="https://github.com/RaghuveerSingh05"
          target="_blank"
          className="bg-cyan-500 text-black px-6 py-3 border-2 border-black hover:bg-cyan-400 transition"
        >
          GITHUB
        </a>

      </div>

    </section>
  );
}