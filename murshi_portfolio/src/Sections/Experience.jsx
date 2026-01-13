import Section from "../components/Section";

export default function Experience() {
  return (
    <section id="experience">
      <Section>
        <h2>Experience</h2>

        <div className="card">
          <h3>KGISL Technologies</h3>
          <p>Senior Python Developer (2021 – Present)</p>
          <ul style={{ marginTop: 12, color: "#bdbdbd" }}>
            <li>Enterprise backend systems</li>
            <li>OCR & document intelligence platforms</li>
            <li>Client-facing APIs & automation</li>
          </ul>
        </div>
      </Section>
    </section>
  );
}
