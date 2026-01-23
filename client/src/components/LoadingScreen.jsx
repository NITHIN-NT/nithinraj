import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const logs = [
    "INITIALIZING_CORE_SYSTEMS...",
    "ESTABLISHING_SECURE_CONNECTION [76.0711° E]...",
    "LOADING_BACKEND_ARCHITECTURES...",
    "SYNCING_DISTRIBUTED_DATABASE...",
    "DECRYPTING_BIO_METRICS...",
    "OPTIMIZING_3D_VIEWPORT...",
    "SYSTEM_READY_V2.0.0"
];

const LoadingScreen = ({ onFinish }) => {
    const [currentLog, setCurrentLog] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const logInterval = setInterval(() => {
            setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
        }, 400);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 15;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onFinish, 800);
                    return 100;
                }
                return next;
            });
        }, 150);

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
                zIndex: 1000,
                background: '#020202',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#10b981',
                padding: '2rem'
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    marginBottom: '1rem',
                    height: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: 0.8
                }}>
                    {logs.slice(0, currentLog + 1).map((log, i) => (
                        <div key={i} style={{ marginBottom: '0.5rem' }}>
                            <span style={{ marginRight: '1rem' }}>{'>'}</span>
                            {log}
                        </div>
                    ))}
                </div>

                <div style={{ position: 'relative', width: '100%', height: '2px', background: 'rgba(16, 185, 129, 0.1)' }}>
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            background: '#10b981',
                            boxShadow: '0 0 15px #10b981'
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                <div style={{
                    marginTop: '1.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    letterSpacing: '0.2em'
                }}>
                    <span>BOOT_SEQUENCE</span>
                    <span>{Math.floor(progress)}%</span>
                </div>
            </div>

            {/* Scanning line effect */}
            <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'rgba(16, 185, 129, 0.05)',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)',
                    zIndex: 1
                }}
            />
        </motion.div>
    );
};

export default LoadingScreen;
