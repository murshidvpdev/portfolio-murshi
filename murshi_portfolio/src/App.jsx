import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
