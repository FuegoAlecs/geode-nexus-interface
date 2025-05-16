
import React from 'react';
import { motion } from 'framer-motion';

const DecentralizationVisual = () => {
  // Create nodes for the network visualization
  const centerNode = { x: 150, y: 150 };
  const nodes = [
    { x: 150, y: 50, delay: 0.1 },
    { x: 250, y: 150, delay: 0.2 },
    { x: 150, y: 250, delay: 0.3 },
    { x: 50, y: 150, delay: 0.4 },
    { x: 80, y: 80, delay: 0.5 },
    { x: 220, y: 80, delay: 0.6 },
    { x: 220, y: 220, delay: 0.7 },
    { x: 80, y: 220, delay: 0.8 },
  ];

  return (
    <div className="relative w-[300px] h-[300px]">
      {/* Background hexagon */}
      <motion.div 
        className="absolute top-1/2 left-1/2 hexagon w-[250px] h-[250px] bg-geode-orange/20 dark:bg-geode-gold/10"
        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        transition={{ duration: 1 }}
      />

      {/* Central node */}
      <motion.div 
        className="absolute hexagon w-16 h-16 bg-geode-purple dark:bg-geode-orange"
        style={{ 
          top: centerNode.y - 32, 
          left: centerNode.x - 32,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Connecting nodes */}
      {nodes.map((node, index) => (
        <React.Fragment key={index}>
          {/* Line connecting to center */}
          <motion.line
            x1={centerNode.x}
            y1={centerNode.y}
            x2={node.x}
            y2={node.y}
            stroke="#4A2A6F"
            strokeWidth="2"
            strokeDasharray="4"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.7, pathLength: 1 }}
            transition={{ duration: 1, delay: node.delay }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />

          {/* Node */}
          <motion.div 
            className="absolute rounded-full w-6 h-6 bg-geode-gold dark:bg-geode-purple"
            style={{ 
              top: node.y - 12, 
              left: node.x - 12,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: node.delay }}
          />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute rounded-full bg-geode-gold/30 dark:bg-geode-purple/30"
            style={{ 
              top: node.y - 12, 
              left: node.x - 12,
              width: '24px',
              height: '24px',
            }}
            animate={{
              opacity: [0.7, 0],
              scale: [1, 2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay + 1,
            }}
          />
        </React.Fragment>
      ))}
      
      {/* Animated central pulse */}
      <motion.div
        className="absolute rounded-full bg-geode-purple/30 dark:bg-geode-orange/30"
        style={{ 
          top: centerNode.y - 32, 
          left: centerNode.x - 32,
          width: '64px',
          height: '64px',
        }}
        animate={{
          opacity: [0.7, 0],
          scale: [1, 1.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default DecentralizationVisual;
