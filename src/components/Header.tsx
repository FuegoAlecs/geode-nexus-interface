
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { 
  Link, 
  Shield, 
  Wallet, 
  BarChart, 
  Users, 
  Menu, 
  X 
} from 'lucide-react';
import GeodeLogo from './GeodeLogo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <motion.div 
        className="glass-card dark:glass-card-dark px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <GeodeLogo className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold text-geode-purple dark:text-geode-orange">GEODE</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#applications" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors">
            Applications
          </a>
          <a href="#dao" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors">
            DAO
          </a>
          <a href="#activities" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors">
            Activities
          </a>
          <a href="#privacy" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors">
            Privacy
          </a>
          <Button 
            className="bg-geode-purple text-geode-orange hover:bg-geode-purple/90 dark:bg-geode-orange dark:text-geode-purple dark:hover:bg-geode-gold"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-geode-purple dark:text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </motion.div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="glass-card dark:glass-card-dark md:hidden px-4 py-4 absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col space-y-4">
            <a href="#applications" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors px-2 py-2">
              Applications
            </a>
            <a href="#dao" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors px-2 py-2">
              DAO
            </a>
            <a href="#activities" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors px-2 py-2">
              Activities
            </a>
            <a href="#privacy" className="text-geode-purple dark:text-white hover:text-geode-gold transition-colors px-2 py-2">
              Privacy
            </a>
            <Button 
              className="bg-geode-purple text-geode-orange hover:bg-geode-purple/90 dark:bg-geode-orange dark:text-geode-purple dark:hover:bg-geode-gold w-full"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
