import Section from "../components/Section";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  // 🛡 Honeypot spam protection
  if (e.target.website.value) return;

  setLoading(true);


  // 1️⃣ Send message to YOU
  emailjs
    .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATEC_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      // 2️⃣ Auto-reply to sender
      return emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATER_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      );
    })
    .then(() => {
      toast.success("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      toast.error("Failed to send message. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
};


  return (
    <section id="contact" className="contact-section">
      <Section>
        <div className="contact-wrapper">
          {/* Left */}
          <div className="contact-text">
            <h2>Let’s Connect</h2>
            <p>
              Have a project, opportunity, or idea in mind?
              I’m always open to discussing meaningful work and collaborations.
            </p>

            <div className="contact-meta">
              <p>
                <strong>Email</strong><br />
                <a href="mailto:murshidveypey790@gmail.com">
                  murshidveypey790@gmail.com
                </a>
              </p>
              <p>
                <strong>Location</strong><br />
                Kerala, India
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={sendEmail}
            whileHover={{ scale: 1.01 }}
          >
            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              className="honeypot"
            />

            <div className="form-group">
              <input type="text" name="name" required />
              <label>Your Name</label>
            </div>

            <div className="form-group">
              <input type="email" name="email" required />
              <label>Your Email</label>
            </div>

            <div className="form-group">
              <textarea name="message" rows="4" required />
              <label>Your Message</label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : "Send Message"}
            </button>
          </motion.form>
        </div>
      </Section>
    </section>
  );
}
