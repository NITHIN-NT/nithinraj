import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function DataNode({ position, size = 1, color = "#3b82f6" }) {
    const mesh = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
    });

    return (
        <mesh ref={mesh} position={position}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={color} wireframe />
        </mesh>
    );
}

function DataGrid() {
    const gridRef = useRef();
    useFrame((state) => {
        gridRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <group ref={gridRef} rotation={[-Math.PI / 3, 0, 0]}>
            <gridHelper args={[50, 20, "#1e1e1e", "#111"]} />
        </group>
    );
}

function FloatingRing({ radius, color, speed }) {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.z = state.clock.getElapsedTime() * speed;
        ref.current.rotation.x = state.clock.getElapsedTime() * (speed * 0.5);
    });

    return (
        <mesh ref={ref}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
    );
}

function BackendVisual() {
    return (
        <group position={[0, 0, 0]}>
            {/* Central Database Core */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[0, 0, 0]}>
                    <octahedronGeometry args={[2, 0]} />
                    <MeshDistortMaterial
                        color="#2563eb"
                        distort={0.3}
                        speed={1}
                        roughness={0}
                        metalness={1}
                        wireframe
                    />
                </mesh>
            </Float>

            {/* Orbiting Service Nodes */}
            <DataNode position={[-4, 2, -2]} size={0.8} color="#60a5fa" />
            <DataNode position={[5, -1, -3]} size={1.2} color="#1d4ed8" />
            <DataNode position={[2, 3, -1]} size={0.6} color="#93c5fd" />

            <FloatingRing radius={5} color="#3b82f6" speed={0.2} />
            <FloatingRing radius={8} color="#1d4ed8" speed={-0.1} />

            <DataGrid />
        </group>
    );
}

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 5, 12]} fov={50} />
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                    <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={1} color="#60a5fa" />

                    <BackendVisual />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                    <fog attach="fog" args={["#050505", 10, 25]} />
                </Canvas>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hero-content"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div className="badge glass" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', marginBottom: '2rem', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-primary)', borderRadius: '100px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                    ARCHITECTING THE BACKBONE
                </div>
                <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.2))' }}>Nithin Raj</h1>
                <p className="hero-subtitle" style={{ margin: '0 auto' }}>
                    Senior Backend Engineer & System Architect.
                    Building Resilient, Scalable, and High-Performance Digital Infrastructures.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                    <a href="#work" className="submit-btn" style={{ padding: '1rem 2.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore Stack</a>
                    <a href="#contact" className="submit-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem 2.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get Architecture</a>
                </div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ bottom: '3rem' }}
            >
                <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
            </motion.div>
        </div>
    );
};

export default Hero;
