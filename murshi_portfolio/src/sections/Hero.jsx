import { IconContext } from "react-icons";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub ,FaEnvelope ,FaPhone} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" style={heroSection}>
      <Section>
        <div style={layout}>
          
          {/* LEFT CONTENT */}
          <div style={content}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={title}
                >
                Hi, I’m Murshid VP
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={subtitle}
                >
                I’m a <span style={highlight}>Python Developer | ML Engineer | Data Analyst</span> with almost 5 years of experience in web development, data analytics, and ML-driven solutions. I enjoy analyzing data, predicting trends, and visualizing results to solve complex business problems efficiently
            </motion.p>


            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={ctaBtn}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            >
            
              Reach me 
            </motion.button>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={imageWrapper}
          >
            <img src="/profile.jpg" alt="Murshid VP" style={heroImage} />

            {/* SOCIALS */}
            <IconContext.Provider value={{ color: "#000", size: "20px" }}>
            <div style={socials}>
              <a href="https://www.linkedin.com/in/murshid-vp-554244204/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/murshidvpdev/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:murshidvp.dev@gmail.com">
                <FaEnvelope />
              </a>
              <a href="tel:+919995332723">
                <FaPhone />
              </a>
            </div>
            </IconContext.Provider>
          </motion.div>

        </div>
      </Section>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const heroSection = {
  minHeight: "100vh",
  background: "#f2f2f2",
  display: "flex",
  alignItems: "center",
};

const layout = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "80px",
};

const content = {
  maxWidth: "520px",
};

const title = {
  fontSize: "56px",
  fontWeight: 700,
  color: "#111",
};

const subtitle = {
  marginTop: "16px",
  fontSize: "18px",
  color: "#555",
  lineHeight: 1.6,
};

const highlight = {
  background: "#ffe3d3",
  padding: "2px 6px",
  fontWeight: 600,
  color: "#000",
};

const ctaBtn = {
  marginTop: "32px",
  padding: "14px 34px",
  background: "#111",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
};

const imageWrapper = {
  position: "relative",
  left: '40px'
};

const heroImage = {
  width: "360px",
  height: "460px",
  objectFit: "cover",
  border: "3px solid #rgb(204, 186, 175)",
};

const socials = {
  color: "#000", // ✅ must be a string
  position: "absolute",
  right: "-48px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  fontSize: "20px",
};
