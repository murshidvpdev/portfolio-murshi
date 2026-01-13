import Section from "../components/Section";
import { motion } from "framer-motion";
import './Projects.css'
const projects = [
  {
    title: "Enterprise OCR & Document Intelligence Platform",
    client: "Citi Bank (India), HSBC",
    desc: "High-throughput OCR and document intelligence platform for processing complex financial documents with scalable ingestion, validation, and ML-ready pipelines."
  },
  {
    title: "K-1 & K-3 Tax Form Processing System",
    client: "DOZ (USA)",
    desc: "End-to-end automation system to digitize and reconcile complex K-1 and K-3 tax forms using template-driven parsing and audit-ready data pipelines."
  },
  {
    title: "Tax Processing Automation Platform",
    client: "HSBC (India)",
    desc: "Scheduler-driven ingestion and validation platform for high-volume tax document processing with centralized rules and exception handling."
  },
  {
    title: "OCR Text Extraction API Platform",
    client: "Citi Bank (India)",
    desc: "Scalable OCR-based REST API platform for structured data extraction from unstructured documents with accuracy-focused post-processing."
  },
  {
    title: "Customer Document Validation POC",
    client: "Bank Islam (Malaysia)",
    desc: "POC platform to validate onboarding documents and digital signatures using domain-specific compliance rules."
  },
  {
    title: "RFQ Quotation & Bidding Automation System",
    client: "Evostel (Saudi Arabia)",
    desc: "End-to-end RFQ and bidding automation system with role-based access control, approval workflows, and real-time analytics."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Section>
        <h2 className="projects-title">Business Case</h2>
        <div className="projects-grid-wrapper">
            <div className="projects-grid">
                {projects.map((project) => (
                <motion.div
                    key={project.title}
                    className="projects-card"
                    whileHover={{ y: -4 }}
                >
                    <h3>{project.title}</h3>
                    <span className="project-client">{project.client}</span>
                    <p>{project.desc}</p>
                </motion.div>
                ))}
            </div>
        </div>

      </Section>
    </section>
  );
}
