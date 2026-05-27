import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* =========================
   BACKGROUND DECOR (ENHANCED)
========================= */

function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-400 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-500 opacity-10 blur-3xl" />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_48%,rgba(0,255,247,0.15)_50%,transparent_52%)] bg-[length:40px_40px]" />

      <div className="absolute top-10 right-40 w-2 h-2 bg-cyan-300 shadow-[0_0_10px_#00fff7]" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-pink-400 shadow-[0_0_10px_#ff2bd6]" />
      <div className="absolute bottom-40 right-60 w-2 h-2 bg-purple-400 shadow-[0_0_10px_#7c3aed]" />
    </div>
  );
}

/* =========================
   RIGHT SIDE ART VAULT (NEW)
========================= */

function RightSkillsProgress() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "C#", level: 85 },
    { name: "C++", level: 80 },
    { name: "Unity", level: 88 },
    { name: "Godot", level: 70 },
    { name: "Pygame", level: 75 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 90 },
    { name: "DSA", level: 78 },
    { name: "Problem Solving", level: 92 },
  ];

  return (
    <div className="hidden lg:flex flex-col gap-4 fixed right-6 top-24 w-80 z-20">

      <div className="neon-border p-4">
        <p className="text-cyan-300 text-xs tracking-widest">
          PROGRESSION SYSTEM
        </p>
      </div>

      <div className="neon-border p-4 space-y-4 max-h-[70vh] overflow-hidden">

        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-1">

            <div className="flex justify-between text-xs">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-cyan-300">{skill.level}%</span>
            </div>

            <div className="w-full h-2 bg-white/5 border border-cyan-500/20 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-[0_0_10px_#00fff7] transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] animate-pulse" />
            </div>

          </div>
        ))}

      </div>

      <div className="neon-border p-3">
        <p className="text-[10px] text-gray-400">
          STATUS: LEARNING MODE ACTIVE
        </p>
        <p className="text-[10px] text-cyan-300">
          NEXT UPGRADE: SYSTEM DESIGN + AI INTEGRATION
        </p>
      </div>

    </div>
  );
}

/* =========================
   APP (MOBILE FIXED)
========================= */

export default function App() {
  return (
    <div className="crt bg-[#0b0b12] text-gray-100 relative overflow-x-hidden min-h-[100dvh]">

      <BackgroundDecor />

      {/* MOBILE NAV */}
      <MobileNav />

      {/* SIDEBAR (desktop only) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* RIGHT PANEL (desktop only) */}
      <RightSkillsProgress />

      {/* MAIN CONTENT */}
      <main
        className="
          relative z-10
          flex-1
          max-w-7xl mx-auto
          p-4 sm:p-6 md:p-12
          pt-20 md:pt-12
          pb-24 md:pb-12
          space-y-20 md:space-y-24
          lg:pr-72
        "
      >
        <Landing />
        <Skills />
        <Projects />
        <Terminal />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}