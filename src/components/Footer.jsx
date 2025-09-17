import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-[#39FF14]">Avinash</span> Nuneti
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                IT & Broadcast Engineer passionate about bridging technology and creative workflows. 
                Building solutions that matter.
              </p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={18} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
                >
                  <Github className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
                >
                  <Mail className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-[#39FF14] transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-[#39FF14] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-white hover:text-[#39FF14] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Avinash Nuneti. Made with</span>
                <Heart className="text-[#39FF14]" size={16} fill="currentColor" />
                <span>in Hyderabad</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-[#39FF14] transition-colors duration-200 text-sm flex items-center gap-2"
              >
                Back to top
                <div className="w-6 h-6 bg-gray-800 rounded border border-gray-600 flex items-center justify-center">
                  <span className="text-xs">↑</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;