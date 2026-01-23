import React from 'react';
import { motion } from 'framer-motion';

const CodingStats = () => {
    const stats = {
        total: 55,
        easy: 55,
        medium: 0,
        hard: 0,
        submissions: 158,
        activeDays: 41,
        maxStreak: 3,
        rank: "2.1M+",
        platform: "LeetCode",
        username: "Nithnhh"
    };

    return (
        <section id="stats" style={{ background: '#f8fafc', padding: '8rem 3rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: 'clamp(3rem, 10vw, 6rem)',
                    alignItems: 'center'
                }}>

                    <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                            Algorithmic // Efficiency
                        </div>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Core Intelligence</h2>
                        <p style={{ marginTop: '2.5rem', color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                            Scaling technical depth through consistent problem-solving. Currently focusing on mastering advanced Data Structures with over <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>150+ submissions</span> and a growing streak.
                        </p>

                        <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem' }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>{stats.activeDays}</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Active Days</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>{stats.maxStreak}</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Max Streak</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>{stats.rank}</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global Rank</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{
                        padding: '4rem',
                        borderRadius: '32px',
                        background: 'rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '3rem',
                        textAlign: 'center'
                    }}>
                        <div style={{ position: 'relative', width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="220" height="220" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="90" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                                <motion.circle
                                    cx="100" cy="100" r="90" fill="none" stroke="var(--accent-primary)" strokeWidth="12"
                                    strokeDasharray="565.48"
                                    initial={{ strokeDashoffset: 565.48 }}
                                    whileInView={{ strokeDashoffset: 565.48 * (1 - stats.total / 100) }} // Scaled to 100 goal
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div style={{ position: 'absolute' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>{stats.total}</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Problems</div>
                            </div>
                        </div>

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700 }}>
                                <span style={{ color: '#22c55e' }}>EASY</span>
                                <span style={{ color: 'var(--text-primary)' }}>55/55</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    style={{ height: '100%', background: '#22c55e' }}
                                />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, opacity: 0.3 }}>
                                <span>MEDIUM</span>
                                <span>0</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, opacity: 0.3 }}>
                                <span>HARD</span>
                                <span>0</span>
                            </div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05, background: 'var(--text-primary)', color: '#fff' }}
                            href="https://leetcode.com/u/Nithnhh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                marginTop: '1rem',
                                padding: '1rem 2.5rem',
                                borderRadius: '100px',
                                border: '2px solid var(--text-primary)',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Sync Profile
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingStats;
