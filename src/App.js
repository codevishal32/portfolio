import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import TechSkills from './components/TechSkills/TechSkills';
import ExperienceTimeline from './components/Work/ExperienceTimeline';
function App() {

  return (
  <div className="app">
    <LandingPage />

    <About />
    <TechSkills />
    <ExperienceTimeline />

  </div>

  );
}

export default App;
