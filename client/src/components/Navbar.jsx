import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar"
            style={{
                borderBottom: '1px solid var(--glass-border)',
                background: 'rgba(2, 2, 2, 0.8)',
                backdropFilter: 'blur(20px)',
                padding: '1rem 3rem'
            }}
        >
            <div className="logo" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
            }}>
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    boxShadow: '0 0 10px var(--accent-primary)'
                }} />
                NITHIN.SYS // CORE_V2
            </div>

            <div className="nav-links" style={{ gap: '3rem' }}>
                <a href="#home" className="nav-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>[ 00 // HOME ]</a>
                <a href="#about" className="nav-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>[ 01 // BIO ]</a>
                <a href="#work" className="nav-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>[ 02 // STACK ]</a>
                <a href="#contact" className="nav-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>[ 03 // LINK ]</a>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', opacity: 0.5 }}>
                    LOC: 11.0510° N, 76.0711° E
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
