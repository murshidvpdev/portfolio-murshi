import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from "react";

import Section from "../components/Section";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub ,FaEnvelope ,FaPhone} from "react-icons/fa";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorGlow, setCursorGlow] = useState({ x: 50, y: 40 });
  const heroCardRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    setCursorGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="hero" id="home" style={heroSection(isMobile)}>
      <Section>
        <div ref={heroCardRef} onMouseMove={handleMouseMove} style={heroCard(isMobile)}>
        {!isMobile && <div style={cursorGlowStyle(cursorGlow)} />}
        <div style={{
          ...layout,
          position: "relative",
          zIndex: 1,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "40px" : "80px",
          textAlign: isMobile ? "center" : "left",
        }}>

          {/* LEFT CONTENT */}
          <div style={content}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={title(isMobile)}
                >
                Hi, I’m Murshid VP
                </motion.h1>

                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                style={roleLine}
                >
                Python Developer | ML Engineer | Data Analyst
                </motion.h2>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={subtitle}
                >
                Almost 5 years building web, data, and ML-driven solutions — turning complex data into clear, actionable insights.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={ctaRow(isMobile)}
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(59, 130, 246, 0.45)" }}
                whileTap={{ scale: 0.98 }}
                style={ctaBtn}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Reach me
              </motion.button>

              <motion.a
                href="/Murshid_VP_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Murshid_VP_Resume.pdf"
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(59, 130, 246, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                style={resumeBtn}
              >
                View Resume
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={imageWrapper(isMobile)}
          >
            <div style={imageGlow(isMobile)} />
            <img src="/profile.jpg" alt="Murshid VP" style={heroImage(isMobile)} />

            {/* SOCIALS */}
            <IconContext.Provider value={{ color: "var(--accent-light)", size: "18px" }}>
            <div style={socials(isMobile)}>
              <a href="https://www.linkedin.com/in/murshid-vp-554244204/" target="_blank" rel="noreferrer" style={socialIcon} aria-label="LinkedIn profile">
                <FaLinkedin />
              </a>
              <a href="https://github.com/murshidvpdev/" target="_blank" rel="noreferrer" style={socialIcon} aria-label="GitHub profile">
                <FaGithub />
              </a>
              <a href="mailto:murshidvp.dev@gmail.com" style={socialIcon} aria-label="Send an email">
                <FaEnvelope />
              </a>
              <a href="tel:+919995332723" style={socialIcon} aria-label="Call phone number">
                <FaPhone />
              </a>
            </div>
            </IconContext.Provider>
          </motion.div>

        </div>
        </div>
      </Section>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const heroSection = (isMobile) => ({
  minHeight: isMobile ? "auto" : "100vh",
  display: "flex",
  alignItems: isMobile ? "flex-start" : "center",
  justifyContent: "center",
  padding: isMobile ? "110px 5% 40px" : "40px 5%",
  background: "transparent",
});

const heroCard = (isMobile) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "40px 24px" : "72px 80px",
  borderRadius: isMobile ? "24px" : "32px",
  background: "linear-gradient(160deg, var(--bg-elevated), var(--bg-secondary))",
  border: "1px solid var(--border)",
  boxShadow: "0 0 120px rgba(59, 130, 246, 0.18), 0 30px 80px rgba(0, 0, 0, 0.5)",
});

const cursorGlowStyle = ({ x, y }) => ({
  position: "absolute",
  left: `${x}%`,
  top: `${y}%`,
  width: "420px",
  height: "420px",
  transform: "translate(-50%, -50%)",
  background: "radial-gradient(circle, rgba(59, 130, 246, 0.18), transparent 70%)",
  filter: "blur(20px)",
  pointerEvents: "none",
  zIndex: 0,
  transition: "left 0.15s ease-out, top 0.15s ease-out",
});


const layout = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "80px",
};

const content = {
  maxWidth: "600px",
};

const title = (isMobile) => ({
  fontSize: isMobile ? "40px" : "52px",
  fontWeight: 700,
  whiteSpace: isMobile ? "normal" : "nowrap",
  color: "var(--text-primary)",
});

const roleLine = {
  marginTop: "10px",
  fontSize: "22px",
  fontWeight: 600,
  color: "var(--accent-light)",
  textShadow: "0 0 24px rgba(59, 130, 246, 0.55)",
};

const subtitle = {
  marginTop: "16px",
  fontSize: "18px",
  color: "var(--text-secondary)",
  lineHeight: 1.6,
};

const ctaRow = (isMobile) => ({
  display: "flex",
  gap: "16px",
  marginTop: "32px",
  justifyContent: isMobile ? "center" : "flex-start",
  flexWrap: "wrap",
});

const ctaBtn = {
  padding: "14px 34px",
  background: "var(--accent-gradient)",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  boxShadow: "var(--glow-soft)",
};

const resumeBtn = {
  padding: "14px 34px",
  background: "transparent",
  color: "var(--accent-light)",
  border: "1px solid var(--border-strong)",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
};

const imageWrapper = (isMobile) => ({
  position: "relative",
  right: isMobile ? "0px" : "80px",
});

const imageGlow = (isMobile) => ({
  position: "absolute",
  inset: isMobile ? "-15% -15% -25% -15%" : "-60px -80px -100px -40px",
  background:
    "radial-gradient(circle at 65% 70%, rgba(59, 130, 246, 0.65), rgba(34, 211, 238, 0.35) 45%, rgba(59, 130, 246, 0.12) 65%, transparent 78%)",
  filter: "blur(50px)",
  pointerEvents: "none",
  zIndex: 0,
});

const heroImage = (isMobile) => ({
  position: "relative",
  zIndex: 1,
  width: isMobile ? "260px" : "360px",
  height: isMobile ? "320px" : "460px",
  objectFit: "cover",
  borderRadius: "16px",
  border: "1px solid var(--border-strong)",
  boxShadow: "0 0 60px rgba(59, 130, 246, 0.3)",
});

const socials = (isMobile) => ({
  position: isMobile ? "static" : "absolute",
  zIndex: 1,
  right: isMobile ? "0" : "-48px",
  top: isMobile ? "auto" : "50%",
  transform: isMobile ? "none" : "translateY(-50%)",
  display: "flex",
  flexDirection: isMobile ? "row" : "column",
  gap: "16px",
  justifyContent: "center",
  marginTop: isMobile ? "16px" : "0",
});

const socialIcon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  background: "var(--surface)",
  border: "1px solid var(--border-strong)",
  boxShadow: "var(--glow-soft)",
};
