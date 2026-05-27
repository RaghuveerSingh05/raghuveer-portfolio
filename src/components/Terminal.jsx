import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Terminal() {
  const lines = [
    "C:\\RAGHUVEER_DEV> SYSTEM ONLINE",
    "C:\\RAGHUVEER_DEV> Learning DSA...",
    "C:\\RAGHUVEER_DEV> Building Games...",
    "C:\\RAGHUVEER_DEV> Exploring AI Systems...",
    "C:\\RAGHUVEER_DEV> STATUS ACTIVE _"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentLine[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 35); // typing speed

      return () => clearTimeout(timeout);
    } else {
      // move to next line
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + "\n");
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <section
      id="terminal"
      className="bg-[#1E1B18] border-4 border-[#3A312B] text-green-400 p-6 font-mono"
    >
      <SectionTitle title="TERMINAL" />

      {/* FIXED SIZE CONTAINER */}
      <div className="mt-4 h-40 overflow-hidden whitespace-pre-wrap relative">

        <pre className="text-sm leading-relaxed">
          {displayedText}
        </pre>

        {/* blinking cursor */}
        <span className="animate-pulse">_</span>

      </div>
    </section>
  );
}