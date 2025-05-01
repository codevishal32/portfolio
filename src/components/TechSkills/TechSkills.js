import React from 'react'
import TechCircle from './TechCircle/TechCircle'
import './TechSkills.styles.css';
export default function TechSkills() {
  return (
    <section className='Tech-skills about'>
        <div className='content'>

            <div className='Tech-skills-text '>
                <h1 className='Tech-skills-heading'>
                    Technical Expertise for Imapactful Solutions
                </h1>

                <div className='Full-Stack'>
                    <h3>Full-stack Mastery</h3>
                    <p>Proficient in React.js, Next.js, Node.js, NestJS, and MongoDB/SQL to build end-to-end solutions. Seamlessly integrate frontend UIs with robust backend APIs for cohesive digital experiences.</p>
                </div>
                <h3>Real-Time Systems</h3>
                <h3>Database & DevOps Mastery</h3>
                <h3>Secure & Scalable Architecture</h3>
                <h3>Modern UI/UX Development</h3>
            </div>
            <div className='Tech-skills-circle'>
                <TechCircle />
            </div>
        </div>
    </section>
  )
}