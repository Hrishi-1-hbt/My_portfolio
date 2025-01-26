import React, { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const listNavbar = [
        { name: 'Home', link: '#home' },
        { name: 'Skills', link: '#skills' },
        { name: 'Education', link: '#education' },
        { name: 'Language', link: '#language' },
        { name: 'Projects', link: '#projects' },
    ];

    return (
        <header data-aos="fade-up" className="text-gray-600 body-font z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-2xl font-bold text-white font-handwritten">
                        Hrishi Tingani
                    </span>
                </a>

                {/* Hamburger Button for Mobile */}
                <button
                    className="text-white text-2xl md:hidden ml-auto focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Navbar Links */}
                <nav
    className={`${
        menuOpen ? 'block' : 'hidden'
    } md:flex md:ml-auto text-white text-lg md:mr-auto flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8`}
>
    {listNavbar.map((item, index) => (
        <a
            key={index} 
            href={item.link}
            className="hover:text-yellow-300 transition-colors duration-300"
        > <br />
            {item.name}
        </a>
    ))}
</nav>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className="inline-flex items-center py-2 px-10 focus:outline-none text-lg text-white mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:bg-yellow-300 hover:text-gray-900 rounded-full transition-all duration-300"
                >
                    Contact me
                </a>
            </div>
        </header>
    );
}
