import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Megaphone, Music, Mic2, Wrench } from 'lucide-react';

const achievements = [
  { label: 'My Bharat Budget Quiz', sub: 'Participant', icon: Star, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { label: 'Innovation Day', sub: 'Volunteer', icon: Wrench, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  { label: 'E-Summit', sub: 'Volunteer', icon: Users, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { label: 'Sunburn', sub: 'Marketing Team Member', icon: Music, color: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20' },
  { label: 'ODYSSEY 2024', sub: 'Anchor', icon: Mic2, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  { label: "Engineers' Day", sub: 'Volunteer', icon: Megaphone, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-2">Beyond Code</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Achievements &amp; Activities</h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">Leadership, community involvement, and campus initiatives that shaped my growth.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`flex items-center gap-4 p-5 rounded-2xl border glass-card transition-all duration-300 ${item.color}`}
              >
                <div className={`p-2.5 rounded-xl border ${item.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
