import {
  FaHome,
  FaCode,
  FaFolder,

  FaEnvelope,
} from "react-icons/fa";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b0b12] text-gray-100 px-2 py-3">

      <div className="flex justify-between items-center text-[#6D28D9]">

        <a href="#home" className="flex flex-col items-center text-xs active:scale-95">
          <FaHome className="text-lg" />
          Home
        </a>

        <a href="#skills" className="flex flex-col items-center text-xs active:scale-95">
          <FaCode className="text-lg" />
          Skills
        </a>

        <a href="#projects" className="flex flex-col items-center text-xs active:scale-95">
          <FaFolder className="text-lg" />
          Projects
        </a>

        

        <a href="#contact" className="flex flex-col items-center text-xs active:scale-95">
          <FaEnvelope className="text-lg" />
          Contact
        </a>

      </div>

    </div>
  );
}