import React from 'react';
import { Code, Network, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-surface/30 pt-16 pb-8 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-heading font-bold text-gradient tracking-wider block mb-2">
            MAHA<span className="text-text">.dev</span>
          </a>
          <p className="text-muted text-sm">© {new Date().getFullYear()} Maha Manisha M. All rights reserved.</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted hover:text-white transition-colors border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        <div className="flex items-center gap-4">
          <a href="https://github.com/MahaManisha" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-muted hover:text-primary transition-colors border border-white/10">
            <Code size={20} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary/20 flex items-center justify-center text-muted hover:text-secondary transition-colors border border-white/10">
            <Network size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
