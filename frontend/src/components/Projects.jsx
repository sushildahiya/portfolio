import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Eye, Star, GitFork, Play, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState(null);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-black">
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
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A showcase of my best work, demonstrating expertise in full-stack development, AI integration, and modern web technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10, rotateY: 5, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Live Indicator */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center space-x-1 bg-green-500/20 border border-green-500/50 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">LIVE</span>
                  </div>
                </div>

                {/* Project Image with Live Preview Effect */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Animated Grid Overlay for Tech Feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-grid-pattern opacity-30"></div>
                    </div>
                  </div>

                  {/* Live Preview Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {project.github && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </Button>
                          )}
                          {project.liveLink && (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0"
                              onClick={() => window.open(project.liveLink, '_blank')}
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Demo
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <Star className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="absolute top-4 right-4 left-20">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 }}
                          className="px-2 py-1 bg-black/70 backdrop-blur-sm text-cyan-400 text-xs font-medium rounded border border-cyan-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-gray-300 text-xs font-medium rounded border border-gray-500/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Project Title with Live Status */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Monitor className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-medium">Online</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features with Better Visual */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-cyan-400 flex items-center">
                      <Code className="w-4 h-4 mr-1" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="text-gray-300 text-xs flex items-start group/feature hover:text-cyan-400 transition-colors duration-200"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-200" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies with Better Styling */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-blue-400">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 text-xs rounded hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-400 transition-all duration-200 border border-gray-600/30 hover:border-cyan-500/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats/Metrics */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-3 h-3" />
                        <span>Full-Stack</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>Production</span>
                      </div>
                    </div>
                    <div className="text-xs text-cyan-400 font-medium">
                      #{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Hover Effect - 3D Transform & Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : ''
                }`} />

                {/* Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="space-y-4">
              <Button
                onClick={() => window.open('https://github.com/sushildahiya', '_blank')}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </Button>
              <p className="text-gray-500 text-sm">
                Explore more of my work and contributions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Projects;