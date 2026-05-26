import {
  FaHome,
  FaCode,
  FaFolder,
  FaTerminal,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-24 min-h-screen bg-[#111827] border-r border-[#374151] p-4 sticky top-0">

      <h1 className="pixel-title text-xs md:text-lg text-cyan-400 mb-10">
        RAGHUVEER.DEV
      </h1>

      <nav className="space-y-4">

        <NavItem icon={<FaHome />} text="Home" />
        <NavItem icon={<FaCode />} text="Skills" />
        <NavItem icon={<FaFolder />} text="Projects" />
        <NavItem icon={<FaTerminal />} text="Terminal" />

      </nav>
    </aside>
  );
}

function NavItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 border border-[#374151] p-3 hover:border-cyan-400 cursor-pointer transition">

      {icon}

      <span className="hidden md:block">
        {text}
      </span>

    </div>
  );
}