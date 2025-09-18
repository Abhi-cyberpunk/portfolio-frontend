import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-gray-900/80 z-10"></div>
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-gray-600 text-6xl">📡</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gray-700 border-4 border-[#39FF14] flex items-center justify-center overflow-hidden">
            <img
              src="/profile.jpg" // Place your profile.jpg in the public folder
              alt="Avinash Nuneti Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          <span className="text-[#39FF14]">{personalInfo.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl text-[#39FF14] font-bold mb-4">
          {personalInfo.tagline}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#32e012] transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group border border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#39FF14] hover:text-black transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;