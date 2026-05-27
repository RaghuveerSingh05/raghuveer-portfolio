// src/components/Contact.jsx

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

      <div className="bg-[#0b0b12] text-gray-100 p-6 space-y-6">

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border-4 border-[#7e31e2] p-4">

            <p className="text-sm mb-2">
              EMAIL
            </p>

            <div className="flex items-center gap-3">

              <FaEnvelope />

              <p>
                raghuveersinghshekhawat2005@gmail.com
              </p>

            </div>

          </div>

          <div className="border-4  border-[#7e31e2] p-4">

            <p className="text-sm mb-2">
              PHONE
            </p>

            <div className="flex items-center gap-3">

              <FaPhone />

              <p>
                +91 80858 23115 
              </p>

            </div>

          </div>

        </div>

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://github.com/RaghuveerSingh05"
            target="_blank"
            className="flex items-center gap-2 bg-[#6D28D9] text-white px-6 py-3 border-4 border-[#3A312B]"
          >

            <FaGithub />

            GITHUB

          </a>

          <a
            href="https://www.linkedin.com/in/raghuveer-singh-shekhawat-ab589332b/"
            target="_blank"
            className="flex items-center gap-2 bg-[#0891B2] text-white px-6 py-3 border-4 border-[#3A312B]"
          >

            <FaLinkedin />

            LINKEDIN

          </a>

        </div>

      </div>

    </section>
  );
}