import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3 style={{ marginBottom: '1rem' }}>Let's collaborate</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="info-item">
                            <strong>Location:</strong> Malappuram, Kerala, India
                        </div>
                        <div className="info-item">
                            <strong>Status:</strong> Studying at Brototype
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="submit-btn" onClick={() => alert('Message sent! (Demo only)')}>
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
