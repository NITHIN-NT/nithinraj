import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1 + 6, 15), 0.05);
        camera.lookAt(0, 0, 0);
    });
}

function ScanningLine() {
    const ref = useRef();
    useFrame((state) => {
        ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 8;
    });

    return (
        <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[40, 0.05]} />
            <meshBasicMaterial color="#10b981" transparent opacity={0.1} />
        </mesh>
    );
}

function DataNode({ position, size = 1, color = "#10b981" }) {
    const mesh = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh} position={position}>
            <octahedronGeometry args={[size, 0]} />
            <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={2} />
        </mesh>
    );
}

function DataGrid() {
    const gridRef = useRef();
    useFrame((state) => {
        gridRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <group ref={gridRef} rotation={[-Math.PI / 2.5, 0, 0]}>
            <gridHelper args={[60, 40, "#064e3b", "#022c22"]} />
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
            <torusGeometry args={[radius, 0.005, 16, 120]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
    );
}

function BackendVisual() {
    return (
        <group position={[0, 1, 0]}>
            <ScanningLine />

            {/* Central Holographic Core */}
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <dodecahedronGeometry args={[2.5, 0]} />
                    <MeshDistortMaterial
                        color="#10b981"
                        emissive="#10b981"
                        emissiveIntensity={1.5}
                        distort={0.4}
                        speed={2}
                        roughness={0}
                        metalness={1}
                        wireframe
                    />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <dodecahedronGeometry args={[2.4, 0]} />
                    <meshBasicMaterial color="#059669" transparent opacity={0.15} />
                </mesh>
            </Float>

            {/* Orbiting Service Nodes */}
            <DataNode position={[-5, 3, -3]} size={0.6} color="#34d399" />
            <DataNode position={[6, -1, -4]} size={1} color="#059669" />
            <DataNode position={[3, 4, -2]} size={0.4} color="#6ee7b7" />
            <DataNode position={[-4, -3, -2]} size={0.7} color="#10b981" />

            <FloatingRing radius={6} color="#10b981" speed={0.15} />
            <FloatingRing radius={10} color="#059669" speed={-0.08} />
            <FloatingRing radius={14} color="#047857" speed={0.05} />

            <DataGrid />
        </group>
    );
}

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Canvas dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 6, 15]} fov={45} />
                    <Rig />

                    <ambientLight intensity={0.1} />
                    <pointLight position={[10, 10, 10]} intensity={2} color="#10b981" />

                    <BackendVisual />
                    <Stars radius={120} depth={60} count={3000} factor={6} saturation={0} fade speed={1.5} />

                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                        <Noise opacity={0.03} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>

                    <fog attach="fog" args={["#020202", 10, 25]} />
                </Canvas>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="hero-content"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div className="badge glass" style={{
                    display: 'inline-block',
                    padding: '0.6rem 2.5rem',
                    marginBottom: '2.5rem',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    color: 'var(--accent-primary)',
                    borderRadius: '2px',
                    border: '1px solid var(--accent-primary)',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    background: 'rgba(16, 185, 129, 0.05)',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)'
                }}>
                    [ STATUS: OPTIMIZED_CORE ]
                </div>
                <h1 className="hero-title" style={{
                    fontSize: 'clamp(4rem, 15vw, 10rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    lineHeight: 0.9,
                    letterSpacing: '-0.05em',
                    filter: 'drop-shadow(0 0 50px rgba(16, 185, 129, 0.4))'
                }}>
                    Nithin NT
                </h1>
                <p className="hero-subtitle" style={{
                    margin: '2rem auto 0',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.1em',
                    maxWidth: '800px',
                    lineHeight: '1.8'
                }}>
                    // SENIOR BACKEND ARCHITECT & SYSTEMS ENGINEER
                    <br />
                    // DESIGNING DISTRIBUTED INFRASTRUCTURES FOR THE FUTURE
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '5rem' }}>
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
                        href="#work"
                        className="submit-btn"
                        style={{
                            background: 'var(--accent-primary)',
                            color: '#000',
                            padding: '1.4rem 4rem',
                            borderRadius: '2px',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '0.25em'
                        }}
                    >
                        Initialize Core
                    </motion.a>
                    <motion.a
                        whileHover={{ background: 'rgba(16, 185, 129, 0.1)', scale: 1.05 }}
                        href="#contact"
                        className="submit-btn"
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--accent-primary)',
                            color: 'var(--accent-primary)',
                            padding: '1.4rem 4rem',
                            borderRadius: '2px',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '0.25em'
                        }}
                    >
                        Connect Link
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ bottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
            >
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    color: 'var(--accent-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.4em',
                    opacity: 0.7
                }}>
                    // SYNC_SCROLL_TO_DESCEND
                </span>
                <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)', opacity: 0.5 }} />
            </motion.div>
        </div>
    );
};

export default Hero;
