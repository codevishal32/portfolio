import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Project from './components/Pages/Projects/Projects';
import connector from './components/Pages/connector';
import './App.css';
import Skills from './components/Pages/Skills/Skills';

function App() {

  return (
  <div className="app">
    <Header />
    <Home/> 
    <Skills/>
    <Project />

  </div>

  );
}

export default App;
