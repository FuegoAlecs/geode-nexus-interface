
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, Lock } from 'lucide-react';
import DecentralizationVisual from './DecentralizationVisual';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.99] }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
    tap: { scale: 0.98 }
  };
  
  // Fixed the error by correcting the Framer Motion types
  const floatingElementVariants = {
    initial: { 
      opacity: 0.2,
      scale: 1,
      rotate: 0
    },
    animate: { 
      opacity: [0.1, 0.2, 0.3],
      scale: [0.8, 1, 1.1],
      rotate: 360,
      transition: { 
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute backdrop-blur-xl bg-white/5 border border-white/10 rounded-full"
            custom={i}
            variants={floatingElementVariants}
            initial="initial"
            animate="animate"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              backdropFilter: "blur(2px)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 py-12">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-geode-purple dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block relative">
                <span className="text-geode-orange">Decentralized</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-geode-orange rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>{" "}
              Foundation for Digital Freedom
            </motion.h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl opacity-80 mb-8 max-w-lg"
          >
            Embrace a new era of peer-to-peer connectivity, data sovereignty, and zero-fee trading with The Geode Foundation.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                size="lg" 
                className="bg-geode-purple text-geode-orange hover:bg-geode-purple/90 dark:bg-geode-orange dark:text-geode-purple dark:hover:bg-geode-gold relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Applications</span>
                <Shield className="ml-2 h-5 w-5 relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-geode-purple to-geode-purple/80 dark:from-geode-orange dark:to-geode-gold"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-geode-purple text-geode-purple hover:bg-geode-purple/10 dark:border-geode-orange dark:text-geode-orange dark:hover:bg-geode-orange/10 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <Lock className="ml-2 h-5 w-5 relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-geode-purple/10 dark:bg-geode-orange/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center mt-8 space-x-2"
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
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
        >
          <DecentralizationVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
