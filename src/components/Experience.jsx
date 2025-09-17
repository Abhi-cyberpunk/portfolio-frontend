import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experienceData } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-[#39FF14]">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A journey through IT infrastructure and broadcast engineering excellence
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-0.5"></div>

            {experienceData.map((job, index) => (
              <div key={job.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#39FF14] rounded-full transform md:-translate-x-2 border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-black border border-gray-700 rounded-2xl p-6 hover:border-[#39FF14]/50 transition-all duration-300 group relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Job Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 group-hover:border-[#39FF14]/50 transition-colors">
                          <Briefcase className="text-[#39FF14]" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{job.position}</h3>
                          <h4 className="text-[#39FF14] font-semibold mb-2">{job.company}</h4>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        {job.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm leading-relaxed">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;