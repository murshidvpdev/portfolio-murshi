import { Toaster } from "react-hot-toast";
import data from "./data/portfolio.json";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Builds from "./sections/Builds";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Recognition from "./sections/Recognition";
import Contact from "./sections/Contact";
import "./styles/site.css";

export default function App() {
  const { profile } = data;
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Toaster position="top-right" />
      <Header profile={profile} />
      <main id="main">
        <Hero profile={profile} proof={data.proof} />
        <Work items={data.work_projects} />
        <Builds items={data.personal_projects} github={profile.github} />
        <Skills skills={data.skills} learning={data.learning} />
        <Experience items={data.experience} education={data.education} />
        <Recognition items={data.achievements} />
        <Contact profile={profile} />
      </main>
      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">last updated {data.updated}</span>
      </footer>
    </>
  );
}
