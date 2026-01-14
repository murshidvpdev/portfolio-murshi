import Section from "../components/Section";
import { motion } from "framer-motion";
import './Projects.css'

const projects = [
  {
    title: "Enterprise OCR & Document Intelligence Platform",
    client: "Citi Bank (India), HSBC",
    desc: "Built a high-throughput OCR and document intelligence platform processing millions of financial documents with automated ingestion, validation, and normalization. Achieved ~98% extraction accuracy and reduced manual processing effort by over 90% through rule-driven intelligence and ML-ready pipelines."
  },
  {
    title: "K-1 & K-3 Tax Form Processing System",
    client: "DOZ (USA)",
    desc: "Developed an end-to-end automation system for complex K-1 and K-3 tax forms using template-based and rule-driven parsing. Reduced turnaround time from days to minutes and improved data reconciliation accuracy to ~97%, enabling audit-ready outputs."
  },
  {
    title: "Tax Processing Automation Platform",
    client: "HSBC (India)",
    desc: "Designed a scheduler-driven tax document ingestion and validation platform handling high daily volumes with centralized rule engines and exception workflows. Cut manual review workload by ~85% and significantly improved processing consistency and compliance."
  },
  {
    title: "OCR Text Extraction API Platform",
    client: "Citi Bank (India)",
    desc: "Implemented a scalable OCR-based REST API platform for structured extraction from unstructured documents. Delivered consistent ~98% accuracy with post-processing validations and supported seamless integration across multiple downstream banking systems."
  },
  {
    title: "Customer Document Validation POC",
    client: "Bank Islam (Malaysia)",
    desc: "Built a proof-of-concept platform for onboarding document and digital signature validation using compliance-driven rules. Successfully demonstrated automated verification flows, reducing manual checks by ~70% and accelerating customer onboarding cycles."
  },
  {
    title: "RFQ Quotation & Bidding Automation System",
    client: "Evostel (Saudi Arabia)",
    desc: "Developed an end-to-end RFQ and bidding automation system with RBAC, approval workflows, and real-time reporting. Reduced quotation turnaround time by ~95% and improved transparency and traceability across procurement operations."
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
