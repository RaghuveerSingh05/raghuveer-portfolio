import {
  FaHome,
  FaCode,
  FaFolder,
  FaTerminal,
  FaEnvelope,
} from "react-icons/fa";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#E7DFC9] border-t-4 border-[#3A312B] px-2 py-3">

      <div className="flex justify-between items-center text-[#6D28D9]">

        {/* HOME */}
        <a
          href="#home"
          className="flex flex-col items-center text-xs active:scale-95 transition"
        >
          <FaHome className="text-lg" />
          Home
        </a>

        {/* SKILLS */}
        <a
          href="#skills"
          className="flex flex-col items-center text-xs active:scale-95 transition"
        >
          <FaCode className="text-lg" />
          Skills
        </a>

        {/* PROJECTS */}
        <a
          href="#projects"
          className="flex flex-col items-center text-xs active:scale-95 transition"
        >
          <FaFolder className="text-lg" />
          Work
        </a>

        {/* TERMINAL (IMPORTANT FIX) */}
        <a
          href="#terminal"
          className="flex flex-col items-center text-xs active:scale-95 transition"
        >
          <FaTerminal className="text-lg" />
          Terminal
        </a>

        {/* CONTACT */}
        <a
          href="#contact"
          className="flex flex-col items-center text-xs active:scale-95 transition"
        >
          <FaEnvelope className="text-lg" />
          Contact
        </a>

      </div>
    </div>
  );
}