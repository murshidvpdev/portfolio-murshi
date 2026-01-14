import { useEffect, useState } from "react";
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

/* MOBILE */
const mobileNav = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(242, 242, 242, 0.95)",
  backdropFilter: "blur(10px)",
  zIndex: 100,
};

const menuBtn = {
  fontSize: "22px",
  background: "none",
  border: "none",
  cursor: "pointer",
};

const mobileMenu = {
  position: "absolute",
  top: "64px",
  left: 0,
  width: "100%",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const mobileLink = {
  padding: "14px 24px",
  textDecoration: "none",
  color: "#111",
  fontSize: "16px",
  fontWeight: 500,
};

const mobileCta = {
  fontWeight: 600,
};
