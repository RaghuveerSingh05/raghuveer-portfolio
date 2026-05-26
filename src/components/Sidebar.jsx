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
    <aside className="w-24 min-h-screen bg-[#E7DFC9] border-r-4 border-[#3A312B] p-4 sticky top-0">

      <div className="mb-10">

        <h1 className="pixel-title text-[10px] leading-5 text-[#6D28D9]">
          RAGHUVEER.DEV
        </h1>

      </div>

      <nav className="space-y-4">

        <NavItem icon={<FaHome />} text="Home" link="#home" />

        <NavItem icon={<FaCode />} text="Skills" link="#skills" />

        <NavItem icon={<FaFolder />} text="Projects" link="#projects" />

        <NavItem icon={<FaTerminal />} text="Terminal" link="#terminal" />

        <NavItem icon={<FaEnvelope />} text="Contact" link="#contact" />

      </nav>

    </aside>
  );
}

function NavItem({ icon, text, link }) {
  return (
    <a
      href={link}
      className="flex items-center gap-3 border-4 border-[#3A312B] bg-[#F4F1E8] p-3 hover:-translate-y-1 transition"
    >
      {icon}

      <span className="hidden xl:block">
        {text}
      </span>
    </a>
  );
}