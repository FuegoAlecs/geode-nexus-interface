
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Link, GitBranch, Globe } from 'lucide-react';

const applications = [
  {
    title: "Geode Chain",
    description: "A high-throughput blockchain with zero transaction fees",
    icon: <Link className="w-6 h-6 text-geode-purple dark:text-geode-orange" />,
    tags: ["Core", "Layer 1"],
    delay: 0.1
  },
  {
    title: "Geode Wallet",
    description: "Secure, non-custodial wallet for all your digital assets",
    icon: <Shield className="w-6 h-6 text-geode-purple dark:text-geode-orange" />,
    tags: ["Security", "Assets"],
    delay: 0.2
  },
  {
    title: "P2P Exchange",
    description: "Decentralized trading platform with no intermediaries",
    icon: <GitBranch className="w-6 h-6 text-geode-purple dark:text-geode-orange" />,
    tags: ["Trading", "Zero-fee"],
    delay: 0.3
  },
  {
    title: "Geode Identity",
    description: "Self-sovereign identity solution for digital privacy",
    icon: <Globe className="w-6 h-6 text-geode-purple dark:text-geode-orange" />,
    tags: ["Privacy", "Identity"],
    delay: 0.4
  }
];

const ApplicationsSection = () => {
  return (
    <section id="applications" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-geode-purple dark:text-white">
            Decentralized <span className="text-geode-orange">Applications</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Explore our ecosystem of decentralized applications built for security, privacy, and user sovereignty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: app.delay }}
            >
              <Card className="h-full glass-card dark:glass-card-dark border-geode-purple/20 dark:border-geode-gold/20 overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex justify-center">
                    <motion.div 
                      className="p-3 rounded-full bg-geode-gold/20 dark:bg-geode-purple/20"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'rgba(245, 166, 35, 0.3)' 
                      }}
                    >
                      {app.icon}
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl text-center text-geode-purple dark:text-geode-orange">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-geode-charcoal/70 dark:text-white/70">
                    {app.description}
                  </CardDescription>
                  <div className="flex justify-center gap-2 mt-4">
                    {app.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-geode-purple/30 dark:border-geode-gold/30 text-geode-purple dark:text-geode-gold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-center">
                  <Button 
                    variant="ghost" 
                    className="text-geode-purple hover:text-geode-orange hover:bg-geode-purple/10 dark:text-geode-gold dark:hover:text-geode-orange dark:hover:bg-geode-purple/20"
                  >
                    Learn more →
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
