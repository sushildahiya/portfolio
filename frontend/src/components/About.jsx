import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const expertise = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in React, Node.js, FastAPI, and Next.js with focus on scalable applications'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in MongoDB, PostgreSQL, and Redis for optimized data handling'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Experience with AWS, GCP, Docker, and Kubernetes for modern deployments'
    },
    {
      icon: Smartphone,
      title: 'Mobile Testing',
      description: 'Automation framework development for Android and iOS applications'
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'RAG applications, Llama models, and MLflow for intelligent solutions'
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'AES encryption, JWT authentication, and performance optimization'
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

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black">
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
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  {personalInfo.description}
                </motion.p>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  With a strong foundation in both frontend and backend technologies, I specialize in creating 
                  end-to-end solutions that deliver exceptional user experiences while maintaining robust security 
                  and performance standards.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
                    <span className="text-cyan-400 font-medium">2+ Years Experience</span>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
                    <span className="text-cyan-400 font-medium">Full-Stack Developer</span>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
                    <span className="text-cyan-400 font-medium">AI/ML Enthusiast</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Expertise Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Effect Lines */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '15+', label: 'Projects Completed' },
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;