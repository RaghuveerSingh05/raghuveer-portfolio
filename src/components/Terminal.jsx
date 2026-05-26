// src/components/Terminal.jsx

import SectionTitle from "./SectionTitle";

export default function Terminal() {
  return (
    <section
      id="terminal"
      className="bg-[#1E1B18] border-4 border-[#3A312B] text-green-400 p-6"
    >

      <SectionTitle title="TERMINAL" />

      <div className="space-y-3">

        <p>C:\RAGHUVEER_DEV{">"} SYSTEM ONLINE</p>

        <p>C:\RAGHUVEER_DEV{">"} Learning DSA...</p>

        <p>C:\RAGHUVEER_DEV{">"} Building Games...</p>

        <p>C:\RAGHUVEER_DEV{">"} Exploring AI Systems...</p>

        <p>C:\RAGHUVEER_DEV{">"} STATUS ACTIVE _</p>

      </div>

    </section>
  );
}