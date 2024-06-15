// Components/Technologies/Technologies.tsx
import React from 'react';
import { Card } from '../Card/Card';

// Import icons from react-bootstrap-icons
import { Bootstrap,  } from 'react-bootstrap-icons';
import { RiTailwindCssFill, RiReactjsLine } from 'react-icons/ri'
import { SiTypescript } from "react-icons/si";
import { FaJava,FaCss3,FaHtml5,FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";


const technologies = [
 // { name: 'SolidWorks', Icon: GearWideConnected }, // Replace with an appropriate icon
  // { name: 'MATLAB', Icon: FileEarmarkCode }, // Replace with an appropriate icon
  { name: 'Python', Icon: FaPython },
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3 },
  { name: 'JavaScript', Icon: IoLogoJavascript },
  { name: 'Java', Icon: FaJava },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: RiReactjsLine },
  { name: 'Bootstrap', Icon: Bootstrap },
  { name: 'Tailwind CSS', Icon: RiTailwindCssFill }, // Replace with an appropriate icon
  // { name: 'SimScale', Icon: CodeSlash } // Replace with an appropriate icon
];

export function Technologies() {
  return (
    <div className="relative h-dvh d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {technologies.map((tech) => (
            <div className="col" key={tech.name}>
              <Card name={tech.name} Icon={tech.Icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

