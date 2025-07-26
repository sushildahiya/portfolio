import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      link: null,
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:text-blue-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let's Connect
                </h3>
                
                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{contact.label}</p>
                            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg border border-gray-700/50">
                          <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} bg-opacity-20 rounded-lg flex items-center justify-center`}>
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{contact.label}</p>
                            <p className="text-white font-medium">{contact.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-6">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;