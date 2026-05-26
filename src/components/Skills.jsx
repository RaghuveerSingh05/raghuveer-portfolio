import skills from "../data/skills";

export default function Skills() {
  return (
    <section>

      <h2 className="pixel-title text-xl text-purple-400 mb-6">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        {skills.map((skill) => (

          <div
            key={skill}
            className="bg-[#111827] border border-[#374151] p-4 text-center hover:border-cyan-400 transition"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}