import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="crt flex bg-[#0B1020] text-white">

      <MobileNav />

      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 max-w-7xl mx-auto p-6 pt-24 md:pt-12 md:p-12 space-y-24">

        <Landing />

        <Skills />

        <Projects />

        <Terminal />
        
        <Contact />

        <Footer />

      </main>

    </div>
  );
}