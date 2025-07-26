import React from 'react';
import { motion } from 'framer-motion';

const FloatingCode = ({ className = "", size = "w-64 h-64" }) => {
  return (
    <div className={`${size} ${className}`}>
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        initial={{ rotateY: 0, rotateX: 0 }}
        animate={{ 
          rotateY: [0, 360],
          rotateX: [0, 15, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Background Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#codeGradient1)"
          strokeWidth="2"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Inner Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="url(#codeGradient2)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Code Brackets */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Left Bracket */}
          <path
            d="M 70 60 L 60 70 L 60 130 L 70 140"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Right Bracket */}
          <path
            d="M 130 60 L 140 70 L 140 130 L 130 140"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Floating Code Elements */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* Code Lines */}
          <motion.line
            x1="80" y1="85" x2="120" y2="85"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="85" y1="100" x2="115" y2="100"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="80" y1="115" x2="120" y2="115"
            stroke="#0891b2"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </motion.g>

        {/* Orbiting Dots */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="170" cy="100" r="3" fill="#22d3ee">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="30" r="3" fill="#06b6d4">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="100" r="3" fill="#0891b2">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="170" r="3" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </motion.g>

        {/* Central Core */}
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="url(#coreGradient)"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="codeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="codeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default FloatingCode;