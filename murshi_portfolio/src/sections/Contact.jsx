import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact({ profile }) {
  const [sending, setSending] = useState(false);
  const env = import.meta.env;

  const send = (e) => {
    e.preventDefault();
    if (e.target.website.value) return; // honeypot
    setSending(true);
    emailjs
      .sendForm(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATEC_ID, e.target, env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => emailjs.sendForm(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATER_ID, e.target, env.VITE_EMAILJS_PUBLIC_KEY))
      .then(() => {
        toast.success("Message sent. I'll reply by email.");
        e.target.reset();
      })
      .catch(() => toast.error(`Message not sent. Email me directly at ${profile.email}.`))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section wrap contact">
      <div>
        <h2>Let's talk</h2>
        <p>Hiring for an AI or LLM engineering role in the UAE, or have a document-heavy problem? Send a note.</p>
        <dl className="contact-list">
          <div><dt className="mono">email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
          <div><dt className="mono">phone</dt><dd><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></dd></div>
          <div><dt className="mono">based in</dt><dd>{profile.location}</dd></div>
        </dl>
      </div>
      <form className="form" onSubmit={send}>
        <input type="text" name="website" tabIndex="-1" autoComplete="off" className="honeypot" aria-hidden="true" />
        <label>Your name<input type="text" name="name" required /></label>
        <label>Your email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button className="btn" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}</button>
      </form>
    </section>
  );
}
