
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const DecentralizationVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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

  // Canvas animation for network connections
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 300;
    canvas.height = 300;
    
    let animationFrame: number;
    let hue = 0;
    
    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update hue for color cycling effect
      hue = (hue + 0.2) % 360;
      
      // Draw connections between nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.5)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Add animated particles along the connections
        const particleCount = 2;
        for (let i = 0; i < particleCount; i++) {
          const t = (performance.now() * 0.0005 + i / particleCount) % 1;
          const x = centerNode.x + (node.x - centerNode.x) * t;
          const y = centerNode.y + (node.y - centerNode.y) * t;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${1 - t})`;
          ctx.fill();
        }
      });
      
      animationFrame = requestAnimationFrame(drawNetwork);
    };
    
    drawNetwork();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px]">
      {/* Modern circular background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-geode-orange/20 to-geode-gold/20 dark:from-geode-gold/10 dark:to-geode-purple/20 blur-md"
        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        transition={{ duration: 1 }}
      />

      {/* Canvas for animated network lines */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      {/* Central node */}
      <motion.div 
        className="absolute rounded-full w-16 h-16 bg-geode-purple dark:bg-geode-orange z-20"
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
          {/* Node */}
          <motion.div 
            className="absolute rounded-full w-6 h-6 bg-geode-gold dark:bg-geode-purple z-20"
            style={{ 
              top: node.y - 12, 
              left: node.x - 12,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: node.delay }}
          />
          
          {/* Interactive hover effect */}
          <motion.div
            className="absolute rounded-full bg-transparent cursor-pointer z-30"
            style={{ 
              top: node.y - 20, 
              left: node.x - 20,
              width: '40px',
              height: '40px',
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute rounded-full bg-geode-gold/30 dark:bg-geode-purple/30 z-10"
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
        className="absolute rounded-full bg-geode-purple/30 dark:bg-geode-orange/30 z-10"
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
