import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Section>
        <div style={heroWrapper}>
          
          {/* LEFT CONTENT */}
          <div style={left}>
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Murshid VP
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Senior Python Developer specializing in scalable backend systems,
              automation platforms, and enterprise document intelligence solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: 30 }}
            >
              <button style={ctaBtn}>Let’s work together</button>
            </motion.div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={right}
          >
            <img
              src="/profile.jpg"
              alt="Murshid VP"
              style={profileImage}
            />
          </motion.div>

        </div>
      </Section>
    </section>
  );
}


const heroWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "60px",
};

const left = {
  flex: 1,
};

const right = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

const profileImage = {
  width: "320px",
  height: "320px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid rgba(255,255,255,0.15)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  objectPosition: "center 20%",
};

const ctaBtn = {
  padding: "14px 28px",
  fontSize: "16px",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  background: "linear-gradient(135deg, #6ee7ff, #8b5cf6)",
  color: "#000",
  fontWeight: 600,
};
