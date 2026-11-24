/* A real sequence, so the steps are numbered: how the work grew from Python scripts to deploying AI with clients. */
export default function Route({ steps }) {
  if (!steps?.length) return null;
  return (
    <section id="route" className="section wrap">
      <header className="section-head">
        <h2>My route</h2>
        <p>Each step added to the last: I still write the Python, the backend, the deploy pipeline and the UI behind the AI I ship.</p>
      </header>
      <ol className="route-steps">
        {steps.map((s, i) => (
          <li key={s.role} className={i === steps.length - 1 ? "step current" : "step"}>
            <span className="step-dot" aria-hidden="true" />
            <span className="mono step-n">
              {String(i + 1).padStart(2, "0")}{s.years ? ` · ${s.years}` : ""}
            </span>
            <h3><span>{s.role}</span></h3>
            <p>{s.what}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
