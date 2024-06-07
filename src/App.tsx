import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { AboutMe } from './Components/AboutMe';
import { NavBar } from "./Components/NavBar/NavBar"

function App() {
  const [page, setPage] = useState<string>("Home");

  function changePage(newPage: string) {
    setPage(newPage);
}

  return (
    <div className='flex flex-col h-screen'>
      <NavBar page={page} setPage={changePage}/>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
        <div className="snap-always snap-center" id="homescreen">
          <HomePage />
        </div>
        <div className="snap-always snap-center" id="aboutme">
          <AboutMe />
        </div>
      </div>
    </div>
  );  
}

export default App;
