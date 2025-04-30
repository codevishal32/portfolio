import React from 'react';
import './About.styles.css';
import LineDivider from '../Tools/Line/LineDivider';
import AboutImg from '../../assests/About/vishal_image.jpeg';
import Button from '../Tools/Button/Button';
const About=()=> {
  return (
    <section className='about'>
        <div className='content'>
            <div className='about-text'>
                <h3 className='_heading'>
                    <span className='_text_'>
                        <span className='_hidden'>Hi there</span>
                        <span>
                            <span className='_value value-1'>H</span>
                            <span className='_value value-2'>i</span>
                            <span className='_value value-3'> </span>
                            <span className='_value value-4'>t</span>
                            <span className='_value value-5'>h</span>
                            <span className='_value value-6'>e</span>
                            <span className='_value value-7'>r</span>
                            <span className='_value value-8'>e</span>
                        </span>
                    </span>
                </h3>
                <p className='_description'>
                I'm a recent Information Technology graduate from IIEST Shibpur with internship experience at Delta X and Celebal Tech.
                </p>
                <p className='_description'>
                I specialize in full-stack web development and machine learning, with hands-on experience in ASP.NET Core, React, Next.js, and various ML frameworks. I enjoy solving real-world problems through scalable, innovative tech solutions and continuously explore new technologies to grow as a developer.
                </p>
                <a className='_contact_' href='/contact'>
                    <span class="material-symbols-outlined">
                        chat
                    </span>
                    <span className='message'>
                        Send me a message
                    </span>
                </a>
            </div>
            <div className='about-Img'>
                <div className='about-line'>
                    <div className='about-line-divider'>
                    <LineDivider />
                    </div>
                    <span className='about-text-line-heading'> About me</span>
                </div>
                <div className='about-line-img'>
                    <img src={AboutImg} alt='this is my Image'/>
                </div>
            </div>
        </div>

    </section>
  )
}
export default About;