import React from 'react';
import { motion } from 'framer-motion';

const HolographicIDE = ({ className = "", size = "w-full h-full" }) => {
  const codeLines = [
    "import React from 'react';",
    "const Portfolio = () => {",
    "  const [user, setUser] = useState();",
    "  useEffect(() => {",
    "    fetchUserData();",
    "  }, []);",
    "  return (",
    "    <div className='portfolio'>",
    "      <Header />",
    "      <Main />",
    "    </div>",
    "  );",
    "};",
    "export default Portfolio;"
  ];

  const terminalCommands = [
    "$ npm install framer-motion",
    "$ git add .",
    "$ git commit -m 'feat: add portfolio'",
    "$ npm run build",
    "$ vercel deploy",
    "✓ Deployment successful"
  ];

  return (
    <div className={`${size} ${className} relative overflow-hidden`}>
      <motion.svg
        viewBox="0 0 1200 800"
        className="w-full h-full absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      >
        {/* Main IDE Window */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1, 0.8],
            rotateY: [-15, 5, -15]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* IDE Window Frame */}
          <rect
            x="200"
            y="150"
            width="600"
            height="400"
            rx="8"
            fill="none"
            stroke="url(#ideGradient1)"
            strokeWidth="2"
            opacity="0.6"
          />
          
          {/* IDE Title Bar */}
          <rect
            x="200"
            y="150"
            width="600"
            height="30"
            rx="8"
            fill="url(#ideHeaderGradient)"
            opacity="0.4"
          />
          
          {/* Window Controls */}
          <circle cx="220" cy="165" r="4" fill="#ff5f57" opacity="0.8"/>
          <circle cx="240" cy="165" r="4" fill="#ffbd2e" opacity="0.8"/>
          <circle cx="260" cy="165" r="4" fill="#28ca42" opacity="0.8"/>
          
          {/* Tab Bar */}
          <rect x="280" y="155" width="80" height="20" rx="3" fill="url(#tabGradient)" opacity="0.5"/>
          <rect x="365" y="155" width="90" height="20" rx="3" fill="none" stroke="url(#ideGradient2)" strokeWidth="1" opacity="0.3"/>
          
          {/* Code Editor Area */}
          <rect
            x="210"
            y="190"
            width="580"
            height="350"
            fill="url(#editorGradient)"
            opacity="0.2"
          />
          
          {/* Line Numbers */}
          <g opacity="0.6">
            {[...Array(12)].map((_, i) => (
              <motion.text
                key={i}
                x="220"
                y={210 + i * 25}
                fill="#8b5cf6"
                fontSize="12"
                fontFamily="monospace"
                opacity="0.5"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              >
                {String(i + 1).padStart(2, ' ')}
              </motion.text>
            ))}
          </g>
          
          {/* Code Lines with Typing Animation */}
          <g>
            {codeLines.slice(0, 10).map((line, i) => (
              <motion.text
                key={i}
                x="250"
                y={210 + i * 25}
                fill={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4"}
                fontSize="11"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.7] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 5
                }}
              >
                {line}
              </motion.text>
            ))}
          </g>
          
          {/* Cursor Blink */}
          <motion.rect
            x="420"
            y="460"
            width="2"
            height="15"
            fill="#3b82f6"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>

        {/* Floating Terminal Window */}
        <motion.g
          initial={{ opacity: 0, x: -100, rotateY: 20 }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            x: [-100, 50, -100],
            rotateY: [20, -10, 20]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Terminal Frame */}
          <rect
            x="50"
            y="400"
            width="400"
            height="280"
            rx="6"
            fill="none"
            stroke="url(#terminalGradient1)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          
          {/* Terminal Header */}
          <rect
            x="50"
            y="400"
            width="400"
            height="25"
            rx="6"
            fill="url(#terminalHeaderGradient)"
            opacity="0.3"
          />
          
          {/* Terminal Title */}
          <text x="70" y="418" fill="#8b5cf6" fontSize="10" fontFamily="monospace" opacity="0.7">
            Terminal - zsh
          </text>
          
          {/* Terminal Content */}
          <rect
            x="58"
            y="430"
            width="384"
            height="240"
            fill="url(#terminalContentGradient)"
            opacity="0.15"
          />
          
          {/* Terminal Commands */}
          <g>
            {terminalCommands.map((cmd, i) => (
              <motion.text
                key={i}
                x="70"
                y={450 + i * 20}
                fill={cmd.includes('$') ? "#3b82f6" : cmd.includes('✓') ? "#10b981" : "#8b5cf6"}
                fontSize="10"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0.4] }}
                transition={{ 
                  duration: 3, 
                  delay: i * 0.5, 
                  repeat: Infinity,
                  repeatDelay: 8
                }}
              >
                {cmd}
              </motion.text>
            ))}
          </g>
        </motion.g>

        {/* Floating File Explorer */}
        <motion.g
          initial={{ opacity: 0, y: -50, rotateX: -20 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [-50, 30, -50],
            rotateX: [-20, 10, -20]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Explorer Frame */}
          <rect
            x="850"
            y="100"
            width="280"
            height="350"
            rx="6"
            fill="none"
            stroke="url(#explorerGradient1)"
            strokeWidth="1.5"
            opacity="0.4"
          />
          
          {/* Explorer Header */}
          <rect
            x="850"
            y="100"
            width="280"
            height="25"
            rx="6"
            fill="url(#explorerHeaderGradient)"
            opacity="0.3"
          />
          
          {/* Folder Structure */}
          <g opacity="0.6">
            {[
              "📁 src",
              "  📁 components",
              "    📄 Header.jsx",
              "    📄 Hero.jsx",
              "    📄 About.jsx",
              "  📁 pages",
              "    📄 Portfolio.jsx",
              "  📁 assets",
              "    🖼️ avatar.png",
              "📄 package.json",
              "📄 README.md"
            ].map((item, i) => (
              <motion.text
                key={i}
                x={860 + (item.startsWith('  ') ? 20 : item.startsWith('    ') ? 40 : 0)}
                y={140 + i * 18}
                fill={item.includes('📁') ? "#8b5cf6" : item.includes('📄') ? "#3b82f6" : "#06b6d4"}
                fontSize="9"
                fontFamily="monospace"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
              >
                {item}
              </motion.text>
            ))}
          </g>
        </motion.g>

        {/* Floating Debug Panel */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9, rotateZ: 5 }}
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [0.9, 1.1, 0.9],
            rotateZ: [5, -5, 5]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Debug Panel Frame */}
          <rect
            x="100"
            y="50"
            width="350"
            height="200"
            rx="6"
            fill="none"
            stroke="url(#debugGradient1)"
            strokeWidth="1.5"
            opacity="0.3"
          />
          
          {/* Debug Content */}
          <rect
            x="108"
            y="75"
            width="334"
            height="165"
            fill="url(#debugContentGradient)"
            opacity="0.1"
          />
          
          {/* Debug Variables */}
          <g opacity="0.5">
            {[
              "🔍 Variables",
              "user: Object {name, email}",
              "loading: false",
              "error: null",
              "🔍 Network",
              "GET /api/user - 200 OK",
              "POST /api/projects - 201"
            ].map((item, i) => (
              <motion.text
                key={i}
                x="115"
                y={95 + i * 18}
                fill={item.includes('🔍') ? "#8b5cf6" : item.includes('200') || item.includes('201') ? "#10b981" : "#3b82f6"}
                fontSize="9"
                fontFamily="monospace"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              >
                {item}
              </motion.text>
            ))}
          </g>
        </motion.g>

        {/* Floating Code Snippets */}
        {[
          { x: 600, y: 50, code: "const [state, setState]", delay: 0 },
          { x: 950, y: 500, code: "useEffect(() => {", delay: 2 },
          { x: 300, y: 700, code: "return <Component />", delay: 4 },
          { x: 50, y: 300, code: "async/await", delay: 6 }
        ].map((snippet, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 8, 
              delay: snippet.delay, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect
              x={snippet.x}
              y={snippet.y}
              width="150"
              height="30"
              rx="4"
              fill="url(#snippetGradient)"
              opacity="0.2"
            />
            <text
              x={snippet.x + 10}
              y={snippet.y + 20}
              fill="#8b5cf6"
              fontSize="10"
              fontFamily="monospace"
            >
              {snippet.code}
            </text>
          </motion.g>
        ))}

        {/* Data Flow Lines */}
        <g opacity="0.3">
          {[
            { x1: 400, y1: 350, x2: 600, y2: 200 },
            { x1: 250, y1: 550, x2: 450, y2: 400 },
            { x1: 850, y1: 250, x2: 700, y2: 300 }
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#dataFlowGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ 
                duration: 4, 
                delay: i * 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="ideGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ideGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="ideHeaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="editorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="tabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="terminalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="terminalHeaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="terminalContentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="explorerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="explorerHeaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="debugGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="debugContentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#312e81" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="snippetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default HolographicIDE;