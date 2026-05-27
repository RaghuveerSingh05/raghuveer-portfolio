// src/components/MobileNav.jsx

import {
  FaHome,
  FaCode,
  FaFolder,
  FaTerminal,
  FaEnvelope,
} from "react-icons/fa";

export default function MobileNav() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#E7DFC9] border-b-4 border-[#3A312B] p-4">

      <div className="flex justify-around text-[#6D28D9]">

        <a href="#home"><FaHome /></a>

        <a href="#skills"><FaCode /></a>

        <a href="#projects"><FaFolder /></a>

        

        <a href="#contact"><FaEnvelope /></a>

      </div>

    </div>
  );
}