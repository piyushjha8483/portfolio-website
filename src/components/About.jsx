import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Cpu } from 'lucide-react';

const stats = [
  { label: 'Technologies', value: '15+', icon: Cpu },
  { label: 'Projects Built', value: '5+', icon: Code2 },
  { label: 'CGPA', value: '6.86', icon: GraduationCap },
  { label: 'Location', value: 'Jaipur', icon: MapPin },
];

const About = () => {
  return (
    <section id="about" style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blob */}
      <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>

          {/* Left: Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ position: 'relative' }}>
              {/* Glow border behind */}
              <div style={{ position: 'absolute', inset: '-2px', background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(168,85,247,0.3))', borderRadius: '20px', zIndex: 0 }} />
              <div className="glass-card" style={{ position: 'relative', zIndex: 1, borderRadius: '18px', padding: '36px' }}>
                {/* Avatar */}
                <div style={{
                  width: '72px', height: '72px', borderRadius: '20px',
                  background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', fontFamily: 'Outfit', fontWeight: 800, color: '#fff',
                  marginBottom: '24px', boxShadow: '0 8px 30px rgba(6,182,212,0.3)',
                }}>
                  PK
                </div>

                <h3 style={{ fontSize: '1.4rem', fontFamily: 'Outfit', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Piyush Kumar Jha</h3>
                <p style={{ color: '#22d3ee', fontWeight: 600, marginBottom: '20px', fontSize: '0.9rem' }}>Aspiring Full Stack Developer</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { dot: '#22d3ee', text: '📍 Jaipur, Rajasthan, India' },
                    { dot: '#3b82f6', text: '🎓 B.Tech CSE – Amity University Rajasthan' },
                    { dot: '#a855f7', text: '📧 piyushjha614@gmail.com' },
                    { dot: '#f59e0b', text: '📱 +91 9636739142' },
                  ].map(({ dot, text }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9ca3af', fontSize: '0.875rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dot, flexShrink: 0 }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '16px' }}>
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="glass-card" style={{ borderRadius: '14px', padding: '18px', textAlign: 'center' }}>
                  <Icon size={18} color="#22d3ee" style={{ margin: '0 auto 8px' }} />
                  <p style={{ fontSize: '1.3rem', fontFamily: 'Outfit', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{value}</p>
                  <p style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22d3ee', marginBottom: '12px' }}>About Me</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontFamily: 'Outfit', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px' }}>
              Building the web,{' '}
              <span style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                one component at a time
              </span>
            </h2>

            <p style={{ color: '#9ca3af', lineHeight: 1.9, marginBottom: '20px', fontSize: '1rem' }}>
              I'm a Computer Science undergraduate at Amity University Rajasthan with hands-on experience in full-stack web development. I love transforming ideas into polished, production-ready web applications.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.9, marginBottom: '32px', fontSize: '1rem' }}>
              My stack spans React.js frontends with smooth animations, Node.js/Express.js backends, and MongoDB databases. I'm driven by clean code principles, scalability, and delivering real user value.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {[
                { title: 'Full Stack Dev', sub: 'React · Node · MongoDB', color: '#22d3ee' },
                { title: 'DSA & OOP', sub: 'Java · C++ · Problem Solving', color: '#a855f7' },
                { title: 'REST APIs', sub: 'Express.js · JWT · CRUD', color: '#3b82f6' },
                { title: 'Team Player', sub: 'Leadership · Collaboration', color: '#f59e0b' },
              ].map(({ title, sub, color }) => (
                <div key={title} style={{ borderLeft: `2px solid ${color}`, paddingLeft: '14px' }}>
                  <p style={{ fontFamily: 'Outfit', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{title}</p>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
