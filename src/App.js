import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/Routes';
import {Routes, Route}  from "react-router-dom";
import './App.css';
import Honers from './Pages/Honers/Honers';

function App() {

  return (
  <div className="app">


        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route path='/Honers' element={<Honers/>}/>
        </Routes>

  </div>

  );
}

export default App;
