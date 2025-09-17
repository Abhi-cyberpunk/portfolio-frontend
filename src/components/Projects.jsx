import React from 'react';
import { ExternalLink, Zap, Shield, Database, Brain } from 'lucide-react';
import { projectsData } from '../data/mock';

const Projects = () => {
  const categoryIcons = {
    broadcast: Zap,
    infrastructure: Shield,
    development: Database,
    ai: Brain
  };

  const categoryColors = {
    broadcast: 'from-red-500/20 to-orange-500/20',
    infrastructure: 'from-blue-500/20 to-cyan-500/20',
    development: 'from-purple-500/20 to-pink-500/20',
    ai: 'from-[#39FF14]/20 to-green-500/20'
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[#39FF14]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing solutions that bridge technical excellence with practical impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => {
              const IconComponent = categoryIcons[project.category];
              const gradientClass = categoryColors[project.category];
              
              return (
                <div
                  key={project.id}
                  className={`group relative bg-gradient-to-br ${gradientClass} border border-gray-700 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 gap-2 h-full">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div key={i} className="bg-[#39FF14] rounded-sm"></div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 group-hover:border-[#39FF14]/50 transition-colors">
                          <IconComponent className="text-[#39FF14]" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <div className="w-8 h-0.5 bg-[#39FF14] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 group-hover:border-[#39FF14]/50 transition-all duration-300 cursor-pointer group-hover:bg-[#39FF14]/10">
                        <ExternalLink className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={16} />
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 group-hover:border-[#39FF14]/30 group-hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effects */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#39FF14] rounded-full opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#39FF14] rounded-full opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700"></div>
                  
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#39FF14] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#32e012] transition-colors duration-300"
            >
              Get In Touch
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;