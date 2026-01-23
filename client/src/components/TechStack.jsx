import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/10b981", category: "Cloud" },
    { name: "Django", logo: "https://cdn.simpleicons.org/django/10b981", category: "Backend" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/10b981", category: "Frontend" },
    { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/10b981", category: "Backend" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/10b981", category: "Database" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/10b981", category: "DevOps" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/10b981", category: "Tools" },
    { name: "Cloudinary", logo: "https://cdn.simpleicons.org/cloudinary/10b981", category: "Media" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/10b981", category: "Language" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/10b981", category: "Language" },
    { name: "Three.js", logo: "https://cdn.simpleicons.org/threedotjs/10b981", category: "Graphics" },
    { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/10b981", category: "Design" }
];

const TechStack = () => {
    return (
        <section id="work" style={{ background: 'var(--bg-primary)', padding: '10rem 3rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>
                        [ 01 // STACK_CORE ]
                    </div>
                    <h2 className="section-title" style={{ textAlign: 'left', margin: 0, textTransform: 'uppercase' }}>Technical Arsenal</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1px',
                    background: 'var(--glass-border)',
                    border: '1px solid var(--glass-border)'
                }}>
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ background: 'rgba(16, 185, 129, 0.05)' }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <img src={tech.logo} alt={tech.name} style={{ width: '40px', height: '40px' }} />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-primary)', opacity: 0.6 }}>
                                    {tech.category}
                                </span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{tech.name}</h3>
                                <div style={{
                                    width: '20px',
                                    height: '2px',
                                    background: 'var(--accent-primary)',
                                    marginTop: '0.5rem',
                                    transition: 'width 0.3s ease'
                                }} className="tech-bar" />
                            </div>

                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                right: '-10px',
                                bottom: '-10px',
                                fontSize: '4rem',
                                fontWeight: 900,
                                opacity: 0.03,
                                userSelect: 'none'
                            }}>
                                {i + 1 < 10 ? `0${i + 1}` : i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
