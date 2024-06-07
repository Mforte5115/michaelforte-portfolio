import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage';
import { AboutMe } from './Components/AboutMe';
import { NavBar } from "./Components/NavBar/NavBar"

function App() {


  return (
    <><NavBar />
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      <div className="snap-always snap-center" id="homescreen">
        <HomePage />
      </div>
      <div className="snap-always snap-center" id="aboutme">
        <AboutMe />
      </div>
    </div></>
  );  
}

export default App;
