// src/components/Sidebar.jsx

import {
  FaHome,
  FaCode,
  FaFolder,
  FaTerminal,
  FaEnvelope,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-24 min-h-screen bg-[#0b0b12] text-gray-100  p-4 sticky top-0">

      <div className="mb-10">
        <h1 className="pixel-title text-[10px] leading-5 text-[#6D28D9]">
          RAGHUVEER
        </h1>
      </div>

      <nav className="space-y-4">

        <NavItem icon={<FaHome />} text="Home" link="#home" />
        <NavItem icon={<FaCode />} text="Skills" link="#skills" />
        <NavItem icon={<FaFolder />} text="Projects" link="#projects" />
        
        <NavItem icon={<FaEnvelope />} text="Contact" link="#contact" />

      </nav>

    </aside>
  );
}

function NavItem({ icon, text, link }) {
  return (
    <a
      href={link}
      className="relative group flex items-center justify-center border-4 bg-[#0b0b12] text-gray-100  p-3 hover:-translate-y-1 transition"
    >

      {/* ICON */}
      {icon}

      {/* TOOLTIP LABEL */}
      <span
        className="
          absolute left-full ml-3
         bg-[#0b0b12] text-gray-100 text-xs
          px-2 py-1
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition
          whitespace-nowrap
          pointer-events-none
        "
      >
        {text}
      </span>

    </a>
  );
}