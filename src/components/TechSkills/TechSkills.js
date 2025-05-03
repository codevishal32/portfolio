import React from 'react';
import TechCircle from './TechCircle/TechCircle';
import './TechSkills.styles.css';
import leftArrow from '../../assests/TechCircle/Curve-line1.svg';
import rightArrow from '../../assests/TechCircle/Curve-line2.svg';

const techHeadings = [
  'Real-Time Systems',
  'Database & DevOps Mastery',
  'Secure & Scalable Architecture',
  'Modern UI/UX Development',
];

export default function TechSkills() {
  return (
    <section className="Tech-skills about">
      <div className="_content">
        {/* === Left Text Section === */}
        <div className="Tech-skills-text">
          <h1 className="Tech-skills-heading">
            Technical Expertise for Impactful Solutions
          </h1>

          <div className="Tech-skills-des">
            {/* Full Stack Description */}
            <div className="Full-Stack">
              <h3 className="tech-subheading">Full-stack Mastery</h3>
              <p>
                Proficient in React.js, Next.js, Node.js, and MongoDB/SQL to build end-to-end solutions. Seamlessly integrate frontend UIs with robust backend APIs for cohesive digital experiences.
              </p>
            </div>

            {/* Dynamic List of Subheadings */}
            {techHeadings.map((heading, index) => (
              <h3 key={index} className="tech-subheading">
                {heading}
              </h3>
            ))}
          </div>
        </div>

        {/* === Right Circle Section === */}
        <div className="tech-skill-right">
          <div className="leftCurve">
            <img  className="left" src={leftArrow}  alt="left curve line" />
          </div>

          <div className="Tech-skills-circle">
            <TechCircle />
          </div>

          <div className="rightCurve">
            <img src={rightArrow} alt="right curve line" />
          </div>
        </div> 
      </div>
    </section>
  );
}
