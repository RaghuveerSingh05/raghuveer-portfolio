import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section>

      <SectionTitle title="CONTACT" />

      <div className="bg-[#111827] border border-[#374151] p-6 space-y-4">

        <p className="text-lg">
          Interested in collaborating,
          internships, or projects?
        </p>

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://github.com/RaghuveerSingh05"
            target="_blank"
            className="bg-purple-600 px-6 py-3 border-2 border-black hover:bg-purple-500 transition"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="bg-cyan-500 text-black px-6 py-3 border-2 border-black hover:bg-cyan-400 transition"
          >
            LINKEDIN
          </a>

        </div>

      </div>

    </section>
  );
}