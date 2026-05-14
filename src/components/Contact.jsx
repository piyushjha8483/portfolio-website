import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'piyushjha614@gmail.com',
    href: 'mailto:piyushjha614@gmail.com',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9636739142',
    href: 'tel:+919636739142',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
    href: null,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'piyush-kumar-jha',
    href: 'https://www.linkedin.com/in/piyush-kumar-jha-66554633',
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Open to internship opportunities, collaborations, and interesting conversations. Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className={`flex items-center gap-4 p-5 rounded-2xl glass-card border transition-all duration-300 hover:-translate-y-1 ${info.color}`}>
                  <div className={`p-3 rounded-xl border ${info.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{info.label}</p>
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col gap-5"
          >
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest mb-2 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
