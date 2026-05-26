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
            className="bg-[#111827] border border-[#374151] p-4 text-center hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}