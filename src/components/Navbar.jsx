import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        ...(scrolled
          ? { background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px', paddingBottom: '12px' }
          : { background: 'transparent', paddingTop: '20px', paddingBottom: '20px' }),
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textDecoration: 'none', fontSize: '1.3rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
        >
          <span style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Piyush
          </span>
          <span style={{ color: '#fff' }}>.dev</span>
        </motion.a>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.2 }}
              style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#22d3ee'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: '100%', left: '16px', right: '16px',
              background: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
              padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px',
              alignItems: 'center',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
