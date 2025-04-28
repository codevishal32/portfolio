import React from 'react';
import './AboutMe.styles.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h1>About <span className="highlight">Me</span></h1>
        <p>
        I'm a recent graduate with a Bachelor's degree in Information Technology from the Indian Institute of Engineering Science and Technology (IIEST),
         Shibpur. I have completed internships at Delta X as an Associate Product Engineer Intern and at Celebal Tech as a Data Science Intern.
        </p>
        <p>
        My approach combines strong technical expertise with creative problem-solving to build impactful and efficient solutions. With hands-on experience in full-stack web development,
         machine learning, and data-driven applications, I enjoy tackling real-world challenges using modern technologies like ASP.NET Core,
          React.js, Next.js, and advanced ML frameworks. I'm passionate about continuous learning and staying at the forefront of technology to deliver innovative and scalable solutions.
        </p>
        
        <div className="tags">
          <span>Problem Solver</span>
          <span>Team Player</span>
          <span>Fast Learner</span>
          <span>Detail-Oriented</span>
        </div>

        <div className="info-cards">
          <div className="card"> 
            <h3>IT</h3>
            <p>Btech Student</p>
          </div>
          <div className="card"> 
            <h3>Ex SWE Intern</h3>
            <p>Delta X</p>
          </div>
          <div className="card"> 
            <h3>Ex Data Science Intern</h3>
            <p>Celebal Tech.</p>
          </div>
          <div className="card"> 
            <h3>15+</h3>
            <p>Technologies</p>
          </div>
        </div>
      </div>

      <div className="about-me-image">
        <img src="/your-image-path.png" alt="About Me" />
      </div>
    </div>
  );
}

export default AboutMe;
