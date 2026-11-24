import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import data from "./data/portfolio.json";
import { slug } from "./posts";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Route from "./sections/Route";
import Work from "./sections/Work";
import Builds from "./sections/Builds";
import Writing from "./sections/Writing";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Recognition from "./sections/Recognition";
import Contact from "./sections/Contact";
import Post from "./sections/Post";
import "./styles/site.css";

const BASE_TITLE = document.title;

/* Blog posts live at #/blog/<slug>; every other hash is a section on the home page. */
function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash;
}

export default function App() {
  const { profile } = data;
  const posts = data.posts || [];
  const hash = useHash();
  const postSlug = hash.startsWith("#/blog/") ? hash.slice(7) : null;

  useEffect(() => {
    if (postSlug) return;
    document.title = BASE_TITLE;
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView(); // coming back from a post to a section
  }, [hash, postSlug]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Toaster position="top-right" />
      <Header profile={profile} hasPosts={posts.length > 0} />
      <main id="main">
        {postSlug ? (
          <Post post={posts.find((p) => slug(p.title) === postSlug)} author={profile.name} />
        ) : (
          <>
            <Hero profile={profile} proof={data.proof} route={data.route} />
            <Route steps={data.route} />
            <Work items={data.work_projects} />
            <Builds items={data.personal_projects} building={data.building} github={profile.github} />
            <Writing posts={posts} />
            <Skills skills={data.skills} />
            <Experience items={data.experience} education={data.education} />
            <Recognition items={data.achievements} />
            <Contact profile={profile} />
          </>
        )}
      </main>
      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">last updated {data.updated}</span>
      </footer>
    </>
  );
}
