
import React from 'react';
import { motion } from 'framer-motion';
import DecentralizationVisual from './DecentralizationVisual';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const backgroundElementVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: 0
    },
    animate: {
      opacity: [0, 1, 0.8],
      scale: [0.8, 1, 0.95],
      rotate: 45,
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16 pb-32 px-4">
      {/* Background floating elements */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-3xl ${i % 2 === 0 ? 'bg-geode-purple/10' : 'bg-geode-orange/10'}`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 20}%`,
            }}
            variants={backgroundElementVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 0.5
            }}
          />
        ))}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-geode-purple/20 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          style={{ top: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-l from-geode-orange/20 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ bottom: '15%', left: '15%' }}
        />
      </div>
      
      <div className="container mx-auto max-w-7xl z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Trust in a <br/>
              <span className="text-geode-orange">Trustless</span> World
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Geode enables true decentralization with privacy-preserving blockchain technology and secure, self-custodial solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-geode-orange hover:bg-orange-600 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-geode-purple hover:bg-geode-purple/20">
                View Documentation 
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-4 mt-4"
            >
              {[
                { count: '10k+', label: 'Active Users' },
                { count: '500+', label: 'dApps Built' },
                { count: '$10M+', label: 'TVL' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-geode-orange text-2xl font-bold">{stat.count}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <DecentralizationVisual />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1,
          duration: 0.8 
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{
            boxShadow: ["0 0 0 rgba(255,255,255,0.1)", "0 0 10px rgba(255,255,255,0.5)", "0 0 0 rgba(255,255,255,0.1)"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
