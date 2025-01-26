import React from 'react';
import Navbar from '../navbar/Navbar';
import hi from '../../assets/hi.png';
import CV from './HResume.pdf';
import img from '../../assets/img.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[700px] md:min-h-[850px] flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <div
        className="md:h-[600px] h-[400px] md:w-[600px] w-[400px] right-0 bg-gradient-to-r from-green-600 
        via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-10 shadow-lg shadow-yellow-500/50"
      ></div>

      <Navbar />

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-12 md:py-24 flex-col-reverse md:flex-row items-center">
          {/* Left Section */}
          <div className="flex-grow md:w-1/2 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left relative">
            {/* Name Section with Icon */}
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="title-font text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi! I'm
              </h1>
              <img
                src={hi}
                alt="Hi Icon"
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-10 md:w-12"
              />
            </div>

            <p className="title-font text-3xl md:text-4xl text-orange-500 mb-4 font-bold">
              Hrishi Tingani
            </p>

            <p className="mb-6 leading-relaxed text-lg md:text-xl">
              I am a Tech Enthusiast, Interested in Frontend Development
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 mb-6">
              <a
                href="https://www.linkedin.com/in/hrishi-tingani-365501270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-2xl md:text-3xl hover:text-gray-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Hrishi-1-hbt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-2xl md:text-3xl hover:text-gray-500 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:hrushikeshtingani28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-2xl md:text-3xl hover:text-red-700 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center md:justify-start">
              <a href={CV} download>
                <button
                  className="inline-flex text-white bg-orange-500 border-0 py-3 px-8 md:py-4 md:px-10 
                    focus:outline-none hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/50
                    rounded-full text-sm md:text-lg transition-all duration-300"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 flex justify-center relative top-[-20px] md:top-[-50px]">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-lg shadow-orange-500/30"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
