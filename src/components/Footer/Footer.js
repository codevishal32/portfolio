import React from 'react';
import Titles from '../Pages/Titles/Titles';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.styles.css';

const ContactItem = ({ icon: Icon, label, text, iconClass }) => (
  <div className="contact-item">
    <Icon className={`contact-icon ${iconClass}`} />
    <div>
      <div className="contact-label">{label}</div>
      <div className="contact-text">{text}</div>
    </div>
  </div>
);

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon" />
);

const Footer = () => {
  return (
    <div className="contact-box ">
       <Titles heading={"Get In Touch"} description={"Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always open to discussing new projects and opportunities."}/>
      <div className='contact-container'>

      <div className="contact-card">
        <div className="contact-title">Get In Touch</div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>

      <div className="contact-card">
        <div className="contact-title">Contact Info</div>
        <div>
          <ContactItem icon={FaEnvelope} label="Email" text="codevishal32@gmail.com" iconClass="email-icon" />
          <ContactItem icon={FaPhone} label="Phone" text="+91 7983399224" iconClass="phone-icon" />
          <ContactItem icon={FaMapMarkerAlt} label="Location" text="Mainpuri, Uttar Pradesh, India" iconClass="location-icon" />
        </div>

        <div className="connect-section">
          <div className="connect-label">Connect with me</div>
          <div className="social-icons">
            <a href={"https://www.github.com/codevishal32"}><SocialIcon icon={FaGithub} /></a>
            <a href={"https://www.linkedin.com/in/curiosity-h"}><SocialIcon icon={FaLinkedin}  /></a>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Footer;
