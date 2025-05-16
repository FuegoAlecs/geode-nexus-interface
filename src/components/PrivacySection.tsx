
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, User, Key } from 'lucide-react';

const PrivacySection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Sovereignty",
      description: "Own your data completely. No third-party can access or control your information without explicit permission."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "End-to-End Encryption",
      description: "All communications and transactions are protected with military-grade encryption protocols."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Self-Sovereign Identity",
      description: "Create and control your digital identity without reliance on centralized authorities."
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Private Key Management",
      description: "Secure key management system ensures only you have access to your assets and data."
    }
  ];

  return (
    <section id="privacy" className="py-16 px-4 bg-geode-orange/5 dark:bg-geode-purple/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-geode-purple dark:text-white">
            Privacy & <span className="text-geode-orange">Security</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            We prioritize your digital sovereignty with cutting-edge privacy and security features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card dark:glass-card-dark p-6 rounded-xl text-center"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-geode-purple/10 dark:bg-geode-orange/10 text-geode-purple dark:text-geode-orange">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-geode-purple dark:text-geode-orange">
                {feature.title}
              </h3>
              <p className="text-geode-charcoal/70 dark:text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 glass-card dark:glass-card-dark rounded-xl max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-geode-purple/10 dark:bg-geode-orange/10 rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-geode-gold/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-geode-purple dark:text-geode-orange">Our Privacy Commitment</h3>
              <p className="mb-4">
                The Geode Foundation is built on the principle that your data belongs to you. We've designed our systems from the ground up to ensure:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-geode-gold mr-2">✓</span>
                  <span>No collection of personal data without explicit consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-geode-gold mr-2">✓</span>
                  <span>No third-party data sharing or analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-geode-gold mr-2">✓</span>
                  <span>Open-source code for full transparency and auditability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-geode-gold mr-2">✓</span>
                  <span>Decentralized infrastructure for censorship resistance</span>
                </li>
              </ul>
              <p className="text-sm text-geode-charcoal/60 dark:text-white/60 italic">
                "In a digital world of increasing surveillance, we believe privacy isn't just a feature—it's a fundamental right."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySection;
