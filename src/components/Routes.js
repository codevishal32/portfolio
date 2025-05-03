import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import TechSkills from './TechSkills/TechSkills';
import ExperienceTimeline from './Work/ExperienceTimeline';
import Project from './Projects/ProjectFrame';

function Routes() {

  return (
  <div className="app">
    <LandingPage />
    <About />
    <TechSkills />
    <ExperienceTimeline />
    <Project />
  </div>

  );
}

export default Routes;
