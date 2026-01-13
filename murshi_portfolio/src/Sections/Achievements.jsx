import Section from "../components/Section";
import { motion } from "framer-motion";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <Section>
        <div className="achievements-header">
          <h2 className="achievements-title">Achievements</h2>
          <p className="achievements-subtitle">
            Awards, recognition, and professional milestones
          </p>
        </div>

        <div className="achievements-grid">
          {/* Award Card */}
          <motion.div
            className="achievement-card"
            whileHover={{ y: -4 }}
          >
            <div className="achievement-image">
              {/* Replace src with your actual image */}
              <img
                src="/spotlight-award.jpg"
                alt="Spotlight Award"
              />
            </div>

            <h3>Spotlight Award – 2024</h3>
            <span className="achievement-org">
              KGiSL Technologies Pvt Ltd
            </span>

            <p>
              Recognized for outstanding technical delivery, innovation,
              and consistent client impact across enterprise automation
              and document intelligence platforms.
            </p>
          </motion.div>

          {/* Client Recognition Card */}
          <motion.div className="achievement-card" whileHover={{ y: -4 }}>
            <div className="achievement-image">
                <img src="/client-engagement.jpg" alt="Client Engagements" />
            </div>

            <h3>Client Onsite Engagements</h3>

            <ul className="achievement-list">
                <li>
                <strong>HSBC & Citi Bank (India):</strong> Requirement gathering,
                technical demos, solution walkthroughs, and rollout support.
                </li>
                <li>
                <strong>Bank Islam (Malaysia):</strong> POC presentations,
                stakeholder workshops, and change-request discussions.
                </li>
            </ul>
            </motion.div>


          {/* Professional Impact Card */}
          <motion.div className="achievement-card" whileHover={{ y: -4 }}>
            <div className="achievement-image">
                <img src="/professional-impact.jpg" alt="Professional Impact" />
            </div>

            <h3>Professional Impact</h3>

            <ul className="achievement-list">
                <li>
                Recognized as a key contributor for high-priority enterprise
                and banking deliveries.
                </li>
                <li>
                Entrusted with direct client communication and technical
                ownership for international engagements.
                </li>
                <li>
                Consistently acknowledged for problem-solving, reliability,
                and delivery quality.
                </li>
            </ul>
            </motion.div>

        </div>
      </Section>
    </section>
  );
}
