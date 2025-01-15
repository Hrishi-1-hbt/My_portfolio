import React from 'react'
import javascript from '../../assets/javascript.png'
import java from '../../assets/java.png'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import MERN from '../../assets/mern.jpg'
import webdesign from '../../assets/web-design.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
  I am a passionate and skilled developer with expertise in:
  <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
  As a developer, I specialize in both <span className="font-bold text-orange-500">Frontend Development</span> and 
  <span className="font-bold text-orange-500">&nbsp;Backend Development</span>. I have hands-on experience with core web technologies 
  like <span className="font-bold text-orange-500">HTML</span>, <span className="font-bold text-orange-500">CSS</span>, and 
  <span className="font-bold text-orange-500">&nbsp;JavaScript</span>, along with modern frameworks like <span className="font-bold text-orange-500">React.</span>  
  &nbsp; I also have experience with <span className="font-bold text-orange-500">Tailwind CSS</span> for creating responsive and highly customizable UIs. 
  On the backend, I am proficient in <span className="font-bold text-orange-500">Node.js</span>, <span className="font-bold text-orange-500">Express.js</span>, and I have experience working with databases like 
  <span className="font-bold text-orange-500">MongoDB</span> and <span className="font-bold text-orange-500">SQL</span>. Additionally, I have worked with languages like <span className="font-bold text-orange-500">Java</span> and <span className="font-bold text-orange-500">Python</span>, 
  and I am passionate about building scalable, efficient applications. I am always eager to learn and apply new technologies to solve complex challenges.
</p>



  I am always looking to improve my skills and work on challenging and innovative projects!
</p>

            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={java} alt="" className='rounded-full w-26 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={python} alt="" className='rounded-full w-26 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-28 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className='rounded-full w-24 h-26 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={css} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-25 h-24 object-cover'/>
                </li>
            
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={webdesign} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
               
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={MERN} alt="" className='rounded-full w-25 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}