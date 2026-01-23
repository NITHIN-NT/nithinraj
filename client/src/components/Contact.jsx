import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendForm } from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1000 : false);
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("submitting");
        setResult("Sending protocol...");

        // INSTRUCTION: Replace these placeholders with your actual EmailJS credentials
        // Get them from: https://dashboard.emailjs.com/admin
        const SERVICE_ID = 'service_tatjzt8';
        const TEMPLATE_ID = 'template_bcbahu4';
        const PUBLIC_KEY = 'jXNqWE3GwW0H1FBQ9';

        sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
        })
            .then(
                () => {
                    setStatus("success");
                    setResult("Message Transmitted Successfully.");
                    e.target.reset();
                },
                (error) => {
                    console.error('EMAILJS ERROR:', error);
                    setStatus("error");
                    setResult(error.text || "Transmission Failed. Connection refused.");
                },
            );
    };

    return (
        <section id="contact" style={{ background: '#ffffff', padding: '8rem 3rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>

                    <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                            Connection Link
                        </div>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Discuss Architecture</h2>
                        <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.7' }}>
                            Ready to engineer scalable solutions. Whether it's a distributed system or a modern web project, let's build something substantial.
                        </p>

                        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <a href="mailto:nithinraj07sachu@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                                nithinraj07sachu@gmail.com
                            </a>
                            <a href="tel:+917306663523" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-secondary)' }} />
                                +91 7306663523
                            </a>
                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                                <a href="https://www.linkedin.com/in/nithin-raj-003a55365/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>LinkedIn</a>
                                <a href="https://github.com/NITHIN-NT" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>GitHub</a>
                                <a href="https://instagram.com/nithnhh" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: isMobile ? '2.5rem 1.5rem' : '3.5rem', borderRadius: '32px', background: 'rgba(255,255,255,0.4)', position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ textAlign: 'center', padding: '1rem 0' }}
                                >
                                    <div style={{
                                        width: '80px', height: '80px', background: 'rgba(59, 130, 246, 0.1)',
                                        borderRadius: '50%', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', margin: '0 auto 2rem'
                                    }}>
                                        <motion.div
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>
                                        STATUS // TRANSMISSION_COMPLETE
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>Packet Received</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '300px', margin: '0 auto' }}>
                                        Architecture requirements logged. A confirmation protocol has been initiated to your email.
                                    </p>
                                    <motion.button
                                        onClick={() => setStatus("idle")}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            marginTop: '3rem', background: 'none', border: '1px solid rgba(0,0,0,0.1)',
                                            color: 'var(--text-primary)', padding: '0.8rem 2rem', borderRadius: '12px',
                                            fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer'
                                        }}
                                    >
                                        SEND_NEW_LOG
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    ref={form}
                                    onSubmit={sendEmail}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="contact-form"
                                >
                                    <div className="form-group">
                                        <label style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>IDENTIFICATION</label>
                                        <input name="user_name" type="text" required placeholder="Your Name" style={{ background: '#fff', padding: '1.2rem', border: '1px solid #e2e8f0', borderRadius: '12px', width: '100%', color: 'var(--text-primary)' }} />
                                    </div>
                                    <div className="form-group" style={{ marginTop: '1.5rem' }}>
                                        <label style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>ADDRESS</label>
                                        <input name="user_email" type="email" required placeholder="email@example.com" style={{ background: '#fff', padding: '1.2rem', border: '1px solid #e2e8f0', borderRadius: '12px', width: '100%', color: 'var(--text-primary)' }} />
                                    </div>
                                    <div className="form-group" style={{ marginTop: '1.5rem' }}>
                                        <label style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>LOG_MESSAGE</label>
                                        <textarea name="message" required placeholder="Describe the project requirements..." rows="5" style={{ background: '#fff', padding: '1.2rem', border: '1px solid #e2e8f0', borderRadius: '12px', resize: 'none', width: '100%', color: 'var(--text-primary)' }} />
                                    </div>

                                    {status === "error" && (
                                        <div style={{ marginTop: '1rem', color: '#ff5f56', fontSize: '0.8rem', fontWeight: 600 }}>
                                            ⚠️ Error: {result}
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="submit-btn"
                                        style={{
                                            marginTop: '2.5rem',
                                            width: '100%',
                                            background: status === "submitting" ? 'var(--text-secondary)' : 'var(--text-primary)',
                                            color: '#fff',
                                            padding: '1.2rem',
                                            borderRadius: '12px',
                                            fontWeight: 800,
                                            fontSize: '0.8rem',
                                            letterSpacing: '0.1em'
                                        }}
                                    >
                                        {status === "submitting" ? "TRANSMITTING..." : "TRANSMIT_MESSAGE"}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
