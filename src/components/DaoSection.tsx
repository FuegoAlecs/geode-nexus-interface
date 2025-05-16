
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users } from 'lucide-react';

const DaoSection = () => {
  // Sample governance data
  const proposals = [
    { id: 'GIP-42', title: 'Treasury Allocation for Developer Grants', votes: 78, status: 'Active' },
    { id: 'GIP-41', title: 'Protocol Upgrade to v2.5', votes: 92, status: 'Passed' },
    { id: 'GIP-40', title: 'Community Marketing Initiative', votes: 65, status: 'Active' }
  ];

  return (
    <section id="dao" className="py-16 px-4 bg-geode-orange/5 dark:bg-geode-purple/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-geode-purple dark:text-white">
            Decentralized <span className="text-geode-orange">Governance</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            The Geode Foundation is community-governed through our DAO, ensuring transparent and collective decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side: DAO stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card dark:glass-card-dark p-6 rounded-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-geode-purple/10 dark:bg-geode-orange/10">
                <Users className="w-8 h-8 text-geode-purple dark:text-geode-orange" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-geode-purple dark:text-geode-orange">DAO Statistics</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 rounded-lg bg-white/40 dark:bg-black/20">
                <p className="text-sm text-geode-charcoal/60 dark:text-white/60">Active Members</p>
                <p className="text-3xl font-bold text-geode-purple dark:text-geode-orange">12,458</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-white/40 dark:bg-black/20">
                <p className="text-sm text-geode-charcoal/60 dark:text-white/60">Voting Power Staked</p>
                <p className="text-3xl font-bold text-geode-purple dark:text-geode-orange">64.2M</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-white/40 dark:bg-black/20">
                <p className="text-sm text-geode-charcoal/60 dark:text-white/60">Treasury Value</p>
                <p className="text-3xl font-bold text-geode-purple dark:text-geode-orange">$42.8M</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-white/40 dark:bg-black/20">
                <p className="text-sm text-geode-charcoal/60 dark:text-white/60">Proposals Executed</p>
                <p className="text-3xl font-bold text-geode-purple dark:text-geode-orange">156</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-geode-purple text-geode-orange hover:bg-geode-purple/90 dark:bg-geode-orange dark:text-geode-purple dark:hover:bg-geode-gold"
            >
              Join Governance
            </Button>
          </motion.div>

          {/* Right side: Active proposals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-geode-purple dark:text-white">Active Proposals</h3>
            
            <div className="space-y-4">
              {proposals.map((proposal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card dark:glass-card-dark p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-geode-purple/10 dark:bg-geode-orange/10 text-geode-purple dark:text-geode-orange">
                        {proposal.id}
                      </span>
                      <span className="ml-2 text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                        {proposal.status}
                      </span>
                    </div>
                    <span className="text-sm text-geode-charcoal/60 dark:text-white/60">
                      {proposal.votes}% Approval
                    </span>
                  </div>
                  
                  <h4 className="font-medium text-geode-purple dark:text-white mb-2">
                    {proposal.title}
                  </h4>
                  
                  <Progress 
                    value={proposal.votes} 
                    className="h-2 bg-geode-purple/20 dark:bg-geode-orange/20"
                  />
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs border-geode-purple text-geode-purple hover:bg-geode-purple/10 dark:border-geode-orange dark:text-geode-orange dark:hover:bg-geode-orange/10"
                    >
                      Cast Vote
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="link" className="text-geode-purple dark:text-geode-orange">
                View All Proposals →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DaoSection;
