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
            className="pixel-window mc-block p-4 text-center"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}