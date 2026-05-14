import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'InternPe',
    role: 'Web Development Intern',
    period: 'June 2025 – July 2025',
    type: 'Internship',
    color: 'from-cyan-500 to-blue-600',
    dot: 'bg-cyan-400',
    points: [
      'Developed frontend and backend features for real-world web applications.',
      'Collaborated with Git & GitHub for version control and code reviews.',
      'Gained hands-on experience in full development lifecycle workflows.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">Work History</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Internship Experience</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative md:pl-16 mb-8"
            >
              {/* Dot */}
              <div className={`absolute left-3.5 top-5 w-3 h-3 rounded-full ${exp.dot} shadow-[0_0_10px_rgba(6,182,212,0.8)] hidden md:block -translate-x-1/2`} />

              <div className="glass-card rounded-2xl p-8 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <CalendarDays size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
