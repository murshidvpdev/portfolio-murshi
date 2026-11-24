function Column({ title, note, groups, tone }) {
  return (
    <div className={`skill-col ${tone}`}>
      <h3>{title}</h3>
      <p className="col-note">{note}</p>
      {groups.map((g) => (
        <div className="skill-group" key={g.group}>
          <h4 className="mono">{g.group}</h4>
          <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section wrap">
      <header className="section-head">
        <h2>Skills, by proof</h2>
        <p>Sorted by where I've used them, so you know what's battle-tested.</p>
      </header>
      <div className="skill-cols">
        <Column title="In production" note="Used at work, on client systems." groups={skills.production} tone="prod" />
        <Column title="In personal projects" note="Built and working, not yet on client systems." groups={skills.personal} tone="side" />
      </div>
    </section>
  );
}
