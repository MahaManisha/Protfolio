import React from 'react';
import { Code, Network, ArrowUp } from 'lucide-react';

const FiverrIcon = ({ size = 20, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M19.062 10.428h-3.52v-1.87c0-.781.587-.936 1.055-.936h2.41V4.5h-3.21c-2.84 0-3.951 1.791-3.951 3.738v2.19H10.03v3.15h1.816v10.422h4.18V13.578h3.513l.477-3.15zM21 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>
);

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
          <a href="https://github.com/MahaManisha" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-muted hover:text-primary transition-colors border border-white/10" title="GitHub">
            <Code size={20} />
          </a>
          <a href="https://www.fiverr.com/s/P2KwBXA" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center text-muted hover:text-emerald-400 transition-colors border border-white/10" title="Fiverr">
            <FiverrIcon size={20} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary/20 flex items-center justify-center text-muted hover:text-secondary transition-colors border border-white/10" title="Network">
            <Network size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
