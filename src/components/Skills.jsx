import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-secondary" size={24} />,
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Backend & Databases",
      icon: <Server className="text-primary" size={24} />,
      skills: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["C++", "Java"]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-pink-400" size={24} />,
      skills: ["Git", "GitHub", "Docker", "Jenkins", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted max-w-2xl text-lg">
            A comprehensive toolkit that enables me to build robust, scalable, and visually stunning applications from end to end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
