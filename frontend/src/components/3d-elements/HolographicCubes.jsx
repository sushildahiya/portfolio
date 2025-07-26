import React from 'react';
import { motion } from 'framer-motion';

const HolographicCubes = ({ className = "", size = "w-80 h-80" }) => {
  return (
    <div className={`${size} ${className}`}>
      <motion.svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Main Cube */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Front Face */}
          <motion.path
            d="M 100 100 L 160 100 L 160 160 L 100 160 Z"
            fill="none"
            stroke="url(#cubeGradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Top Face */}
          <motion.path
            d="M 100 100 L 130 70 L 190 70 L 160 100 Z"
            fill="none"
            stroke="url(#cubeGradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          
          {/* Right Face */}
          <motion.path
            d="M 160 100 L 190 70 L 190 130 L 160 160 Z"
            fill="none"
            stroke="url(#cubeGradient3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </motion.g>

        {/* Floating Mini Cubes */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Mini Cube 1 */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          >
            <path d="M 60 60 L 80 60 L 80 80 L 60 80 Z" fill="none" stroke="#22d3ee" strokeWidth="1"/>
            <path d="M 60 60 L 70 50 L 90 50 L 80 60 Z" fill="none" stroke="#06b6d4" strokeWidth="1"/>
            <path d="M 80 60 L 90 50 L 90 70 L 80 80 Z" fill="none" stroke="#0891b2" strokeWidth="1"/>
          </motion.g>

          {/* Mini Cube 2 */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <path d="M 220 80 L 240 80 L 240 100 L 220 100 Z" fill="none" stroke="#22d3ee" strokeWidth="1"/>
            <path d="M 220 80 L 230 70 L 250 70 L 240 80 Z" fill="none" stroke="#06b6d4" strokeWidth="1"/>
            <path d="M 240 80 L 250 70 L 250 90 L 240 100 Z" fill="none" stroke="#0891b2" strokeWidth="1"/>
          </motion.g>

          {/* Mini Cube 3 */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          >
            <path d="M 80 220 L 100 220 L 100 240 L 80 240 Z" fill="none" stroke="#22d3ee" strokeWidth="1"/>
            <path d="M 80 220 L 90 210 L 110 210 L 100 220 Z" fill="none" stroke="#06b6d4" strokeWidth="1"/>
            <path d="M 100 220 L 110 210 L 110 230 L 100 240 Z" fill="none" stroke="#0891b2" strokeWidth="1"/>
          </motion.g>
        </motion.g>

        {/* Energy Particles */}
        <motion.g>
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + Math.cos(i * Math.PI / 4) * 80}
              cy={150 + Math.sin(i * Math.PI / 4) * 80}
              r="2"
              fill="#22d3ee"
              animate={{
                cx: [
                  150 + Math.cos(i * Math.PI / 4) * 80,
                  150 + Math.cos((i + 1) * Math.PI / 4) * 80
                ],
                cy: [
                  150 + Math.sin(i * Math.PI / 4) * 80,
                  150 + Math.sin((i + 1) * Math.PI / 4) * 80
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            >
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </motion.circle>
          ))}
        </motion.g>

        {/* Central Grid */}
        <motion.g
          opacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Horizontal Lines */}
          {[...Array(5)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="120"
              y1={120 + i * 10}
              x2="180"
              y2={120 + i * 10}
              stroke="#22d3ee"
              strokeWidth="0.5"
            />
          ))}
          {/* Vertical Lines */}
          {[...Array(7)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={120 + i * 10}
              y1="120"
              x2={120 + i * 10}
              y2="160"
              stroke="#22d3ee"
              strokeWidth="0.5"
            />
          ))}
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cubeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="cubeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#164e63" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default HolographicCubes;