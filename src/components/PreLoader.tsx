
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

  const hexVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    exit: { 
      scale: 1.5, 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-geode-orange"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={loading ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-60 h-60">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute hexagon",
              i === 0 ? "w-24 h-24 bg-geode-purple" : 
              i === 1 ? "w-20 h-20 bg-geode-purple/80" : 
              i === 2 ? "w-16 h-16 bg-geode-purple/60" : 
              i === 3 ? "w-12 h-12 bg-geode-purple/40" : 
              "w-8 h-8 bg-geode-purple/20"
            )}
            style={{ 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)" 
            }}
            variants={hexVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={i}
          />
        ))}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          GEODE
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
