import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const timeline = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Amity University Rajasthan',
    period: '2023 – 2027',
    grade: 'CGPA: 6.86',
    icon: GraduationCap,
    color: 'from-cyan-500 to-blue-600',
    dot: 'bg-cyan-400',
    glow: 'shadow-[0_0_12px_rgba(6,182,212,0.6)]',
    current: true,
  },
  {
    degree: 'Class XII – Science (PCM)',
    institution: 'GR Global Academy, Jaipur',
    period: '2022',
    grade: 'Percentage: 64%',
    icon: BookOpen,
    color: 'from-violet-500 to-purple-600',
    dot: 'bg-violet-400',
    glow: 'shadow-[0_0_12px_rgba(139,92,246,0.6)]',
    current: false,
  },
  {
    degree: 'Class X',
    institution: 'GR Global Academy, Jaipur',
    period: '2020',
    grade: 'Percentage: 77%',
    icon: BookOpen,
    color: 'from-fuchsia-500 to-pink-600',
    dot: 'bg-fuchsia-400',
    glow: 'shadow-[0_0_12px_rgba(236,72,153,0.6)]',
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-violet-400 uppercase mb-2">Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Education Timeline</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-fuchsia-500/20" />

          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 mb-10 last:mb-0"
              >
                {/* Dot */}
                <div className={`absolute left-[14px] top-5 w-3.5 h-3.5 rounded-full ${item.dot} ${item.glow} -translate-x-1/2 ring-2 ring-[#050505]`} />

                <div className={`glass-card rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-heading font-bold text-white">{item.degree}</h3>
                        {item.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-medium">Current</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{item.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <span className="text-xs text-gray-500">{item.period}</span>
                        <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
