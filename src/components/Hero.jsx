import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile Profile Image (Hidden on Desktop) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="lg:hidden w-24 h-24 mb-6 rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-primary/20"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background bg-surface">
              <img src="/profile.jpg" alt="Maha Manisha M" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-medium text-muted uppercase tracking-wider">Full Stack Developer | MERN & Spring Boot</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Building <span className="text-gradient">scalable web applications</span> and solving real-world problems with clean code.
          </h1>
          
          <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
            Hi, I'm <strong className="text-white font-medium">Maha Manisha M</strong>, a Computer Science Engineering student passionate about developing impactful digital solutions using modern technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-primary text-white font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download className="px-6 py-3 rounded-full bg-surface border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/5 transition-colors">
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <p className="text-sm font-medium text-muted uppercase tracking-widest">Connect</p>
            <div className="h-px w-12 bg-white/10"></div>
            <a href="https://github.com/MahaManisha" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
              <Code size={22} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-muted hover:text-secondary transition-colors">
              <Network size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Decorative geometric shapes for a techy premium feel */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Desktop Profile Image - Overlapping the top-left of the card */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-10 -left-10 z-20 w-36 h-36 rounded-full p-[3px] bg-gradient-to-tr from-primary to-secondary shadow-2xl shadow-primary/30"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-surface">
                <img src="/profile.jpg" alt="Maha Manisha M" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <div className="absolute inset-4 glass-card rounded-2xl flex flex-col justify-between p-8 border-t border-l border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">&lt;/&gt;</span>
                </div>
                <span className="text-xs font-mono text-muted">v2.0.27</span>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight mb-1 text-white">Computer Science <br/>& Engineering</h3>
                <p className="text-sm text-muted mb-5">National Engineering College</p>
                
                <div className="inline-block px-3 py-1.5 rounded-md bg-secondary/10 border border-secondary/20 mb-5">
                  <span className="text-xs font-bold text-secondary tracking-wider">CGPA: 8.36</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-primary font-mono hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default">React</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-green-400 font-mono hover:bg-green-400/20 hover:border-green-400/30 transition-all cursor-default">Node.js</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-blue-400 font-mono hover:bg-blue-400/20 hover:border-blue-400/30 transition-all cursor-default">Python</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-orange-400 font-mono hover:bg-orange-400/20 hover:border-orange-400/30 transition-all cursor-default">MySQL</span>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.6 },
                scale: { duration: 0.5, delay: 0.6 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 } 
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-8 -right-8 glass-card p-5 rounded-2xl shadow-2xl border border-primary/20 group cursor-default"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-2xl blur-lg -z-10"></div>
              <div className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-300">Full Stack Developer</div>
              <div className="text-xs text-muted font-medium mt-1">MERN & Spring Boot</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
