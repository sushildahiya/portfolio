import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Cloud, Wrench, GitBranch, Cpu } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      items: skills.languages,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Frameworks',
      icon: Cpu,
      items: skills.frameworks,
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Databases',
      icon: Database,
      items: skills.databases,
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: skills.cloud,
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Tools',
      icon: Wrench,
      items: skills.tools,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      items: skills.versionControl,
      color: 'from-indigo-400 to-blue-500'
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

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black">
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
              Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                
                {/* Category Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="relative z-10 space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={skillItemVariants}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group/skill"
                    >
                      {/* Skill Indicator */}
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/skill:scale-125 transition-transform duration-300`} />
                      
                      {/* Skill Name */}
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-medium">
                        {skill}
                      </span>

                      {/* Animated Progress Bar */}
                      <div className="flex-1 ml-4">
                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '85%' } : { width: 0 }}
                            transition={{ 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              duration: 1,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`w-full h-full border-2 border-dashed border-current bg-gradient-to-r ${category.color} bg-clip-text text-transparent rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Additional <span className="text-cyan-400">Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.other.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;