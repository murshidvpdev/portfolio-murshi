import Section from "../components/Section";
import { motion } from "framer-motion";
import './Expertise.css'

const skills = [
  {
    title: "Python Frameworks",
    desc: "Backend development using Flask and FastAPI with strong API design; basic experience with Django for MVC-based applications"
  },
  {
    title: "Backend Architecture",
    desc: "Scalable and secure system design using clean architecture, microservices, and event-driven patterns"
  },
  {
    title: "REST APIs & Microservices",
    desc: "Design and development of RESTful APIs, service-to-service communication, and scheduler-based workflows"
  },
  {
    title: "OCR & Document Intelligence",
    desc: "End-to-end OCR pipelines including document parsing, text extraction, classification, and rule-based intelligence"
  },
  {
    title: "NLP & Text Processing",
    desc: "Regex-based parsing, keyword extraction, document segmentation, and selective use of NLP concepts like tokenization and NER"
  },
  {
    title: "PostgreSQL & Advanced SQL",
    desc: "Complex queries using CTEs, joins, aggregations, indexing strategies, and performance tuning"
  },
  {
    title: "Data Engineering Foundations",
    desc: "Data cleaning, normalization, validation, and ML-ready pipeline design using Pandas and NumPy"
  },
  {
    title: "Automation & Workflow Systems",
    desc: "Background jobs, scheduled tasks, API-driven automation, and third-party system integrations"
  },
  {
    title: "Security & Authentication",
    desc: "JWT, OAuth2, role-based access control, and secure API implementation best practices"
  },
  {
    title: "Performance & Scaling",
    desc: "Caching strategies, async processing, background workers, and load optimization for high-throughput systems"
  },
  {
    title: "Chatbot Development (React)",
    desc: "Frontend chatbot interfaces built with React, integrating backend APIs and conversational workflows"
  },
  {
    title: "Frontend & Reporting",
    desc: "HTML, CSS, JavaScript with jQuery and charting libraries to build analytical dashboards and reporting views"
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
