import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Code2 } from 'lucide-react';

const certs = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
    border: 'hover:border-cyan-500/30',
    desc: 'Comprehensive program covering threat detection, network security, and SIEM tools.',
  },
  {
    title: 'Web Development Internship Certificate',
    issuer: 'InternPe',
    icon: Code2,
    color: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]',
    border: 'hover:border-violet-500/30',
    desc: 'Awarded for successfully completing the Web Development internship program.',
  },
  {
    title: 'Cyber Security Internship Certificate',
    issuer: 'CodeAlpha',
    icon: Award,
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]',
    border: 'hover:border-fuchsia-500/30',
    desc: 'Recognized for completing cybersecurity tasks and practical assignments.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-fuchsia-400 uppercase mb-2">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Certifications</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className={`glass-card rounded-2xl p-7 border border-white/5 transition-all duration-300 ${cert.glow} ${cert.border} group cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} mb-5 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{cert.issuer}</p>
                <h3 className="text-base font-heading font-bold text-white mb-3 leading-snug">{cert.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
