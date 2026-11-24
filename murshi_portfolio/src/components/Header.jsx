import { useState } from "react";

const LINKS = [
  ["route", "Route"],
  ["work", "Work"],
  ["builds", "Builds"],
  ["blog", "Blog"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export default function Header({ profile, hasPosts }) {
  const [open, setOpen] = useState(false);
  const links = LINKS.filter(([id]) => hasPosts || id !== "blog");
  return (
    <header className="header">
      <div className="wrap header-row">
        <a href="#top" className="brand">{profile.name}</a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-small" href={profile.resume} target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}
