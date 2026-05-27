export default function Landing() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center space-y-10"
    >

      {/* STATUS */}
      <div className="pixel-window w-fit px-4 py-2 fade-up smooth-hover">
        SYSTEM ONLINE • DEV MODE ACTIVE
      </div>

      {/* NAME */}
      <div className="fade-up relative" style={{ animationDelay: "0.1s" }}>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-widest text-[#d1d5db] pixel-title relative"
          style={{
            textShadow: `
              0 0 8px rgba(8,145,178,0.25),
              0 0 20px rgba(8,145,178,0.15),
              0 0 40px rgba(0,0,0,0.8)
            `
          }}
        >
          RAGHUVEER SINGH SHEKHAWAT
        </h1>

        {/* DIM GLOW LAYER */}
        <div className="absolute inset-0 blur-2xl opacity-20 text-[#0891B2] pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
            RAGHUVEER SINGH SHEKHAWAT
          </h1>
        </div>

        <p className="text-[#0891B2] text-xl mt-4">
          Game Developer • Software Engineer • DSA Learner
        </p>

      </div>

      {/* DESCRIPTION */}
      <div
        className="pixel-window max-w-2xl fade-up smooth-hover"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="p-6 text-gray-200 leading-relaxed">
          I build games, systems, and software experiences with a focus on clean engineering and real-world problem solving. I focus on turning ideas into structured, efficient, and practical solutions that balance functionality with good design.
        </div>
      </div>

      {/* CTA */}
      <div
        className="flex gap-4 fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <a href="#projects" className="pixel-btn smooth-hover">
          ENTER PROJECTS
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn smooth-hover"
        >
          VIEW GITHUB
        </a>
      </div>

    </section>
  );
}