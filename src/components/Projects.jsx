import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Code2, Database, Shield, Calendar, CheckCircle2 } from 'lucide-react';

const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const techBadges = [
  { label: 'React.js', icon: Code2 },
  { label: 'Node.js', icon: Code2 },
  { label: 'Express.js', icon: Code2 },
  { label: 'MongoDB', icon: Database },
  { label: 'JWT Auth', icon: Shield },
];

const features = [
  'Full-stack healthcare web application',
  'JWT Authentication & Authorization',
  'Appointment booking system with CRUD',
  'Input validation & error handling',
  'Responsive modern UI',
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-purple-400 uppercase mb-2">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Projects</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.15)] h-full"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-xl shadow-purple-500/20">
                  <Calendar size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">MediConnect</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 font-medium">Featured</span>
                  </div>
                  <p className="text-gray-400 text-lg">Healthcare Appointment System</p>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-colors"
                >
                  <ExternalLink size={15} />
                  View Project
                </a>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techBadges.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs"
                  >
                    <Icon size={12} className="text-cyan-400" />
                    {label}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Glowing bottom bar */}
              <div className="mt-10 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-60" />
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
