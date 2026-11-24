export default function Recognition({ items }) {
  return (
    <section id="recognition" className="section wrap">
      <header className="section-head">
        <h2>Recognition</h2>
      </header>
      <div className="awards">
        {items.map((a) => (
          <article className="award" key={a.title}>
            {a.image && <img src={a.image} alt="" loading="lazy" />}
            <div className="award-body">
              <span className="mono">{[a.org, a.year].filter(Boolean).join(" · ")}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
