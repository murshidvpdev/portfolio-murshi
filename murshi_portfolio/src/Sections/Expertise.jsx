import Section from "../components/Section";
import { motion } from "framer-motion";
import './Expertise.css'

const skills = [
  {
    title: "Python / FastAPI / Flask",
    desc: "High-performance backend services, REST APIs, async processing"
  },
  {
    title: "Backend Architecture",
    desc: "Scalable, secure system design with clean architecture"
  },
  {
    title: "OCR & Document Intelligence",
    desc: "Automated document parsing, extraction, and classification"
  },
  {
    title: "PostgreSQL & Data Pipelines",
    desc: "Optimized queries, ETL pipelines, analytics-ready data"
  },
  {
    title: "Automation & APIs",
    desc: "Workflow automation, third-party integrations, microservices"
  },
  {
    title: "Cloud & Deployment",
    desc: "Docker, CI/CD pipelines, cloud-native deployments"
  },
  {
    title: "Security & Auth",
    desc: "JWT, OAuth2, role-based access, API security best practices"
  },
  {
    title: "Performance & Scaling",
    desc: "Caching, async jobs, background workers, load optimization"
  }
];


export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <Section>
        <h2 className="expertise-title">LOOK WHAT I CAN DO</h2>

        <div className="expertise-grid">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              className="expertise-card"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
