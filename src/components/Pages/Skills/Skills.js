import React from 'react';
import DottedTextLine from './DottedLine/DottedTextLine';
import SkillLogo from './Logos/Logos';
import skillData from './SkillsData';
import './Skills.styles.css';


const Skills = () => {
  return (
    <section className="skills-section">
      <p className="skills-label">Skills</p>
      <h2 className="skills-title">
        I am powered by<br />
        the best tools & technologies
      </h2>

      {skillData.map((block, index) => (
        <div key={index} className="skill-block">
          <DottedTextLine text={block.title} />
          <SkillLogo logos={block.logos} />
        </div>
      ))}
    </section>
  );
};

export default Skills;
