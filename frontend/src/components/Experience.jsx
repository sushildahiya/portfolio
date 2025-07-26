import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-black">
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
              Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center z-10">
                    <Building2 className="w-4 h-4 text-black" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: index % 2 === 0 ? 2 : -2,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      {/* Company and Position */}
                      <div className="space-y-3 mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                          {exp.position}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Building2 className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.slice(0, 4).map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                        {exp.achievements.length > 4 && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                          >
                            View {exp.achievements.length - 4} more achievements...
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;