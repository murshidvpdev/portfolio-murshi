import { slug, excerpt, niceDate } from "../posts";

export default function Writing({ posts }) {
  if (!posts?.length) return null;
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section id="blog" className="section wrap">
      <header className="section-head">
        <h2>Blog</h2>
        <p>Notes from building: what worked, what broke, and what I'd do again.</p>
      </header>
      <div className="posts">
        {sorted.map((p) => (
          <article className="post-card" key={p.title}>
            <span className="mono">{niceDate(p.date)}</span>
            <h3><a href={`#/blog/${slug(p.title)}`}>{p.title}</a></h3>
            <p>{excerpt(p.body)}</p>
            <a className="read" href={`#/blog/${slug(p.title)}`}>Read post →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
