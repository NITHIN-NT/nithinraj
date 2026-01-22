import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import './App.css';

const About = () => (
  <section id="about">
    <h2 className="section-title">About Me</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
      <div style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          I am Nithin raj NT, a passionate growing full stack developer based in Malappuram, Kerala.
          Currently, I am honing my skills at Brototype Malayalam, focusing on modern web technologies like Django and React.
        </p>
        <p>
          Coming from a background in Plus Two Computer Science, I've always been fascinated by how things work on the web.
          My goal is to build clean, professional, and high-performance applications that provide great user experiences.
        </p>
      </div>
      <div className="glass" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Education & Focus</h3>
        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '1rem' }}>• Higher Secondary (CS)</li>
          <li style={{ marginBottom: '1rem' }}>• Full Stack Development (Brototype)</li>
          <li style={{ marginBottom: '1rem' }}>• React / Three.js / Django</li>
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
      <About />
      <Contact />

      <footer style={{ padding: '4rem 3rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Nithin Raj NT. Built with React & Three.js
      </footer>
    </div>
  );
}

export default App;
