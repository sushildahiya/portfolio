import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Eye } from 'lucide-react';
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
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        )}
                        {project.liveLink && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                            onClick={() => window.open(project.liveLink, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-black/70 backdrop-blur-sm text-cyan-400 text-xs font-medium rounded border border-cyan-500/30"
                        >
                          {tech}
                        </span>
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
                  {/* Project Title */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-cyan-400 flex items-center">
                      <Code className="w-4 h-4 mr-1" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-xs flex items-start">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-blue-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded hover:bg-gray-600/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect - 3D Transform */}
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : ''
                }`} />

                {/* Project Index */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <span className="text-cyan-400 text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Button
              onClick={() => window.open('https://github.com/sushildahiya', '_blank')}
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;