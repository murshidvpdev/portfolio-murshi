import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import useScrollSpy from "../hooks/useScrollSpy";

export default function Navbar() {
  const menu = ["home", "expertise", "projects", "experience", "achievements"];

  const activeSection = useScrollSpy(menu, 90);

  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect mobile
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  /* ================= DESKTOP NAVBAR (UNCHANGED) ================= */
  if (!isMobile) {
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
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={navUnderline}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
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

  /* ================= MOBILE NAVBAR ================= */
  return (
    <nav style={mobileNav}>
      <h3 style={logo}>📍 Kerala, India</h3>

      <button style={menuBtn} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div style={mobileMenu}>
          {menu.map((key) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1);

            return (
              <a
                key={key}
                href={`#${key}`}
                style={mobileLink}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            );
          })}

          <a
            href="#contact"
            style={{ ...mobileLink, ...mobileCta }}
            onClick={() => setOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}

/* ================= STYLES ================= */

/* DESKTOP */
const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "20px 8%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "transparent",
  zIndex: 100,
};

const logo = {
  fontSize: "20px",
  fontWeight: 700,
  color: "var(--text-primary)",
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
  position: "relative",
  color: "var(--text-secondary)",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 500,
  paddingBottom: "6px",
  transition: "color 0.2s ease",
};

const activeLink = {
  color: "var(--accent-light)",
  textShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
};

const navUnderline = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "2px",
  borderRadius: "2px",
  background: "var(--accent-gradient)",
  boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
};

const ctaBtn = {
  padding: "10px 18px",
  background: "var(--accent-gradient)",
  color: "#fff",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
  boxShadow: "var(--glow-soft)",
};

/* MOBILE */
const mobileNav = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "transparent",
  zIndex: 100,
};

const menuBtn = {
  fontSize: "22px",
  color: "var(--text-primary)",
  background: "none",
  border: "none",
  cursor: "pointer",
};

const mobileMenu = {
  position: "absolute",
  top: "64px",
  left: 0,
  width: "100%",
  background: "var(--surface-solid)",
  borderBottom: "1px solid var(--border)",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
};

const mobileLink = {
  padding: "14px 24px",
  textDecoration: "none",
  color: "var(--text-primary)",
  fontSize: "16px",
  fontWeight: 500,
};

const mobileCta = {
  color: "var(--accent-light)",
  fontWeight: 600,
};
