
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 } 
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%",
      transition: { duration: 2.3, ease: "easeInOut" }
    }
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: [0, 0.8, 0],
      transition: { 
        delay: i * 0.2,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" 
      }
    })
  };

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-br from-geode-orange/90 to-geode-purple/90"
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <motion.div
        className="relative mb-10"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <div className="relative text-white text-4xl font-bold tracking-widest z-10">
          GEODE
        </div>
        
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className={cn(
                "absolute rounded-full border-2 border-white/20",
                i === 0 ? "w-24 h-24" : 
                i === 1 ? "w-32 h-32" : 
                i === 2 ? "w-40 h-40" : 
                i === 3 ? "w-48 h-48" : 
                "w-56 h-56"
              )}
              custom={i}
              variants={circleVariants}
              initial="initial"
              animate="animate"
            />
          ))}
        </div>
      </motion.div>
      
      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          variants={progressVariants}
          initial="initial"
          animate="animate"
        />
      </div>
      
      <motion.div 
        className="mt-4 text-white/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Initializing decentralized network
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
