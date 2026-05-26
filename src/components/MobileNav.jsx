import {
  FaHome,
  FaCode,
  FaFolder,
  FaTerminal,
} from "react-icons/fa";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#111827] border-b border-[#374151] p-4">

      <div className="flex justify-around text-cyan-400">

        <a href="#home">
          <FaHome />
        </a>

        <a href="#skills">
          <FaCode />
        </a>

        <a href="#projects">
          <FaFolder />
        </a>

        <a href="#terminal">
          <FaTerminal />
        </a>

      </div>

    </div>
  );
}