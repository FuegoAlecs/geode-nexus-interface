
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import GeodeLogo from './GeodeLogo';

const Footer = () => {
  return (
    <footer className="bg-geode-purple text-white dark:bg-geode-orange dark:text-geode-purple">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GeodeLogo className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold">GEODE</span>
            </div>
            <p className="text-sm opacity-80">
              The Geode Foundation is building the future of decentralized, peer-to-peer interactions with privacy at its core.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-geode-gold">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-geode-gold">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-geode-gold">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-geode-gold dark:text-geode-purple">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Whitepaper</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Developer Portal</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold mb-4 text-geode-gold dark:text-geode-purple">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">DAO Governance</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Discord</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Forum</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-geode-gold dark:hover:text-white">Grants</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-geode-gold dark:text-geode-purple">Stay Updated</h3>
            <p className="text-sm mb-4 opacity-80">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-geode-gold text-sm"
              />
              <Button 
                type="submit" 
                className="w-full bg-geode-gold text-geode-purple hover:bg-geode-gold/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} The Geode Foundation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm opacity-70">
            <a href="#" className="hover:text-geode-gold dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-geode-gold dark:hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-geode-gold dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
