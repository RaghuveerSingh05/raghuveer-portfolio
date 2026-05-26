// src/components/Landing.jsx

export default function Landing() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center space-y-8"
    >

      <div className="bg-[#E7DFC9] border-4 border-[#3A312B] p-3 inline-block w-fit">

        <p className="text-sm">
          C:\RAGHUVEER_DEV{">"} STATUS ONLINE
        </p>

      </div>

      <div>

        <h1 className="pixel-title text-3xl md:text-6xl leading-tight">
          RAGHUVEER
          <br />
          SHEKHAWAT
        </h1>

        <p className="text-[#0891B2] text-xl md:text-3xl mt-8">
          Game Developer &
          <br />
          Aspiring Software Engineer
        </p>

      </div>

      <div className="bg-[#E7DFC9] border-4 border-[#3A312B] max-w-3xl">

        <div className="bg-[#3A312B] h-10 flex items-center gap-2 px-4">

          <div className="w-4 h-4 bg-red-400"></div>

          <div className="w-4 h-4 bg-yellow-400"></div>

          <div className="w-4 h-4 bg-green-400"></div>

        </div>

        <div className="p-6">

          <p className="text-lg leading-relaxed">
            Building games, gameplay systems,
            AI mechanics, and interactive software
            experiences using modern technologies.
          </p>

        </div>

      </div>

      <div className="flex gap-4 flex-wrap">

        <a
          href="#projects"
          className="bg-[#6D28D9] text-white px-6 py-3 border-4 border-[#3A312B] hover:-translate-y-1 transition"
        >
          PROJECTS
        </a>

        <a
          href="https://github.com/RaghuveerSingh05"
          target="_blank"
          className="bg-[#0891B2] text-white px-6 py-3 border-4 border-[#3A312B] hover:-translate-y-1 transition"
        >
          GITHUB
        </a>

      </div>

    </section>
  );
}