import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <p className="card-subtitle">Let's Connect!</p>
          <h2 className="h2 section-title">Social Handles</h2>
          <div className="social-links">
            <a
              href="https://github.com/AditHash"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-dey-b533681b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
