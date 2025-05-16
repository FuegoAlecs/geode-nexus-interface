
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
