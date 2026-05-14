import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-heading font-bold text-xl">
          Piyush<span className="text-white">.dev</span>
        </p>

        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          Built with <Heart size={13} className="text-pink-500 fill-pink-500" /> by Piyush Kumar Jha &copy; {year}
        </p>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/piyushkumarjhaorpkj" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="mailto:piyushjha614@gmail.com" className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
