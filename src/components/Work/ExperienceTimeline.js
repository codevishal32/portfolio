import React from "react";
import "./Work.styles.css";

const experiences = [
  {
    title: "Trainee (Internship)",
    company: "Staunchsys IT Services Pvt. Ltd.",
    location: "Ahmedabad, India",
    date: "Jan 2023 – Jun 2023",
    logo: "/logos/staunchsys.png",
    bullets: [
      "Developed a full-stack e-commerce application using React.js, Node.js, and MongoDB, featuring automated notifications and responsive design.",
      "Modernized UI components and enhanced user workflows for a property management platform, improving usability and client satisfaction.",
      "Assisted in backend development, including API integrations and database optimization for high-traffic applications.",
    ],
  },
  {
    title: "Junior Consultant",
    company: "Staunchsys IT Services Pvt. Ltd.",
    location: "Ahmedabad, India",
    date: "Jul 2023 – Feb 2024",
    logo: "/logos/staunchsys.png",
    bullets: [
      "Led backend development for a high-frequency trading platform using NestJS, SQL, and real-time communication tools (SSE/socket.io), enabling real-time data updates and secure transaction processing.",
      "Built enterprise-grade admin dashboards with React.js and Material UI, streamlining user role management, analytics, and reporting for global clients.",
      "Designed RESTful APIs and integrated third-party financial data services to expand platform capabilities.",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="work" className="work-experience">
    <h4 className="section-tag">[ WHAT I HAVE DONE SO FAR ]</h4>
    <h1 className="section-title">Work Experience.</h1>

    <div className="timeline-container">
      <div className="timeline">
      {experiences.map((exp, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            {/* Center line logo */}
            <div className="timeline-logo">
              <img src={exp.logo} alt={exp.company} />
            </div>

            {/* Content card */}
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company} | {exp.location}</h4>
              <span className="timeline-date">{exp.date}</span>
              <ul>
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="vertical-line"></div>
      </div>
    </div>
    </section>
  );
};

export default ExperienceTimeline;
