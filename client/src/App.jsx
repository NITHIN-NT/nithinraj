import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ReadingText from './components/ReadingText';
import LoadingScreen from './components/LoadingScreen';
import CodingStats from './components/CodingStats';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import BackgroundElements from './components/BackgroundElements';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import './App.css';

const About = () => (
  <section id="about" style={{ background: '#ffffff', padding: '8rem 3rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
          Manifest // 01
        </div>
        <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Professional Narrative</h2>
      </div>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 450px)', gap: '6rem' }}>
        <div style={{ lineHeight: '1.9', color: 'var(--text-secondary)', fontSize: '1.15rem', fontWeight: 500 }}>
          <p style={{ marginBottom: '2rem' }}>
            <ReadingText text="I am Nithin NT, a Growing Backend Architect specializing in high-performance digital infrastructures. Based in South India, I transform complex requirements into resilient, scalable, and secure system architectures." />
          </p>
          <p>
            <ReadingText text="Currently at Brototype, I'm engineering massive-scale software solutions using Python/Django and React. My design philosophy balances raw technical precision with high-impact visual aesthetics." />
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ padding: '2.5rem', border: '1px solid rgba(0,0,0,0.05)', background: '#f8fafc', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>System Integrity</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              The Aether environment is optimized for clarity and high-cycle performance. Drag the terminal to reposition your oversight console.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
          <Projects />
          <TechStack />
          <About />
          <CodingStats />
          <Contact />
          <Terminal />
          <footer style={{ padding: '4rem 3rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}>
            [ SYSTEM_END // © {new Date().getFullYear()} NITHIN NT // DESIGNED BY DHILSHAN KALAYATH UNDER THE SUPERVISION OF NITHIN ]
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
