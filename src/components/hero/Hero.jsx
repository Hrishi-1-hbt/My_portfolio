import React from 'react';
import Navbar from '../navbar/Navbar';
import hi from '../../assets/hi.png';
import CV from './HResume.pdf';
import img from '../../assets/img.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[850px] sm:min-h-[900px] flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <div
        className="md:h-[600px] h-[520px] md:w-[600px] w-[520px] right-0 bg-gradient-to-r from-green-600 
        via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-15 shadow-lg shadow-yellow-500/50"
      ></div>

      <Navbar />

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
              mb-16 md:mb-0 items-center text-center relative"
          >
            
            <img
              src={hi}
              data-aos="fade-up"
              data-aos-delay="400"
              className="absolute top-[150px] left-1/2 transform -translate-x-1/2 md:top-[-30px] md:left-[350px] -translate-y-1/2 w-20 h-18"
              alt="Hi Icon"
            />

            <h1 className="title-font sm:text-6xl text-5xl mb-6 font-bold">
              Hi! I'm
            </h1>
            <p className="title-font sm:text-4xl text-5xl text-orange-500 mb-6 font-bold">
              Hrishi Tingani
            </p>

            <p className="mb-10 leading-relaxed text-3xl">
              I am a Tech Enthusiast, Interested in Frontend Development
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/hrishi-tingani-365501270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-3xl hover:text-gray-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Hrishi-1-hbt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-3xl hover:text-gray-500 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:hrushikeshtingani28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-3xl hover:text-red-700 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="flex justify-center mt-8">
              <a href={CV} download>
                <button
                  className="inline-flex text-white bg-orange-500 border-0 py-4 px-10 
                    focus:outline-none hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/50
                    rounded-full text-lg transition-all duration-300"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 flex justify-center relative top-[-50px] right-[-30px]">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full w-96 h-96 shadow-lg shadow-orange-500/30"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
