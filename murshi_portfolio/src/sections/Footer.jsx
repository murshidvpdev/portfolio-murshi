import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Murshid VP</h3>
          <p>Python Developer | ML Engineer | Data Analyst</p>
        </div>

        <IconContext.Provider value={{ size: "16px" }}>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/murshid-vp-554244204/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FaLinkedin />
            </a>
            <a href="https://github.com/murshidvpdev/" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FaGithub />
            </a>
            <a href="mailto:murshidvp.dev@gmail.com" aria-label="Send an email">
              <FaEnvelope />
            </a>
            <a href="tel:+919995332723" aria-label="Call phone number">
              <FaPhone />
            </a>
          </div>
        </IconContext.Provider>
      </div>

      <p className="footer-copyright">© {year} Murshid VP. All rights reserved.</p>
    </footer>
  );
}
