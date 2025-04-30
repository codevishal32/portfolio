import React from 'react';
import TitleText from './ProjectCard/TextCard/ProjectText';
import ModelCard from './ProjectCard/ModelCard/ModelCard';
import './Project.styles.css';
import Laptop from '../Model/Laptop';
import Phone from '../Model/Phone';
import Button from '../Tools/Button/Button';

const projectsData = [
  {
    index: '01',
    title: 'Designing the future of education',
    description: 'Designing a platform to help educators build better online courseware',
    model: <Laptop />,
    modelStyles: { top: '-4rem' },
    titleStyles: {},
  },
  {
    index: '02',
    title: 'Video game progress tracking',
    description: 'Design and development for a video game tracking app built in React Native',
    model: <Phone />,
    modelStyles: { top: '-45rem', aspectRatio: '7/10' },
    titleStyles: { marginRight: '18rem', right: '-15rem' },
  },
  {
    index: '03',
    title: 'Designing the future of education',
    description: 'Designing a platform to help educators build better online courseware',
    model: <Laptop/>,
    modelStyles: { marginTop: '-10rem', aspectRatio: '9/10' },
    titleStyles: {marginTop:'-10rem'},
  },
];

const ProjectFrame = () => {
  return (
    <section className="projects-section">
      {projectsData.map((project, i) => (
        <div className="projects" key={project.index}>
          <div className={`project _0${i + 1}`}>
            <TitleText
              Index={project.index}
              Title={project.title}
              Discription={project.description}
              ButtonText="View project"
              ButtonLink="#"
              Styles={project.titleStyles}
            />
            <ModelCard Model={project.model} Styles={project.modelStyles} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectFrame;
