import React from 'react';
import './ContactForm.styles.css';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="contact-form-card glass-morphism">
      <h2 className="form-title">Send Me a Message</h2>
      <form className="form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <input type="text" placeholder="Subject" className="form-input" />
        <textarea placeholder="Your Message" className="form-textarea"></textarea>
        <button type="submit" className="form-button">
          <FaPaperPlane className="send-icon" /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
