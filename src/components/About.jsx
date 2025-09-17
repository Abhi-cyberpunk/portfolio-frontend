import React from 'react';
import { Server, Radio, Zap, Users } from 'lucide-react';
import { aboutMe } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-[#39FF14]">Me</span>
            </h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                {aboutMe.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Key Strengths */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Strengths:</h3>
                <div className="space-y-3">
                  {aboutMe.keyStrengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="bg-black border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-6 gap-4 h-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="bg-[#39FF14] rounded"></div>
                    ))}
                  </div>
                </div>

                {/* Icons Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4 mx-auto border border-gray-600">
                      <Server className="text-[#39FF14]" size={32} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">IT Infrastructure</h4>
                    <p className="text-gray-400 text-sm">Server Management & Network Security</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4 mx-auto border border-gray-600">
                      <Radio className="text-[#39FF14]" size={32} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Broadcast Operations</h4>
                    <p className="text-gray-400 text-sm">PCR/MCR Management</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4 mx-auto border border-gray-600">
                      <Zap className="text-[#39FF14]" size={32} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Problem Solving</h4>
                    <p className="text-gray-400 text-sm">High-Pressure Environments</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4 mx-auto border border-gray-600">
                      <Users className="text-[#39FF14]" size={32} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Team Communication</h4>
                    <p className="text-gray-400 text-sm">Technical & Creative Teams</p>
                  </div>
                </div>

                {/* Glowing effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#39FF14] rounded-full opacity-5 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#39FF14] rounded-full opacity-5 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;