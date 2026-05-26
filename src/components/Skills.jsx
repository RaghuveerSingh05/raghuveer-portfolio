// src/components/Skills.jsx

import skills from "../data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills">

      <SectionTitle title="SKILLS" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        {skills.map((skill) => (

          <div
            key={skill}
            className="bg-[#E7DFC9] border-4 border-[#3A312B] p-4 text-center hover:-translate-y-1 transition"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}