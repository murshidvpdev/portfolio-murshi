import { FaGithub, FaLinkedin } from "react-icons/fa";

/* Marks the value inside its source sentence, so the page reads like a document being annotated. */
function Sentence({ text, value }) {
  const at = text.indexOf(value);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="hit">{value}</span>
      {text.slice(at + value.length)}
    </>
  );
}

/* The signature: a career report is scanned, its key figures are boxed, then extracted into fields. */
export default function Hero({ profile, proof, route = [] }) {
  const [role] = profile.headline.split("—").map((s) => s.trim());
  return (
    <section id="top" className="hero wrap">
      <div className="hero-text">
        <p className="eyebrow">
          <img src={profile.photo} alt="" className="avatar" />
          {profile.name} · {profile.location.split(",").slice(-2).join(",").trim()}
        </p>
        <h1>{role}</h1>
        {route.length > 0 && (
          <ol className="route-line mono" aria-label="Career route">
            {route.map((r, i) => (
              <li key={r.role} className={i === route.length - 1 ? "now" : undefined}><span>{r.role}</span></li>
            ))}
          </ol>
        )}
        <p className="lede">{profile.intro}</p>
        <div className="cta-row">
          <a className="btn" href="#contact">Get in touch</a>
          <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">Download resume</a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        </div>
        <p className="open-to"><span className="dot" aria-hidden="true" />Open to {profile.open_to}</p>
      </div>

      <figure className="extract" aria-label="Career highlights as extracted fields">
        <div className="report" aria-hidden="true">
          <div className="report-bar mono"><span>career_record.pdf</span><span>p. 1 / 1</span></div>
          <div className="page">
            <span className="sweep" />
            <div className="page-head">
              <span className="seal">MV</span>
              <div>
                <p className="page-title">Career record</p>
                <p className="page-ref mono">{profile.name} · {role}</p>
              </div>
            </div>
            <p className="page-label mono">Highlights</p>
            <ol className="lines">
              {proof.map((p, i) => (
                <li key={p.field} style={{ "--i": i }}>
                  <Sentence text={p.source || `${p.note}: ${p.value}.`} value={p.value} />
                </li>
              ))}
            </ol>
            <div className="page-foot">
              <span className="ghost w70" />
              <span className="ghost w45" />
            </div>
          </div>
        </div>
        <dl className="fields">
          <div className="fields-head mono"><span>extracted</span><span>{proof.length} fields</span></div>
          {proof.map((p, i) => (
            <div className="field" key={p.field} style={{ "--i": i }}>
              <dt className="mono">{p.field}</dt>
              <dd>
                <strong>{p.value}</strong>
                <span>{p.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </figure>
    </section>
  );
}
