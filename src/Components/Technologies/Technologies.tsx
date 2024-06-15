import React from 'react';
import { Card } from '../Card/Card';
import './Technologies.css';

// Import icons from react-icons
import { Bootstrap } from 'react-bootstrap-icons';
import { RiTailwindCssFill, RiReactjsLine } from 'react-icons/ri';
import { SiTypescript } from "react-icons/si";
import { FaJava, FaCss3, FaHtml5, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const technologies = [
  { name: 'Python', Icon: FaPython },
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3 },
  { name: 'JavaScript', Icon: IoLogoJavascript },
  { name: 'Java', Icon: FaJava },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: RiReactjsLine },
  { name: 'Bootstrap', Icon: Bootstrap },
  { name: 'Tailwind CSS', Icon: RiTailwindCssFill },
];

export function Technologies() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Technologies</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex justify-center">
              <Card name={tech.name} Icon={tech.Icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

