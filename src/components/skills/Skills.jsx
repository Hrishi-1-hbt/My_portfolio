import React from 'react';
import javascript from '../../assets/javascript.png';
import java from '../../assets/java.png';
import html from '../../assets/html-5.png';
import css from '../../assets/css-3.png';
import Node from '../../assets/node.webp';
import Tailwind from '../../assets/tcss.jpg';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import Mongodb from '../../assets/mongodb.jpg';  // Ensure this path is correct
import express from '../../assets/express.jpg';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col justify-center items-center text-white body-font min-h-screen bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="container px-5 py-24 mx-auto flex justify-center">
        <div data-aos="fade-left" data-aos-delay="500" className="w-full overflow-hidden">
          <div className="flex justify-center space-x-8 flex-wrap">
            <img src={java} alt="Java" className="rounded-full w-16 h-16 object-cover" />
            <img src={python} alt="Python" className="rounded-full w-16 h-16 object-cover" />
            <img src={javascript} alt="JavaScript" className="rounded-full w-16 h-16 object-cover" />
            <img src={html} alt="HTML" className="rounded-full w-16 h-16 object-cover" />
            <img src={css} alt="CSS" className="rounded-full w-16 h-16 object-cover" />
            <img src={react} alt="React" className="rounded-full w-16 h-16 object-cover" />
            <img src={Tailwind} alt="Tailwind" className="rounded-full w-16 h-16 object-cover" />
            <img src={Node} alt="Node" className="rounded-full w-16 h-16 object-cover" />
            <img src={Mongodb} alt="MongoDB" className="rounded-full w-16 h-16 object-cover" />
            <img src={express} alt="Express" className="rounded-full w-16 h-16 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
