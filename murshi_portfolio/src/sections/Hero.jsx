import { FaGithub, FaLinkedin } from "react-icons/fa";

/* The signature: a scanned page whose highlighted lines are "extracted" into structured fields. */
export default function Hero({ profile, proof }) {
  const [role, focus] = profile.headline.split("—").map((s) => s.trim());
  return (
    <section id="top" className="hero wrap">
      <div className="hero-text">
        <p className="eyebrow">
          <img src={profile.photo} alt="" className="avatar" />
          {profile.name} · {profile.location.split(",").slice(-2).join(",").trim()}
        </p>
        <h1>{role}</h1>
        {focus && <p className="hero-sub">{focus}</p>}
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
        <div className="scan" aria-hidden="true">
          <div className="scan-head">
            <span>career_record.pdf</span><span>p.1</span>
          </div>
          {proof.map((p, i) => (
            <div className="scan-block" key={p.field} style={{ "--i": i }}>
              <span className="bar w60" />
              <span className="bar w90 hl" />
              <span className="bar w40" />
            </div>
          ))}
        </div>
        <dl className="fields">
          <div className="fields-head mono">extracted · {proof.length} fields</div>
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
