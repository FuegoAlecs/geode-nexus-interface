
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Activity, TrendingUp, ArrowRight } from 'lucide-react';

const ActivitiesSection = () => {
  const recentTransactions = [
    { id: '0x8a3...2b1c', type: 'Swap', amount: '1,250 GEO', time: '2 mins ago', status: 'Completed' },
    { id: '0x7c2...9f3d', type: 'Stake', amount: '5,000 GEO', time: '15 mins ago', status: 'Completed' },
    { id: '0x3f1...4e7b', type: 'Transfer', amount: '750 GEO', time: '45 mins ago', status: 'Completed' },
    { id: '0x2d5...8c0a', type: 'Unstake', amount: '2,500 GEO', time: '1 hour ago', status: 'Completed' },
  ];

  const networkStats = [
    { label: 'Total Transactions', value: '164.8M', icon: <Activity className="w-5 h-5" />, change: '+12%' },
    { label: 'Active Nodes', value: '128,534', icon: <BarChart className="w-5 h-5" />, change: '+3%' },
    { label: 'Network TPS', value: '4,250', icon: <TrendingUp className="w-5 h-5" />, change: '+8%' },
  ];

  return (
    <section id="activities" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-geode-purple dark:text-white">
            On-Chain <span className="text-geode-orange">Activities</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Real-time insights into blockchain activities and network health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {networkStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card dark:glass-card-dark p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-geode-purple/10 dark:bg-geode-orange/10 text-geode-purple dark:text-geode-orange mr-3">
                    {stat.icon}
                  </div>
                  <span className="text-sm opacity-70">{stat.label}</span>
                </div>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-3xl font-bold mt-2 text-geode-purple dark:text-geode-orange">
                {stat.value}
              </p>
              <Progress 
                value={Math.random() * 50 + 50} 
                className="h-1 mt-4 bg-geode-purple/10 dark:bg-geode-orange/10" 
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card dark:glass-card-dark rounded-xl overflow-hidden"
        >
          <div className="p-4 bg-geode-purple/10 dark:bg-geode-orange/10 border-b border-geode-purple/10 dark:border-geode-orange/10">
            <h3 className="font-semibold text-xl text-geode-purple dark:text-geode-orange">Recent Transactions</h3>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((tx, index) => (
                  <TableRow 
                    key={index} 
                    className="hover:bg-geode-purple/5 dark:hover:bg-geode-orange/5"
                  >
                    <TableCell className="font-mono text-sm">{tx.id}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-geode-purple dark:text-geode-gold">
                        {tx.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{tx.amount}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{tx.time}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                        {tx.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <ArrowRight className="h-4 w-4 text-geode-purple dark:text-geode-gold" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 text-center border-t border-geode-purple/10 dark:border-geode-orange/10">
            <a href="#" className="text-sm text-geode-purple hover:underline dark:text-geode-orange">
              View all transactions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
