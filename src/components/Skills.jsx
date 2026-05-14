import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-cyan-500 to-blue-600',
    glow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    border: 'hover:border-cyan-500/40',
    skills: ['Java', 'JavaScript', 'Python', 'C', 'C++'],
  },
  {
    title: 'Frontend',
    color: 'from-blue-500 to-indigo-600',
    glow: 'hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]',
    border: 'hover:border-indigo-500/40',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]',
    border: 'hover:border-violet-500/40',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]',
    border: 'hover:border-fuchsia-500/40',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    color: 'from-emerald-500 to-teal-600',
    glow: 'hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]',
    border: 'hover:border-emerald-500/40',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Concepts',
    color: 'from-amber-500 to-orange-600',
    glow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]',
    border: 'hover:border-amber-500/40',
    skills: ['REST APIs', 'OOP', 'SDLC', 'DSA', 'JWT Auth'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Skills &amp; Technologies
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A curated set of technologies I use to craft full-stack solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className={`glass-card rounded-2xl p-6 border border-white/5 transition-all duration-300 ${cat.glow} ${cat.border} group`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} mb-5 shadow-md`}>
                <span className="text-white font-bold text-xs">{cat.title.slice(0, 2).toUpperCase()}</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass-card rounded-2xl p-8 border border-white/5"
        >
          <h3 className="text-lg font-heading font-semibold text-white mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Leadership', 'Communication', 'Team Collaboration', 'Time Management', 'Multi-tasking'].map((s) => (
              <span
                key={s}
                className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
