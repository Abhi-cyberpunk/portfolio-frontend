import React, { useState, useEffect, useRef } from 'react';
import { Server, Radio, Film, Brain } from 'lucide-react';
import { skillsData } from '../data/mock';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => new Set([...prev, entry.target.dataset.skillIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const categoryIcons = {
    "IT Infrastructure & Support": Server,
    "Broadcast Operations": Radio,
    "Media Production & Editing": Film,
    "Emerging Technologies (Learning)": Brain
  };

  const categoryColors = {
    "IT Infrastructure & Support": "from-blue-500/20 to-cyan-500/20",
    "Broadcast Operations": "from-red-500/20 to-orange-500/20", 
    "Media Production & Editing": "from-purple-500/20 to-pink-500/20",
    "Emerging Technologies (Learning)": "from-[#39FF14]/20 to-green-500/20"
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-[#39FF14]">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cross-disciplinary expertise spanning IT infrastructure, broadcast operations, and emerging technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, categoryIndex) => {
              const IconComponent = categoryIcons[category.category];
              const gradientClass = categoryColors[category.category];
              
              return (
                <div
                  key={categoryIndex}
                  className={`bg-gradient-to-br ${gradientClass} backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-300 group`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 group-hover:border-[#39FF14]/50 transition-colors">
                      <IconComponent className="text-[#39FF14]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${categoryIndex}-${skillIndex}`;
                      const isVisible = visibleSkills.has(skillKey);
                      
                      return (
                        <div
                          key={skillIndex}
                          data-skill-index={skillKey}
                          ref={(el) => {
                            if (el && observerRef.current) {
                              observerRef.current.observe(el);
                            }
                          }}
                          className="flex items-center gap-3"
                        >
                          {/* Animated Indicator */}
                          <div className="flex items-center gap-2">
                            <div 
                              className={`w-3 h-3 rounded-full transition-all duration-500 delay-${skillIndex * 100} ${
                                isVisible ? 'bg-[#39FF14] shadow-lg shadow-[#39FF14]/50' : 'bg-gray-600'
                              }`}
                            ></div>
                            <div 
                              className={`w-8 h-1 rounded-full transition-all duration-700 delay-${skillIndex * 150} ${
                                isVisible ? 'bg-[#39FF14]/60' : 'bg-gray-700'
                              }`}
                            ></div>
                          </div>
                          
                          {/* Skill Name */}
                          <span 
                            className={`text-gray-300 transition-colors duration-500 delay-${skillIndex * 100} ${
                              isVisible ? 'text-white' : ''
                            }`}
                          >
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;