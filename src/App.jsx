import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="crt flex bg-[#0B1020] text-white">

      <Sidebar />

      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-12 space-y-24">

        <Landing />

        <Skills />

        <Projects />

        <Terminal />

        <Footer />

      </main>

    </div>
  );
}