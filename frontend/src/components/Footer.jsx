import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sushil Dahiya
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & AI/ML Engineer passionate about creating innovative solutions 
              that make a difference.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-cyan-400">Email:</span> {personalInfo.email}
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Phone:</span> {personalInfo.phone}
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Location:</span> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Sushil Dahiya. All rights reserved.</span>
            </div>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>using React & Framer Motion</span>
            </motion.div>

            {/* Back to top */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
            >
              ↑ Back to top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;