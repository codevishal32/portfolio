import React from "react";
import "./Footer.styles.css"; // Import the CSS

const Footer = () => {
  return (
    <footer id="#contact" className="footer-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Whether you have a project that needs development expertise or just want to connect,
            I'm always open to discussing new opportunities and ideas.
          </p>
          <ul>
            <li><strong>Email:</strong> codevishal32@gmail.com</li>
            <li><strong>Location:</strong> Mainpuri, Uttar Pradesh, India</li>
            <li><strong>Availability:</strong> Open to freelance and full-time opportunities</li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="What's your good name?" />
              <input type="email" placeholder="What's your email?" />
            </div>
            <textarea placeholder="What you want to say?" rows="5"></textarea>
            <div className="btn-contact-form">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
