import Section from "../components/Section";
import { motion } from "framer-motion";

const skills = [
  "Python / FastAPI / Flask",
  "Backend Architecture",
  "OCR & Document Intelligence",
  "PostgreSQL & Data Pipelines",
  "Automation & APIs",
];

export default function Expertise() {
  return (
    <section id="expertise">
      <Section>
        <h2>Expertise</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 24 }}>
          {skills.map(skill => (
            <motion.div
              key={skill}
              className="card"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <h4>{skill}</h4>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
