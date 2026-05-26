import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <main className="flex-1 p-6 md:p-10 space-y-16">

        <Landing />

        <Skills />

        <Projects />

        <Terminal />

        <Footer />

      </main>

    </div>
  );
}