import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield, Cloud, Database, CheckCircle, ExternalLink } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "National Engineering College, Kovilpatti",
      period: "2023 - 2027",
      score: "CGPA: 8.36"
    },
    {
      degree: "HSC (Maths and Computer Science)",
      institution: "St Ann's Matric Higher Secondary School, Panagudi",
      period: "2021 - 2023",
      score: "Score: 87%"
    }
  ];

  const certificationGroups = [
    {
      category: "Honors & Achievements",
      icon: <Award size={20} className="text-yellow-400" />,
      items: [
        { 
          name: "NPTEL Discipline Star", 
          issuer: "NPTEL", 
          year: "2025", 
          featured: true,
          link: "https://drive.google.com/file/d/1your-discipline-star-id/view?usp=sharing"
        },
        { 
          name: "Technical English for Engineers", 
          issuer: "NPTEL", 
          year: "2024", 
          featured: false,
          link: "https://drive.google.com/file/d/1your-technical-english-id/view?usp=sharing"
        }
      ]
    },
    {
      category: "Security & Cryptography",
      icon: <Shield size={20} className="text-primary" />,
      items: [
        { name: "Cryptography", issuer: "Infosys", year: "2025", featured: true },
        { 
          name: "Privacy & Security in Online Social Media", 
          issuer: "NPTEL", 
          year: "2025", 
          featured: false,
          link: "https://drive.google.com/file/d/1your-privacy-security-id/view?usp=sharing"
        }
      ]
    },
    {
      category: "Cloud & IoT",
      icon: <Cloud size={20} className="text-secondary" />,
      items: [
        { 
          name: "Cloud Computing", 
          issuer: "NPTEL", 
          year: "2024", 
          featured: false,
          link: "https://drive.google.com/file/d/1your-cloud-computing-id/view?usp=sharing"
        },
        { 
          name: "Introduction to IoT", 
          issuer: "NPTEL", 
          year: "2024", 
          featured: false,
          link: "https://drive.google.com/file/d/1your-iot-id/view?usp=sharing"
        },
        { 
          name: "Industrial IoT", 
          issuer: "NPTEL", 
          year: "2024", 
          featured: false,
          link: "https://drive.google.com/file/d/1your-iiot-id/view?usp=sharing"
        }
      ]
    },
    {
      category: "Databases & Programming",
      icon: <Database size={20} className="text-blue-400" />,
      items: [
        { name: "MongoDB Certification", issuer: "MongoDB", year: "2024", featured: true },
        { 
          name: "The Joy of Computing using Python", 
          issuer: "NPTEL", 
          year: "2023", 
          featured: false,
          link: "https://drive.google.com/file/d/1your-joy-of-computing-id/view?usp=sharing"
        },
        { name: "Troubleshooting", issuer: "Cisco Networking Academy", year: "2024", featured: false }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {education.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 50 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10"
                >
                  <span className="text-secondary font-mono text-sm block mb-2">{item.period}</span>
                  <h3 className="font-bold text-xl md:text-2xl mb-1 text-white">{item.degree}</h3>
                  <p className="text-muted text-sm mb-5">{item.institution}</p>
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                    <span className="text-sm font-bold text-primary tracking-wide">{item.score}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Verified</span>
            </div>
          </div>

          <div className="space-y-6">
            {certificationGroups.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-lg bg-surface border border-white/10">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.category}</h3>
                </div>
                
                <div className="grid gap-3">
                  {group.items.map((cert, i) => (
                    <div 
                      key={i} 
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        cert.featured 
                        ? 'bg-primary/5 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 shadow-[0_0_15px_rgba(139,92,246,0.05)]' 
                        : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex flex-col mb-2 sm:mb-0">
                        <span className="font-semibold text-white/95 text-lg">{cert.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted">{cert.issuer}</span>
                          {cert.link && (
                            <>
                              <span className="text-muted/40 text-xs">•</span>
                              <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center gap-1 text-xs text-primary hover:text-white transition-colors hover:underline group/link"
                              >
                                View Certificate <ExternalLink size={12} className="inline group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="inline-flex self-start sm:self-auto text-xs font-mono px-2.5 py-1 bg-surface rounded-md text-muted border border-white/10">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
