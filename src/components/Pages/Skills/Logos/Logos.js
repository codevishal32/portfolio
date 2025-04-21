import React from 'react';
import './Logos.styles.css';

const SkillLogo = ({ logos = [] }) => {
  return (
      <div className="skill-row">
        {logos.map((logo, index) => (
          <img className='img-logo' key={index} src={logo.src} alt={logo.name} />
        ))}
      </div>
  );
};

export default SkillLogo;
