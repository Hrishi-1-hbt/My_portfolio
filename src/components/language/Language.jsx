import React from 'react';

export default function Language() {
  const languages = [
    { code: 'En', name: 'English', level: 'Maternal' },
    { code: 'Ka', name: 'Kannada', level: 'Fluent' },
    { code: 'Hi', name: 'Hindi', level: 'Good' },
    { code: 'Ma', name: 'Marathi', level: 'Good' },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col items-center justify-center gap-10 md:gap-20 h-auto text-blue-950 mt-11"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Languages</h2>

      {/* Languages Grid */}
      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        {languages.map((language, index) => (
          <div key={index} className="achievement flex flex-col items-center">
            <div className="circle w-20 h-20 md:w-16 md:h-16 bg-white rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg">
              <span className="z-10">{language.code}</span>
              <div className="absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460] shadow-[0_0_20px_rgba(255,165,0,0.7)] z-0"></div>
            </div>
            <span className="text-xl md:text-xl text-white">{language.name}</span>
            <span className="text-[#ffa600] text-lg md:text-xl font-bold">{language.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
