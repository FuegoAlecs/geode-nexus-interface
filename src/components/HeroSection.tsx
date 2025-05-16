
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, Lock } from 'lucide-react';
import DecentralizationVisual from './DecentralizationVisual';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute hexagon bg-geode-gold/10 dark:bg-geode-purple/10"
            initial={{ 
              opacity: 0.3,
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.3 + 0.1
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: Math.random() * 20 + 10
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 py-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-geode-purple dark:text-white">
            <span className="text-geode-orange">Decentralized</span> Foundation for Digital Freedom
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-lg">
            Embrace a new era of peer-to-peer connectivity, data sovereignty, and zero-fee trading with The Geode Foundation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-geode-purple text-geode-orange hover:bg-geode-purple/90 dark:bg-geode-orange dark:text-geode-purple dark:hover:bg-geode-gold"
            >
              Explore Applications
              <Shield className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-geode-purple text-geode-purple hover:bg-geode-purple/10 dark:border-geode-orange dark:text-geode-orange dark:hover:bg-geode-orange/10"
            >
              Learn More
              <Lock className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center mt-8 space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Network active with 128,534 nodes</span>
          </div>
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
