import React from 'react';
import { motion } from 'framer-motion';

const CodeMatrix = ({ className = "", size = "w-96 h-96" }) => {
  const codeSymbols = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '\\', '=', '+', '-', '*', '%', '&', '|', '^', '~', '!', '?', ':', ';', '.', ','];

  return (
    <div className={`${size} ${className}`}>
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{ 
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Central Sphere */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="url(#matrixGradient1)"
          strokeWidth="2"
          strokeDasharray="15,5"
          initial={{ scale: 0.5, opacity: 0.3 }}
          animate={{ 
            scale: [0.5, 1.2, 0.5],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Orbital Rings */}
        {[100, 130, 160].map((radius, index) => (
          <motion.circle
            key={index}
            cx="200"
            cy="200"
            r={radius}
            fill="none"
            stroke={`url(#matrixGradient${index + 2})`}
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ rotate: 0 }}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{ 
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Floating Code Symbols */}
        {codeSymbols.slice(0, 12).map((symbol, index) => {
          const angle = (index * 30) * (Math.PI / 180);
          const radius = 120 + (index % 3) * 20;
          return (
            <motion.g
              key={index}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 15 + index,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.text
                x={200 + Math.cos(angle) * radius}
                y={200 + Math.sin(angle) * radius}
                fill="#22d3ee"
                fontSize="16"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="monospace"
                fontWeight="bold"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {symbol}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Data Streams */}
        {[...Array(6)].map((_, i) => (
          <motion.g
            key={i}
            initial={{ rotate: i * 60 }}
            animate={{ rotate: i * 60 + 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.line
              x1="200"
              y1="120"
              x2="200"
              y2="40"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
            {/* Data Points */}
            <motion.circle
              cx="200"
              cy="80"
              r="4"
              fill="#22d3ee"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          </motion.g>
        ))}

        {/* Central Core */}
        <motion.g>
          <motion.circle
            cx="200"
            cy="200"
            r="20"
            fill="url(#coreGradient)"
            initial={{ scale: 0.5 }}
            animate={{ scale: [0.5, 1.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Core Cross */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <line x1="185" y1="200" x2="215" y2="200" stroke="#000" strokeWidth="2"/>
            <line x1="200" y1="185" x2="200" y2="215" stroke="#000" strokeWidth="2"/>
          </motion.g>
        </motion.g>

        {/* Binary Rain Effect */}
        {[...Array(20)].map((_, i) => (
          <motion.text
            key={i}
            x={50 + i * 15}
            y="50"
            fill="#06b6d4"
            fontSize="8"
            fontFamily="monospace"
            opacity="0.4"
            animate={{
              y: [50, 350],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.text>
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="matrixGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="matrixGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="matrixGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#164e63" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="matrixGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#164e63" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default CodeMatrix;