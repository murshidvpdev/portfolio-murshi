import { useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";


export default function Navbar() {
  const menu = [
    "home",
    "expertise",
    "projects",
    "experience",
    "achievements"
  ];

  // 👇 Automatically updates based on scroll
  const activeSection = useScrollSpy(menu, 90); // 90 = navbar height

  return (
    <nav style={navStyle}>
      <h3 style={logo}>📍 Kerala, India</h3>

      <div style={right}>
        <div style={links}>
          {menu.map((key) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            const isActive = activeSection === key;

            return (
              <a
                key={key}
                href={`#${key}`}
                style={{
                  ...linkStyle,
                  ...(isActive ? activeLink : {}),
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        <a href="#contact" style={ctaBtn}>
          Contact Me
        </a>
      </div>
    </nav>
  );
}


/* ---------------- STYLES ---------------- */

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "20px 8%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(242, 242, 242, 0.85)",
  backdropFilter: "blur(10px)",
  zIndex: 100,
};

const logo = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#111",
  margin: 0,
};

const right = {
  display: "flex",
  alignItems: "center",
  gap: "32px",
};

const links = {
  display: "flex",
  gap: "28px",
};

const linkStyle = {
  color: "#444",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 500,
  paddingBottom: "6px",
  cursor: "pointer",
};

const activeLink = {
  color: "#111",
  borderBottom: "2px solid #111",
};

const ctaBtn = {
  padding: "10px 18px",
  background: "#111",
  color: "#fff",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
};
