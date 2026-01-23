import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const logs = [
    "WAKING_CORE_AETHER...",
    "CALIBRATING_OPTICS...",
    "POLISHING_GEOMETRIES...",
    "ESTABLISHING_LUCID_STREAM...",
    "READY"
];

const LoadingScreen = ({ onFinish }) => {
    const [currentLog, setCurrentLog] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const logInterval = setInterval(() => {
            setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
        }, 300);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 20;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onFinish, 600);
                    return 100;
                }
                return next;
            });
        }, 100);

        return () => {
            clearInterval(logInterval);
            clearInterval(progressInterval);
        };
    }, [onFinish]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2000,
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        marginBottom: '3rem',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Nithin NT<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </motion.div>

                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem',
                    height: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em'
                }}>
                    {logs[currentLog]}
                </div>

                <div style={{ position: 'relative', width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            background: 'var(--accent-primary)',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                    {Math.floor(progress)}%
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
