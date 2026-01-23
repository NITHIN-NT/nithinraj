import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/white" },
    { name: "Django", logo: "https://cdn.simpleicons.org/django/white" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/05998B" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/336791" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
    { name: "Cloudinary", logo: "https://cdn.simpleicons.org/cloudinary/3448C5" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" }
];

const TechStack = () => {
    return (
        <section id="work" style={{ background: 'var(--bg-secondary)', overflow: 'hidden', padding: '6rem 0' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 3rem' }}>
                <h2 className="section-title">Technical Mastery</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    My core technology stack and tools I use to build world-class applications.
                </p>
            </div>

            <div className="marquee">
                <motion.div
                    className="marquee-content"
                    animate={{ x: [0, -1500] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <div key={i} className="tech-item">
                            <img src={tech.logo} alt={tech.name} className="tech-logo" />
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
