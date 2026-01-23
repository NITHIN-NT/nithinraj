import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "nithinraj",
        description: "A high-performance personal portfolio website using Three.js and Framer Motion.",
        tech: ["React", "Three.js", "Framer Motion", "CSS"],
        link: "https://github.com/NITHIN-NT/nithinraj"
    },
    {
        name: "EvalCORE",
        description: "Comprehensive online examination and registration system with robust account management.",
        tech: ["Python", "Django", "HTML", "JavaScript"],
        link: "https://github.com/NITHIN-NT/EvalCORE"
    },
    {
        name: "SecondStrap",
        description: "Web application project featuring extreme backend optimization for product tracking.",
        tech: ["Python", "Django", "PostgreSQL", "JavaScript"],
        link: "https://github.com/NITHIN-NT/SecondStrap"
    },
    {
        name: "CodeCheck",
        description: "Automated code review platform designed to streamline developer feedback loops.",
        tech: ["Python", "Django", "Vercel", "API"],
        link: "https://github.com/NITHIN-NT/CodeCheck"
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ background: '#ffffff', padding: '8rem 3rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                        Production // Repositories
                    </div>
                    <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Featured Logic</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 350px), 1fr))',
                    gap: 'clamp(2rem, 5vw, 4rem)'
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem'
                            }}
                        >
                            <div className="glass" style={{
                                width: '100%',
                                aspectRatio: '16/9',
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', opacity: 0.1 }}>
                                    {project.name.toUpperCase()}
                                </span>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1.5rem',
                                    left: '1.5rem',
                                    display: 'flex',
                                    gap: '0.5rem'
                                }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            fontSize: '0.6rem',
                                            fontWeight: 700,
                                            padding: '0.3rem 0.8rem',
                                            background: '#fff',
                                            borderRadius: '100px',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '0 1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '2rem' }}>
                                    {project.description}
                                </p>
                                <motion.a
                                    whileHover={{ color: 'var(--accent-primary)' }}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '0.85rem',
                                        fontWeight: 800,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    }}
                                >
                                    View Source // &rarr;
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
