export default function Experience({ items, education }) {
  return (
    <section id="experience" className="section wrap">
      <header className="section-head">
        <h2>Experience</h2>
      </header>
      {items.map((e) => (
        <article className="job" key={e.role + e.company}>
          <div className="job-side">
            <span className="mono">{e.period}</span>
            <span>{e.location}</span>
          </div>
          <div>
            <h3>{e.role}</h3>
            <p className="job-co">{e.company}</p>
            <ul className="job-list">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <ul className="chips">{e.skills.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </article>
      ))}
      {education && (
        <article className="job">
          <div className="job-side"><span className="mono">education</span></div>
          <p className="edu">{education}</p>
        </article>
      )}
    </section>
  );
}
