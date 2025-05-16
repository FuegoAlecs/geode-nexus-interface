
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, Lock } from 'lucide-react';
import DecentralizationVisual from './DecentralizationVisual';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Interactive background particles
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100); // Limit particles on larger screens
    
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        hue: Math.random() * 60 + 30 // Gold/orange hues
      });
    }
    
    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 100;
    
    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    canvas.addEventListener('touchmove', (e) => {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    });
    
    // Animation loop
    let animationFrame: number;
    
    const animate = () => {
      // Create semi-transparent background for trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Calculate distance to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Interactive response to mouse
        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          particle.speedX += Math.cos(angle) * 0.02;
          particle.speedY += Math.sin(angle) * 0.02;
        }
        
        // Apply speed
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Dampen speed
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, 0.8)`;
        ctx.fill();
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Interactive particle background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10"
      />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 py-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y, opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-geode-purple dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="text-geode-orange inline-block"
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 2, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              Decentralized
            </motion.span> Foundation for Digital Freedom
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-80 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Embrace a new era of peer-to-peer connectivity, data sovereignty, and zero-fee trading with The Geode Foundation.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-geode-purple text-geode-orange hover:bg-geode-purple/90 dark:bg-geode-orange dark:text-geode-purple dark:hover:bg-geode-gold"
              >
                Explore Applications
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-geode-purple text-geode-purple hover:bg-geode-purple/10 dark:border-geode-orange dark:text-geode-orange dark:hover:bg-geode-orange/10"
              >
                Learn More
                <Lock className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex items-center mt-8 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity 
              }}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">Network active with 128,534 nodes</span>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <DecentralizationVisual />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
