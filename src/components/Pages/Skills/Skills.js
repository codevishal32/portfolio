import React from 'react';
import DottedTextLine from './DottedLine/DottedTextLine';
import SkillLogo from './Logos/Logos';
import skillData from './SkillsData';
import Title from '../Titles/Titles';
import './Skills.styles.css';


const Skills = () => {
  return (
    <section className="skills-section">
      <Title heading={"Skills"} description={<p>
      I am powered by<br />the best tools & technologies
    </p>} />

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
