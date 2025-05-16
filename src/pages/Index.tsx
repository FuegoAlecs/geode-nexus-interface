
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import DaoSection from '@/components/DaoSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import PrivacySection from '@/components/PrivacySection';
import Footer from '@/components/Footer';
import PreLoader3D from '@/components/PreLoader3D';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Increased loading time to showcase the 3D animation
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && <PreLoader3D />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Header />
          <main>
            <HeroSection />
            <ApplicationsSection />
            <DaoSection />
            <ActivitiesSection />
            <PrivacySection />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
