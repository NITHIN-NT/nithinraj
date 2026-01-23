import React, { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';

const VFS = {
    "~": {
        type: "dir",
        content: {
            "projects": {
                type: "dir",
                content: {
                    "e-commerce_core": { type: "file", content: "High-performance distributed system reaching 10k+ users." },
                    "fintech_api": { type: "file", content: "Secure banking bridge with 99.99% uptime." },
                    "ml_pipeline": { type: "file", content: "Automated data processing engine for real-time analytics." }
                }
            },
            "contact": {
                type: "dir",
                content: {
                    "email.txt": { type: "file", content: "LINK_ESTABLISHED: nithinraj07sachu@gmail.com" },
                    "phone.txt": { type: "file", content: "LINE_SYNC: +91 7306663523" },
                    "github.sys": { type: "file", content: "SYSTEM_ID: github.com/NITHIN-NT" },
                    "linkedin.sys": { type: "file", content: "NETWORK_SYNC: linkedin.com/in/nithin-raj-003a55365" },
                    "instagram.sys": { type: "file", content: "SOCIAL_SYNC: instagram.com/nithnhh" }
                }
            },
            "readme.md": { type: "file", content: "AETHER_OS v2.1.0 // Simple, Light, Performant." }
        }
    }
};

const ALIASES = {
    about: "Growing Backend Architect specializing in high-performance digital infrastructures.",
    stack: "[Python, Django, FastAPI, PostgreSQL, Docker, MySQL]",
    status: "CURRENT: [AETHER_READY] [DESIGN_OPTIMIZED]",
};

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'AETHER_OS v2.1.0' }
    ]);
    const [path] = useState(["~"]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isWelcomePlayed, setIsWelcomePlayed] = useState(false);
    const scrollRef = useRef(null);
    const dragControls = useDragControls();

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [history]);

    useEffect(() => {
        if (isOpen && !isWelcomePlayed) {
            setIsWelcomePlayed(true);
            const runSequence = async () => {
                setHistory([]);

                const lines = [
                    "Initializing AETHER_SHELL...",
                    "Loading system modules...",
                    "> SYSTEM_READY",
                    "Type 'help' to see available commands."
                ];

                for (const line of lines) {
                    setHistory(prev => [...prev, { type: 'output', text: '' }]);

                    for (let i = 0; i <= line.length; i++) {
                        await new Promise(resolve => setTimeout(resolve, 30));
                        setHistory(prev => {
                            const next = [...prev];
                            next[next.length - 1] = { ...next[next.length - 1], text: line.substring(0, i) };
                            return next;
                        });
                    }
                    await new Promise(resolve => setTimeout(resolve, 150));
                }
            };
            runSequence();
        }
    }, [isOpen, isWelcomePlayed]);

    const processCommand = (cmdInput) => {
        const fullCommand = cmdInput.trim();
        if (!fullCommand) return;

        const [cmd] = fullCommand.toLowerCase().split(' ');

        setHistory(prev => {
            const newHistory = [...prev, { type: 'input', text: cmdInput, path: path.join('/') }];

            if (cmd === 'clear') {
                return [{ type: 'output', text: 'TERMINAL_CLEARED' }];
            }

            if (cmd === 'help') {
                return [
                    ...newHistory,
                    { type: 'output', text: "Available System Commands:" },
                    { type: 'output', text: "ls, cd, pwd, cat, clear, exit" },
                    { type: 'output', text: "Aliases: about, projects, contact, status" }
                ];
            } else if (ALIASES[cmd]) {
                return [...newHistory, { type: 'output', text: ALIASES[cmd] }];
            } else if (cmd === 'ls') {
                const current = path.reduce((acc, curr) => acc[curr].content, VFS);
                return [...newHistory, { type: 'output', text: Object.keys(current).join('    ') }];
            } else if (cmd === 'exit') {
                setIsOpen(false);
                return newHistory;
            } else {
                return [...newHistory, { type: 'output', text: `command not found: ${cmd}` }];
            }
        });
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            processCommand(input);
            setInput('');
        }
    };

    if (!isOpen) return (
        <motion.div
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: '#fff' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
                position: 'fixed', bottom: '2.5rem', right: '2.5rem', width: '60px', height: '60px',
                background: '#fff', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 9999, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)',
                color: 'var(--accent-primary)', transition: 'all 0.3s ease'
            }}
        >
            <span style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)' }}>&gt;_</span>
        </motion.div>
    );

    return (
        <motion.div
            drag dragControls={dragControls} dragListener={false} dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            style={{ position: 'fixed', bottom: '2.5rem', right: '2.5rem', width: '450px', zIndex: 9999 }}
        >
            <div className="glass" style={{
                background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', overflow: 'hidden', display: 'flex',
                flexDirection: 'column', height: '340px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
            }}>
                <div
                    onPointerDown={(e) => dragControls.start(e)}
                    style={{
                        background: 'rgba(59, 130, 246, 0.05)', padding: '0.8rem 1.2rem', borderBottom: '1px solid rgba(0,0,0,0.03)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'grab'
                    }}
                >
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                        <div onClick={() => setIsOpen(false)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', cursor: 'pointer', opacity: 0.8 }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', opacity: 0.8 }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', opacity: 0.8 }} />
                    </div>
                    <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 700 }}>AETHER_SHELL</span>
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        padding: '1.5rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem'
                    }}
                >
                    {history.map((line, i) => (
                        <div key={i} style={{ color: line.type === 'input' ? 'var(--text-primary)' : 'var(--accent-primary)', fontWeight: 500 }}>
                            {line.type === 'input' && <span style={{ opacity: 0.3, marginRight: '0.5rem' }}>$</span>}
                            {line.text}
                        </div>
                    ))}
                </div>

                <div style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>$</span>
                    <input
                        type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand}
                        autoFocus spellCheck="false"
                        style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: 'inherit', flex: 1 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Terminal;
