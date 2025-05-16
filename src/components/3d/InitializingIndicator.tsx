
import React from 'react';
import { motion } from 'framer-motion';

const InitializingIndicator: React.FC = () => {
  return (
    <motion.div 
      className="absolute bottom-10 left-0 right-0 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full"
        animate={{ 
          boxShadow: ["0 0 0 rgba(245, 166, 35, 0)", "0 0 20px rgba(245, 166, 35, 0.7)", "0 0 0 rgba(245, 166, 35, 0)"]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div 
            key={i}
            className="w-2 h-2 rounded-full bg-geode-orange"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        ))}
        <motion.span 
          className="text-geode-orange text-sm ml-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Initializing blockchain...
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default InitializingIndicator;
