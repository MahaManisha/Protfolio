import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const FiverrIcon = ({ size = 24, className = "" }) => (
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

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1 uppercase tracking-wider">Email</p>
                <a href="mailto:mahamanisha2005@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">mahamanisha2005@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1 uppercase tracking-wider">Phone</p>
                <a href="tel:+919025425900" className="text-lg font-medium hover:text-secondary transition-colors">+91 9025425900</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1 uppercase tracking-wider">Location</p>
                <p className="text-lg font-medium">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                <FiverrIcon size={24} />
              </div>
              <div>
                <p className="text-sm text-muted mb-1 uppercase tracking-wider">Freelance</p>
                <a href="https://www.fiverr.com/s/P2KwBXA" target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-emerald-400 transition-colors">Hire me on Fiverr</a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Name</label>
                <input type="text" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Email</label>
                <input type="email" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea rows="4" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/25">
                Send Message <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
