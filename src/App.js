import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import TechSkills from './components/TechSkills/TechSkills';
import ExperienceTimeline from './components/Work/ExperienceTimeline';
import Project from './components/Projects/ProjectFrame';
import './App.css';
import Footer from './components/Footer/Footer';
function App() {

  return (
  <div className="app">
    <LandingPage />

    <About />
    <TechSkills />
    <ExperienceTimeline />
    <Project />
    <Footer />
  </div>

  );
}

export default App;
