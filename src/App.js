import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/Routes';
import {Routes, Route}  from "react-router-dom";
import './App.css';
import Honers from './Pages/Honers/Honers';

function App() {

  return (
  <div className="app">
    <LandingPage />

        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route path='/Honers' element={<Honers/>}/>
        </Routes>

    <Footer />
  </div>

  );
}

export default App;
