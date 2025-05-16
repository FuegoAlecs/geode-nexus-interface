
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import DaoSection from '@/components/DaoSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import PrivacySection from '@/components/PrivacySection';
import Footer from '@/components/Footer';
import PreLoader from '@/components/PreLoader';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  // Page section entrance animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut" 
      } 
    })
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && <PreLoader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <motion.div
              custom={0}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <HeroSection />
            </motion.div>
            
            <motion.div
              custom={1}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ApplicationsSection />
            </motion.div>
            
            <motion.div
              custom={2}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <DaoSection />
            </motion.div>
            
            <motion.div
              custom={3}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ActivitiesSection />
            </motion.div>
            
            <motion.div
              custom={4}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <PrivacySection />
            </motion.div>
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
