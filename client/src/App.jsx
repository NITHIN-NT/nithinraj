import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ReadingText from './components/ReadingText';
import LoadingScreen from './components/LoadingScreen';
import Terminal from './components/Terminal';
import BackgroundElements from './components/BackgroundElements';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const About = () => (
  <section id="about" style={{ background: '#020202' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>
          [ 02 // BIO_MANIFEST ]
        </div>
        <h2 className="section-title" style={{ textAlign: 'left', margin: 0, textTransform: 'uppercase' }}>Professional Profile</h2>
      </div>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 500px)', gap: '6rem' }}>
        <div style={{ lineHeight: '2', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '2rem' }}>
            <ReadingText text="I am Nithin NT, a Senior Backend Architect specializing in high-performance digital infrastructures. Based in South India, I transform complex requirements into resilient, scalable, and secure system architectures." />
          </p>
          <p>
            <ReadingText text="Currently at Brototype, I'm engineering massive-scale software solutions using Python/Django and React. My design philosophy balances raw technical precision with high-impact visual aesthetics." />
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h3 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.6 }}>// SYSTEM_OVERSIGHT_ACTIVE</h3>
          <div style={{ padding: '2rem', border: '1px solid var(--glass-border)', background: 'rgba(16, 185, 129, 0.02)', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
              Floating Terminal deployed. Drag the header to reposition. Use the red control to minimize.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="content-reveal">
          <BackgroundElements />
          <Navbar />
          <Hero />
          <TechStack />
          <About />
          <Contact />
          <Terminal />
          <footer style={{ padding: '6rem 3rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}>
            [ SYSTEM_END // © {new Date().getFullYear()} NITHIN NT // ARCHITECTING_FUTURES ]
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
