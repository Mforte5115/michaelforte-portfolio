import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { AboutMe } from './Components/AboutMe/AboutMe';
// import { NavBar } from "./Components/NavBar/NavBar"
import {ParticlesEffect} from './Components/Particles/Particles'
import { Technologies } from './Components/Technologies/Technologies'
import { Experience } from './Components/Experience/Experience'
import { Projects } from './Components/Projects/Projects'

function App() {
  // const [page, setPage] = useState<string>("Home");

  //function changePage(newPage: string) {
  //  setPage(newPage);
//}

  return (
    <div className='flex flex-col h-dvh'>
      <div className="particles">
      <ParticlesEffect/>
      </div>
      { /* <NavBar page={page} setPage={changePage}/> */}
      <div className="h-dvh snap-y snap-mandatory overflow-y-scroll flex-grow z-0">
        <div className="snap-always snap-center" id="homescreen">
          <HomePage />
        </div>
        <div className="snap-always snap-center px-0" id="aboutme">
          <AboutMe />
        </div>
        <div className="snap-always snap-center" id="experience">
          <Experience />
        </div>
        <div className="snap-always snap-center" id="projects">
          <Projects />
        </div>
        <div className="snap-always snap-center" id="technologies">
          <Technologies />
        </div>
      </div>
    </div>
  );  
}

export default App;
