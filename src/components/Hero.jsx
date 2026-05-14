import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Torus } from '@react-three/drei';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

/* ── 3D Floating Ring ─────────────────────────────────── */
const FloatingRing = () => {
  const ringRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ringRef.current.rotation.x = t * 0.3;
    ringRef.current.rotation.y = t * 0.5;
    ringRef.current.position.y = Math.sin(t * 0.7) * 0.3;
  });
  return (
    <Torus ref={ringRef} args={[1.4, 0.05, 16, 100]}>
      <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.8} />
    </Torus>
  );
};

const FloatingRing2 = () => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * -0.2;
    ref.current.rotation.z = t * 0.4;
    ref.current.position.y = Math.cos(t * 0.6) * 0.2;
  });
  return (
    <Torus ref={ref} args={[2.0, 0.03, 16, 100]}>
      <meshStandardMaterial color="#a855f7" emissive="#7c3aed" emissiveIntensity={0.6} />
    </Torus>
  );
};

/* ── Typing animation ─────────────────────────────────── */
const roles = ['Full Stack Developer', 'React.js Enthusiast', 'Java Developer', 'Problem Solver'];

const useTyping = (words) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => i + 1);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
};

/* ── Hero ─────────────────────────────────────────────── */
const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const typed = useTyping(roles);

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', overflow: 'hidden' }}>

      {/* 3D Canvas Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.7 }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={1} />
          <group position={[3.5, 0, -1]}>
            <FloatingRing />
            <FloatingRing2 />
          </group>
        </Canvas>
      </div>

      {/* Gradient blobs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ maxWidth: '700px' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '999px',
              border: '1px solid rgba(6,182,212,0.35)',
              background: 'rgba(6,182,212,0.08)',
              color: '#22d3ee', fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.08em', marginBottom: '24px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee', animation: 'pulse 2s infinite' }} />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              lineHeight: 1.1, marginBottom: '16px',
            }}
          >
            Hi, I'm{' '}
            <span style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Piyush Kumar Jha
            </span>
          </motion.h1>

          {/* Typed role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#9ca3af', marginBottom: '20px', minHeight: '2rem', fontWeight: 400 }}
          >
            <span style={{ color: '#22d3ee', fontWeight: 600 }}>{typed}</span>
            <span style={{ animation: 'blink 1s step-end infinite', color: '#22d3ee' }}>|</span>
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px' }}
          >
            CS undergraduate building scalable full-stack web apps with React.js, Node.js, and MongoDB. Passionate about clean code and real-world problem solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            <a
              href="#projects"
              style={{
                padding: '12px 32px', borderRadius: '999px',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                color: '#fff', fontWeight: 600, textDecoration: 'none',
                fontSize: '0.9rem', transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => e.target.style.boxShadow = '0 0 30px rgba(6,182,212,0.45)'}
              onMouseLeave={e => e.target.style.boxShadow = 'none'}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                padding: '12px 32px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#d1d5db', fontWeight: 600, textDecoration: 'none',
                fontSize: '0.9rem', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(6,182,212,0.5)'; e.target.style.color = '#fff'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.color = '#d1d5db'; }}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '12px' }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/piyushkumarjhaorpkj', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:piyushjha614@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#9ca3af', textDecoration: 'none', transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#22d3ee'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.background = 'rgba(6,182,212,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', opacity, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10 }}
      >
        <span style={{ fontSize: '0.7rem', color: '#4b5563', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} color="#22d3ee" />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1) } 50% { opacity: 0.5; transform: scale(1.3) } }
      `}</style>
    </section>
  );
};

export default Hero;
