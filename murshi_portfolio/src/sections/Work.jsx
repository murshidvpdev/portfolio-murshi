export default function Work({ items }) {
  return (
    <section id="work" className="section wrap">
      <header className="section-head">
        <h2>Client work</h2>
        <p>Production systems I built at KG Information Systems, for banks, a US tax firm and Gulf industrial procurement.</p>
      </header>
      <ol className="work-list">
        {items.map((w) => (
          <li className="work-item" key={w.title}>
            <div className="work-meta">
              <span className="mono client">{w.client}</span>
              {w.impact && <mark>{w.impact}</mark>}
            </div>
            <div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <ul className="chips">{w.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
