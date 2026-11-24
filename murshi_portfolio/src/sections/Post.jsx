import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { niceDate } from "../posts";

export default function Post({ post, author, linkedin }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = post ? `${post.title} · ${author}` : `Post not found · ${author}`;
  }, [post, author]);

  if (!post) {
    return (
      <section className="section wrap article">
        <a className="back mono" href="#blog">← All posts</a>
        <h1>This post isn't here</h1>
        <p>It may have been renamed. See all posts on the home page.</p>
      </section>
    );
  }
  // The first line is usually the title itself; don't repeat it.
  const blocks = post.body.split(/\n{2,}/).map((b) => b.trim());
  const [first, ...rest] = blocks[0].split("\n");
  if (first.trim() === post.title) blocks[0] = rest.join("\n").trim();
  return (
    <article className="section wrap article">
      <a className="back mono" href="#blog">← All posts</a>
      <p className="mono article-date">{niceDate(post.date)} · {author}</p>
      <h1>{post.title}</h1>
      <div className="article-body">
        {blocks.filter(Boolean).map((para, i) => <p key={i}>{para}</p>)}
      </div>
      {linkedin && (
        <div className="chat">
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" /> Discuss on LinkedIn ↗
          </a>
        </div>
      )}
    </article>
  );
}
