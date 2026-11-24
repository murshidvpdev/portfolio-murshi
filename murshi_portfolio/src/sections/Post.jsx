import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
import { niceDate } from "../posts";

/* LinkedIn can't open a chat with a message filled in, so the post's link is copied first, then his profile opens. */
async function chatAbout(post, linkedin) {
  const text = `Hi Murshid, I read your post "${post.title}": ${window.location.href}`;
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Post link copied. Tap Message on my profile and paste it.", { duration: 6000 });
  } catch {
    toast("Tap Message on my profile and mention this post.", { duration: 6000 });
  }
  window.open(linkedin, "_blank", "noopener");
}

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
          <p>Want to talk about this? Send me a message.</p>
          <button className="btn" type="button" onClick={() => chatAbout(post, linkedin)}>
            <FaLinkedin aria-hidden="true" /> Chat with me on LinkedIn
          </button>
          <p className="chat-note">Copies this post's link, then opens my LinkedIn profile.</p>
        </div>
      )}
    </article>
  );
}
