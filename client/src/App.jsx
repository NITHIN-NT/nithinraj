import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ReadingText from './components/ReadingText';
import './App.css';

const About = () => (
  <section id="about">
    <h2 className="section-title">Professional Profile</h2>
    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem' }}>
      <div style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 500 }}>
          <ReadingText text="I am Nithin Raj NT, a visionary Full Stack Architect based in Malappuram, Kerala. I specialize in building complex, high-performance web systems using Django and React." />
        </p>
        <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>
          <ReadingText text="Currently at Brototype Malayalam, I'm mastering the art of scalable software engineering. My approach combines deep technical expertise with a sharp eye for modern UI/UX and 3D interactivity." />
        </p>
      </div>
      <div className="glass" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Core Specialization</h3>
        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent-primary)' }}>✔</span> Advanced Django & REST
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent-primary)' }}>✔</span> React & 3D Web (Three.js)
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent-primary)' }}>✔</span> AWS & Docker Orchestration
          </li>
        </ul>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)' }} />
      <TechStack />
      <About />
      <Contact />

      <footer style={{ padding: '4rem 3rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Nithin Raj NT. Engineered with Precision.
      </footer>
    </div>
  );
}

export default App;
