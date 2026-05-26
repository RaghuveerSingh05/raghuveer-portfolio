import SectionTitle from "./SectionTitle";

export default function Terminal() {
  return (
    <section
      id="terminal"
      className="bg-black border border-green-500 p-6"
    >

      <SectionTitle title="TERMINAL" />

      <div className="space-y-3 text-green-400">

        <p>{">"} STATUS: ONLINE</p>

        <p>{">"} Learning Data Structures...</p>

        <p>{">"} Exploring AI Systems...</p>

        <p>{">"} Building Games...</p>

        <p>{">"} Current Objective: LEVEL UP</p>

      </div>

    </section>
  );
}