import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleResize = () => setIsMobile(window.innerWidth < 1000);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = ['home', 'projects', 'about', 'stats', 'contact'];

    return (
        <>
            <motion.nav
                initial={{ y: -20, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                style={{
                    position: 'fixed',
                    top: scrolled ? '1.5rem' : '0',
                    left: '50%',
                    width: scrolled || isMobile ? '92%' : '100%',
                    maxWidth: '1200px',
                    zIndex: 100,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    padding: isMobile ? '0.8rem 1.5rem' : '1.2rem 2.5rem',
                    borderRadius: scrolled || isMobile ? '20px' : '0',
                    background: scrolled || isMobile ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                    backdropFilter: 'blur(20px)',
                    border: scrolled || isMobile ? '1px solid rgba(255, 255, 255, 0.5)' : 'none',
                    boxShadow: scrolled || isMobile ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pointerEvents: 'auto'
                }}
            >
                <div style={{
                    fontSize: isMobile ? '0.95rem' : '1.1rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em'
                }}>
                    NITHIN NT<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </div>

                {!isMobile ? (
                    <div className="nav-links" style={{ gap: 'clamp(1rem, 3vw, 2.5rem)', display: 'flex', flexWrap: 'nowrap' }}>
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="nav-link"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--text-secondary)',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                ) : (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px'
                        }}
                    >
                        <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} style={{ width: '20px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px' }} />
                        <motion.div animate={{ opacity: isOpen ? 0 : 1 }} style={{ width: '20px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px' }} />
                        <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} style={{ width: '20px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px' }} />
                    </button>
                )}

                <div className="nav-env-tag" style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    opacity: 0.4,
                    letterSpacing: '0.1em',
                    display: isMobile ? 'none' : 'block'
                }}>
                    V2.AETHER_ENV
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                            position: 'fixed',
                            top: '4.5rem',
                            left: '4%',
                            right: '4%',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            padding: '2rem',
                            zIndex: 99,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(255,255,255,0.5)'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--text-primary)',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
