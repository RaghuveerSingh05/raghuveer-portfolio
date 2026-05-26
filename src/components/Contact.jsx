import SectionTitle from "./SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">

      <SectionTitle title="CONTACT" />

      <div className="bg-[#111827] border border-[#374151] p-6 space-y-6">

        <p className="text-lg text-gray-300">
          Interested in collaborations,
          internships, or opportunities?
        </p>

        {/* Contact Info */}

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border border-[#374151] p-4 flex items-center gap-4 hover:border-cyan-400 transition">

            <FaEnvelope className="text-cyan-400 text-xl" />

            <div>
              <p className="text-gray-400 text-sm">
                EMAIL
              </p>

              <p>
                yourmail@gmail.com
              </p>
            </div>

          </div>

          <div className="border border-[#374151] p-4 flex items-center gap-4 hover:border-cyan-400 transition">

            <FaPhone className="text-cyan-400 text-xl" />

            <div>
              <p className="text-gray-400 text-sm">
                PHONE
              </p>

              <p>
                +91 XXXXX XXXXX
              </p>
            </div>

          </div>

        </div>

        {/* Social Buttons */}

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://github.com/RaghuveerSingh05"
            target="_blank"
            className="flex items-center gap-2 bg-purple-600 px-6 py-3 border-2 border-black hover:bg-purple-500 transition"
          >

            <FaGithub />

            GITHUB

          </a>

          <a
            href="www.linkedin.com/in/raghuveer-singh-shekhawat-ab589332b"
            target="_blank"
            className="flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 border-2 border-black hover:bg-cyan-400 transition"
          >

            <FaLinkedin />

            LINKEDIN

          </a>

        </div>

      </div>

    </section>
  );
}