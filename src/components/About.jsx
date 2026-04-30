import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
          <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <div className="mb-8">
              <h3 className="text-4xl font-extrabold mb-2 text-white">About <span className="text-gradient">Me</span></h3>
              <p className="text-sm font-medium text-muted uppercase tracking-widest">My journey as a developer</p>
            </div>
            <p className="text-muted text-lg leading-relaxed mb-6">
              I am a Computer Science and Engineering student at National Engineering College. I focus on building reliable, full-stack applications using MERN and Spring Boot.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              My work spans from backend financial APIs and campus platforms to AI-driven driver monitoring. I write clean code to solve real problems, without overcomplicating the solution.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">8.36</h4>
                <p className="text-sm text-muted uppercase tracking-wider font-medium">CGPA</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">4+</h4>
                <p className="text-sm text-muted uppercase tracking-wider font-medium">Core Projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Beyond <span className="text-gradient">The Code</span></h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <span className="text-primary font-bold">01</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">IE Club Member</h4>
                <p className="text-muted">I actively participate in the IE Club, engaging in technical discussions and collaborating with peers on campus initiatives.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                <span className="text-secondary font-bold">02</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Certified in Cloud & IoT</h4>
                <p className="text-muted">I continuously expand my technical depth with formal certifications in Cloud Computing, IoT 4.0 (NPTEL), and Cryptography (Infosys).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <span className="text-blue-400 font-bold">03</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Practical Builder</h4>
                <p className="text-muted">I prefer learning by doing. Instead of just reading documentation, I build projects like Campus Aggregators and AI monitors to test my knowledge in real scenarios.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
