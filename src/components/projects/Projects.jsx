import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/wanderlust.png';
import image2 from '../../assets/Hospital-Management-System.png';
import image3 from '../../assets/rainfal-prediction.jpg';
import image4 from '../../assets/spotify.jpg';

export default function Projects() {
    const listProjects = [
        {
            id: 1,
            image: image,
            title: 'Wanderlust',
            description: `Airbnb-inspired full-stack web application built with HTML, CSS, JavaScript, MongoDB, Node.js, Express.js, Passport, and more. Features secure authentication, dynamic forms, payment gateway integration, and cloud deployment.`,
            deployedLink: 'https://wonderlust-1-40ju.onrender.com/listings',
            githubLink: 'https://github.com/Hrishi-1-hbt/Wanderlust',
        },
        {
            id: 2,
            image: image2,
            title: 'Hospital Management System',
            description: `A hospital management system developed using HTML, CSS, JavaScript (frontend), PHP (backend), and MySQL. Features patient record management, doctor schedules, and billing.`,
            githubLink: 'https://github.com/Hrishi-1-hbt/hospital-management',
        },
        {
            id: 3,
            image: image3,
            title: 'Rainfall Prediction System',
            description: `AI-based rainfall prediction model integrated with a web interface. Built using government datasets and machine learning regression models.`,
            githubLink: 'https://github.com/Hrishi-1-hbt/Rainfall_Prediction',
        },
        {
            id: 4,
            image: image4,
            title: 'Spotify Clone',
            description: `A frontend-only Spotify clone built with modern web technologies. Features include user authentication, playlist management, and music playback.`,
            githubLink: 'https://github.com/Hrishi-1-hbt/spotify-clone',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section
            data-aos='fade-up'
            data-aos-delay='400'
            id='projects'
            className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <Slider {...settings}>
                    {listProjects.map((project) => {
                        return (
                            <div key={project.id} className='p-4'>
                                <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center'
                                    />
                                    <div className='p-6'>
                                        <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>
                                            {project.title}
                                        </h2>
                                        <p className='leading-relaxed mb-3'>
                                            {project.description}
                                            <div className='mt-2'>
                                                {project.deployedLink && (
                                                    <a
                                                        href={project.deployedLink}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='text-orange-400 underline'>
                                                        Explore Deployed
                                                    </a>
                                                )}
                                                {project.deployedLink && project.githubLink && ' | '}
                                                {project.githubLink && (
                                                    <a
                                                        href={project.githubLink}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='text-orange-400 underline'>
                                                        GitHub
                                                    </a>
                                                )}
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
}
