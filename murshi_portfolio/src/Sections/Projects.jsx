import Section from "../components/Section";

export default function Projects() {
  return (
    <section id="projects">
      <Section>
        <h2>Key Projects</h2>

        <div className="card">
          <h3>Enterprise OCR Platform</h3>
          <p>
            High-volume OCR and document intelligence system used by banking
            clients including Citi Bank and HSBC. Built scalable ingestion,
            validation, and ML-ready pipelines.
          </p>
        </div>

        <div className="card" style={{ marginTop: 24 }}>
          <h3>RFQ & Bidding Automation</h3>
          <p>
            End-to-end quotation and approval workflow system for Evostel (Saudi Arabia),
            reducing manual processing time by over 60%.
          </p>
        </div>
      </Section>
    </section>
  );
}
