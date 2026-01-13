import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}
