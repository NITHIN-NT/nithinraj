import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1", category: "Database" },
    { name: "Django", logo: "https://cdn.simpleicons.org/django/092e20", category: "Engine" },
    { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/05998b", category: "API" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169e1", category: "Architecture" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ed", category: "Container" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776ab", category: "Logic" }
];

const TechStack = () => {
    return (
        <section id="work" style={{ background: '#f8fafc', padding: '8rem 3rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                        Stack & Standards
                    </div>
                    <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Core Technicalities</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 25vw, 280px), 1fr))',
                    gap: '2.5rem'
                }}>
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                            style={{
                                background: '#ffffff',
                                padding: '2.5rem',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                border: '1px solid rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#f1f5f9',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img src={tech.logo} alt={tech.name} style={{ width: '28px', height: '28px' }} />
                                </div>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                                    {tech.category}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{tech.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
