import LandingPage from './components/LandingPage/LandingPage';
import About from './components/Pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
function App() {

  return (
  <div className="app">
    <LandingPage />
    <About />
    <Project/>

    <Footer />

  </div>

  );
}

export default App;
