import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="app loaded">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
