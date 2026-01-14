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
                  Architected and delivered scalable backend systems and microservices using
                  Python, FastAPI, Flask, and Django, supporting high-volume enterprise
                  workloads in production environments.
                </li>
                <li>
                  Led large-scale automation and document intelligence platforms for global
                  clients including Citi Bank (India), DOZ (USA), Bank Islam (Malaysia), and
                  Evostel (Saudi Arabia), significantly reducing manual processing effort.
                </li>
                <li>
                  Designed and implemented end-to-end document pipelines covering ingestion,
                  OCR-based extraction, intelligent parsing, validation, exception handling,
                  and audit-ready outputs, achieving ~97–98% data accuracy.
                </li>
                <li>
                  Built ML-ready data workflows using Pandas for schema validation,
                  normalization, reconciliation, and structured reporting, enabling future
                  ML integration.
                </li>
                <li>
                  Optimized PostgreSQL schemas, indexes, and complex SQL queries to handle
                  large transactional datasets with improved performance and reliability.
                </li>
                <li>
                  Collaborated in Agile teams using Jira for sprint planning, estimation, and
                  delivery tracking, ensuring predictable and on-time releases.
                </li>
                <li>
                  Followed Git-based development workflows with feature branching, pull
                  requests, peer code reviews, and controlled release management.
                </li>
                <li>
                  Mentored junior developers, conducted code reviews on critical modules, and
                  enforced clean coding and architectural best practices.
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
