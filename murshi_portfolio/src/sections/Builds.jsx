import { FaGithub } from "react-icons/fa";

export default function Builds({ items, building, github }) {
  return (
    <section id="builds" className="section wrap">
      <header className="section-head">
        <h2>Things I build on my own</h2>
        <p>Personal projects, not client work: where I try agents, RAG and new tooling before they reach production.</p>
      </header>
      <div className="builds">
        {items.map((b) => (
          <article className="build" key={b.title}>
            <div className="build-top">
              <h3>{b.title}</h3>
              <span className="mono status">{b.status}</span>
            </div>
            <p>{b.desc}</p>
            <ul className="chips">{b.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            {b.link && (
              <a className="build-link" href={b.link} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> View code
              </a>
            )}
          </article>
        ))}
      </div>

      {building?.length > 0 && (
        <div className="building">
          <h3 className="building-title"><span className="pulse" aria-hidden="true" />Building now</h3>
          <ul>
            {building.map((b) => (
              <li key={b.title}>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.desc}</p>
                </div>
                {b.link ? (
                  <a className="mono" href={b.link} target="_blank" rel="noreferrer">code →</a>
                ) : (
                  <span className="mono">{b.status}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="more"><a href={github} target="_blank" rel="noreferrer">More on GitHub →</a></p>
    </section>
  );
}
