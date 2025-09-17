import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, educationData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) {
      toast({
        title: "Validation Error",
        description: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Validation Error", 
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }
    
    if (!subject.trim()) {
      toast({
        title: "Validation Error",
        description: "Subject is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!message.trim() || message.trim().length < 10) {
      toast({
        title: "Validation Error",
        description: "Message must be at least 10 characters long",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      });
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: response.data.message,
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      } else if (error.response?.status === 400) {
        errorMessage = "Please check your input and try again.";
      } else if (error.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-[#39FF14]">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, technical challenges, or innovative projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-black border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                      <Mail className="text-[#39FF14]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-[#39FF14] transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                      <Phone className="text-[#39FF14]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-[#39FF14] transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                      <MapPin className="text-[#39FF14]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-white font-semibold mb-4">Professional Links</h4>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.linkedin}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
                    >
                      <Linkedin className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={20} />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
                    >
                      <Github className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={20} />
                    </a>
                    <a
                      href={personalInfo.resumeUrl}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
                    >
                      <Download className="text-gray-400 group-hover:text-[#39FF14] transition-colors" size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Education & Languages */}
              <div className="bg-black border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Education & Languages</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#39FF14] font-semibold mb-2">Education</h4>
                    <p className="text-white font-medium">{educationData.degree}</p>
                    <p className="text-gray-400 text-sm">{educationData.institution}</p>
                  </div>

                  <div>
                    <h4 className="text-[#39FF14] font-semibold mb-3">Languages</h4>
                    <div className="space-y-2">
                      {educationData.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-white">{lang.language}</span>
                          <span className="text-gray-400 text-sm">{lang.proficiency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#39FF14] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#32e012] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;