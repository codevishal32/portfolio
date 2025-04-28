import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContactItems.styles.css';
const ContactItem = ({ icon: Icon, label, text }) => (
  <div className="contact-item">
    <Icon className="contact-icon" />
    <div>
      <div className="contact-label">{label}</div>
      <div className="contact-text">{text}</div>
    </div>
  </div>
);

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon" />
);

const ContactItems = () => {
  return (
    <div className='ContactInfo glass-morphism'>
      <h2 className="contact-title">Contact Information</h2>
      <ContactItem icon={FaEnvelope} label="Email" text="codevishal32@gmail.com" />
      <ContactItem icon={FaPhone} label="Phone" text="+91 7983399224" />
      <ContactItem icon={FaMapMarkerAlt} label="Location" text="Mainpuri, Uttar Pradesh, India" />

      <div className="connect-section">
        <div className="connect-label">Connect with me</div>
        <div className="social-icons">
          <SocialIcon icon={FaGithub} />
          <SocialIcon icon={FaLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default ContactItems;
