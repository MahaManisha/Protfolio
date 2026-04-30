import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Manager",
      description: "A comprehensive backend-driven finance tracking system. Designed RESTful APIs and implemented secure authentication and category-based tracking to generate actionable financial summaries.",
      tech: ["Spring Boot", "MySQL", "REST APIs", "Postman"],
      featured: true,
      github: "#"
    },
    {
      title: "Campus Aggregator",
      description: "A centralized platform for campus announcements, events, and services. Features a responsive React UI, secure JWT authentication, and robust Node.js APIs.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      featured: true,
      github: "#"
    },
    {
      title: "DRIVEWISE - AI Driver Monitor",
      description: "Real-time AI system detecting unsafe driving behaviors using computer vision and audio analysis. Analyzes webcam/microphone feeds to generate immediate risk alerts.",
      tech: ["Python", "OpenCV", "Machine Learning"],
      featured: false,
      github: "#"
    },
    {
      title: "Flask Expense Tracker",
      description: "Web application for personal expense tracking with CRUD operations and an interactive dashboard for financial analysis.",
      tech: ["Flask", "Python", "SQLite", "HTML/CSS"],
      featured: false,
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-muted max-w-xl text-lg">
              Real-world solutions built to solve complex problems. Highlighting my journey from concept to deployment.
            </p>
          </div>
          <a href="https://github.com/MahaManisha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-white transition-colors pb-2">
            View full archive <ExternalLink size={18} />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-2xl flex flex-col h-full group ${project.featured ? 'border-primary/20' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  {project.featured && (
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Featured Project</span>
                  )}
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white p-2">
                  <Code size={24} />
                </a>
              </div>
              
              <p className="text-muted flex-1 text-base leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-surface border border-white/5 rounded-full text-xs font-mono text-text/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
