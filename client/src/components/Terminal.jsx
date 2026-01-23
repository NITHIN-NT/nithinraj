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
                    "email.txt": { type: "file", content: "LINK_ESTABLISHED: nithin@example.com" },
                    "github.sys": { type: "file", content: "SYSTEM_ID: NITHIN-NT" },
                    "linkedin.sys": { type: "file", content: "NETWORK_SYNC: linkedin.com/in/nithin-nt" }
                }
            },
            "bio.txt": { type: "file", content: "I am Nithin NT, a Senior Backend Architect specializing in high-performance digital infrastructures." },
            "stack.txt": { type: "file", content: "TECH_STACK: [Python, Django, FastAPI, PostgreSQL, Docker, AWS, React]" },
            "readme.md": { type: "file", content: "Welcome to NITHIN_OS v2.0.0. Use 'ls' to explore, 'cd' to navigate, and 'cat' to read files." }
        }
    }
};

const ALIASES = {
    about: "I am Nithin NT, a Senior Backend Architect specializing in high-performance digital infrastructures. I build resilient, scalable, and secure system architectures.",
    stack: "CURRENT_STACK: [Python, Django, React, FastAPI, PostgreSQL, Docker, AWS]",
    contact: "LINK_ESTABLISHED: [nithin@example.com] [GitHub: NITHIN-NT]",
    location: "LOC_DATA: 11.0510° N, 76.0711° E // South India",
    status: "SYSTEM_STATUS: [OPTIMIZED] [CORE_V2_ACTIVE]",
};

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'NITHIN_OS v2.0.0 // KERNEL_LOADED' },
        { type: 'output', text: 'Type "help" for interactive manual or use shortcut commands (about, stack, etc.)' }
    ]);
    const [path, setPath] = useState(["~"]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const scrollRef = useRef(null);
    const dragControls = useDragControls();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const getCurrentDir = (currentPath) => {
        let current = VFS;
        for (const segment of currentPath) {
            if (current[segment] && current[segment].type === 'dir') {
                current = current[segment].content;
            } else {
                return null;
            }
        }
        return current;
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const fullCommand = input.trim();
            const [cmd, ...args] = fullCommand.toLowerCase().split(' ');
            const newHistory = [...history, { type: 'input', text: input, path: path.join('/') }];

            if (cmd === 'clear') {
                setHistory([{ type: 'output', text: 'TERMINAL_CLEARED' }]);
            } else if (cmd === 'help') {
                newHistory.push({ type: 'output', text: "SYSTEM_COMMANDS: [ls, cd, pwd, cat, help, clear, exit]" });
                newHistory.push({ type: 'output', text: "BIO_SHORTCUTS: [about, stack, contact, location, status]" });
                setHistory(newHistory);
            } else if (ALIASES[cmd]) {
                newHistory.push({ type: 'output', text: ALIASES[cmd] });
                setHistory(newHistory);
            } else if (cmd === 'pwd') {
                newHistory.push({ type: 'output', text: '/' + path.join('/') });
                setHistory(newHistory);
            } else if (cmd === 'ls') {
                const currentDir = getCurrentDir(path);
                const items = Object.keys(currentDir).map(name => {
                    const isDir = currentDir[name].type === 'dir';
                    return isDir ? `${name}/` : name;
                });
                newHistory.push({ type: 'output', text: items.join('    ') });
                setHistory(newHistory);
            } else if (cmd === 'cd') {
                const target = args[0];
                if (!target || target === '~') {
                    setPath(["~"]);
                } else if (target === '..') {
                    if (path.length > 1) {
                        setPath(path.slice(0, -1));
                    }
                } else {
                    const currentDir = getCurrentDir(path);
                    if (currentDir[target] && currentDir[target].type === 'dir') {
                        setPath([...path, target]);
                    } else {
                        newHistory.push({ type: 'output', text: `cd: no such directory: ${target}` });
                    }
                }
                setHistory(newHistory);
            } else if (cmd === 'cat') {
                const target = args[0];
                if (!target) {
                    newHistory.push({ type: 'output', text: "cat: missing operand" });
                } else {
                    const currentDir = getCurrentDir(path);
                    if (currentDir[target] && currentDir[target].type === 'file') {
                        newHistory.push({ type: 'output', text: currentDir[target].content });
                    } else if (currentDir[target] && currentDir[target].type === 'dir') {
                        newHistory.push({ type: 'output', text: `cat: ${target}: Is a directory` });
                    } else {
                        newHistory.push({ type: 'output', text: `cat: ${target}: No such file` });
                    }
                }
                setHistory(newHistory);
            } else if (cmd === 'exit') {
                setIsOpen(false);
            } else if (cmd !== '') {
                newHistory.push({ type: 'output', text: `command not found: ${cmd}. Type "help" for options.` });
                setHistory(newHistory);
            } else {
                setHistory(newHistory);
            }
            setInput('');
        }
    };

    if (!isOpen) return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsOpen(true)}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '50px',
                height: '50px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 9999,
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
            }}
        >
            <span style={{ color: '#000', fontSize: '1.2rem', fontWeight: 'bold' }}>&gt;_</span>
        </motion.div>
    );

    return (
        <motion.div
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '500px',
                zIndex: 9999,
            }}
        >
            <div className="glass" style={{
                background: 'rgba(2, 2, 2, 0.95)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '380px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                backdropFilter: 'blur(20px)'
            }}>
                {/* Terminal Header */}
                <div
                    onPointerDown={(e) => dragControls.start(e)}
                    style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        padding: '0.7rem 1rem',
                        borderBottom: '1px solid var(--glass-border)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'grab'
                    }}
                >
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div onClick={() => setIsOpen(false)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', cursor: 'pointer' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <span style={{ fontSize: '0.6rem', opacity: 0.6, letterSpacing: '0.15em', fontWeight: 'bold' }}>NITHIN_OS // HYBRID_SHELL</span>
                </div>

                {/* Terminal Body */}
                <div
                    ref={scrollRef}
                    style={{
                        padding: '1.2rem',
                        flex: 1,
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.4rem',
                        background: 'rgba(0,0,0,0.3)'
                    }}
                >
                    {history.map((line, i) => (
                        <div key={i} style={{ lineHeight: 1.5 }}>
                            {line.type === 'input' ? (
                                <div>
                                    <span style={{ color: 'var(--accent-primary)', opacity: 0.5 }}>[{line.path}]</span>
                                    <span style={{ color: 'var(--accent-primary)', margin: '0 0.5rem' }}>$</span>
                                    <span style={{ color: '#fff' }}>{line.text}</span>
                                </div>
                            ) : (
                                <div style={{ color: 'var(--accent-primary)' }}>{line.text}</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Terminal Input */}
                <div style={{ padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid rgba(16, 185, 129, 0.1)' }}>
                    <span style={{ color: 'var(--accent-primary)', opacity: 0.5 }}>[{path.join('/')}]</span>
                    <span style={{ color: 'var(--accent-primary)' }}>$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        autoFocus
                        spellCheck="false"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: '#fff',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            flex: 1
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Terminal;
