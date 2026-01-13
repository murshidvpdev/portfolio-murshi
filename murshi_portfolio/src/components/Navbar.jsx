import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const menu = ["Home", "Expertise", "Projects", "Experience", "Contact"];

  return (
    <nav style={navStyle}>
      <h3 style={logo}>Portfolio</h3>

      <div style={links}>
        {menu.map(item => {
          const key = item.toLowerCase();
          const isActive = active === key;

          return (
            <a
              key={item}
              href={`#${key}`}
              onClick={() => setActive(key)}
              style={{
                ...linkStyle,
                ...(isActive ? activeLink : {})
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}


const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "20px 8%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(12px)",
  zIndex: 100,
};

const logo = {
  color: "#fff",
  margin: 0,
};

const links = {
  display: "flex",
  gap: "24px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  cursor: "pointer",
  paddingBottom: "4px",
};

const activeLink = {
  borderBottom: "2px solid #fff",
};
