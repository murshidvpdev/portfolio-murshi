import Section from "../components/Section";
import { motion } from "framer-motion";
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <Section>
        <div className="experience-header-wrapper">
            <h2 className="experience-title">Experience</h2>
            <p className="experience-subtitle">
                Professional experience and responsibilities
            </p>
        </div>
        <div className="experience-timeline">
          {/* Timeline Item */}
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-content">
              <div className="experience-header">
                <h3>Senior Software Developer</h3>
                <span className="experience-duration">
                  Aug 2021 – Present
                </span>
              </div>

              <div className="experience-company">
                KGISL Technologies Pvt Ltd
              </div>

              <ul className="experience-list">
                <li>
                  Architected and delivered high-performance backend applications
                  and microservices using Python, FastAPI, Flask, and Django.
                </li>
                <li>
                  Led enterprise automation and document intelligence platforms
                  for clients including Citi Bank (India), DOZ (USA), Bank Islam
                  (Malaysia), and Evostel (Saudi Arabia).
                </li>
                <li>
                  Designed end-to-end pipelines for document ingestion, OCR-based
                  extraction, intelligent parsing, validation, and exception
                  handling.
                </li>
                <li>
                  Built ML-ready workflows using Pandas for schema validation,
                  normalization, reconciliation, and reporting.
                </li>
                <li>
                  Optimized PostgreSQL schemas and complex SQL queries for
                  high-volume transactional systems.
                </li>
                <li>
                  Worked in Agile teams using Jira for sprint planning,
                  estimations, and delivery tracking.
                </li>
                <li>
                  Followed Git-based workflows with feature branching, pull
                  requests, code reviews, and release management.
                </li>
                <li>
                  Mentored junior developers and reviewed critical code paths.
                </li>
              </ul>

              <div className="experience-skills">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Flask</span>
                <span>Django</span>
                <span>OCR</span>
                <span>PostgreSQL</span>
                <span>Pandas</span>
                <span>Microservices</span>
                <span>Git</span>
                <span>Jira</span>
                <span>CI/CD</span>
                <span>Agile</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </section>
  );
}
