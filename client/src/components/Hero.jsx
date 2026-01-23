import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshTransmissionMaterial, Environment, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();
    const isMobile = window.innerWidth < 1000;

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * (isMobile ? 0.5 : 1.5), mouse.y * 1 + 2, isMobile ? 18 : 12), 0.05);
        camera.lookAt(0, 0, 0);
    });
}

function GlassGeometry({ position, scale = 1, rotationSpeed = 0.5 }) {
    const mesh = useRef();

    useFrame((state) => {
        mesh.current.rotation.x = state.clock.getElapsedTime() * rotationSpeed * 0.2;
        mesh.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={mesh} position={position} scale={scale}>
                <octahedronGeometry args={[1, 0]} />
                <MeshTransmissionMaterial
                    backside
                    samples={16}
                    thickness={0.5}
                    chromaticAberration={0.05}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.3}
                    temporalDistortion={0.5}
                    clearcoat={1}
                    attenuationDistance={0.5}
                    attenuationColor="#ffffff"
                    color="#e0e7ff"
                />
            </mesh>
        </Float>
    );
}

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="home" className="hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Canvas dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 2, isMobile ? 18 : 12]} fov={35} />
                    <Rig />

                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

                    <GlassGeometry position={[0, 0, 0]} scale={isMobile ? 1.8 : 2.5} rotationSpeed={0.8} />
                    <GlassGeometry position={[-4, 2, -2]} scale={1.2} rotationSpeed={1.2} />
                    <GlassGeometry position={[5, -1, -3]} scale={1.5} rotationSpeed={0.6} />
                    <GlassGeometry position={[-3, -3, -1]} scale={0.8} rotationSpeed={1.5} />

                    <Environment preset="city" />

                    <EffectComposer>
                        <Bloom luminanceThreshold={1} intensity={0.5} levels={9} mipmapBlur />
                    </EffectComposer>

                    <fog attach="fog" args={["#ffffff", 5, 30]} />
                </Canvas>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="hero-content"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '0 2rem',
                    textAlign: 'center'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        padding: isMobile ? '0.4rem 1.2rem' : '0.5rem 2rem',
                        background: 'rgba(59, 130, 246, 0.05)',
                        borderRadius: '100px',
                        fontSize: isMobile ? '0.65rem' : '0.75rem',
                        fontWeight: 700,
                        color: 'var(--accent-primary)',
                        marginBottom: '2rem',
                        letterSpacing: '0.2em',
                        border: '1px solid rgba(59, 130, 246, 0.1)'
                    }}
                >
                    SYSTEM READY // V2.AETHER
                </motion.div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 12vw, 8rem)',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    lineHeight: 0.9,
                    margin: 0
                }}>
                    Nithin NT
                </h1>

                <p style={{
                    marginTop: '1.5rem',
                    fontSize: isMobile ? '0.75rem' : '1rem',
                    color: 'var(--text-secondary)',
                    letterSpacing: isMobile ? '0.3em' : '0.5em',
                    textTransform: 'uppercase',
                    fontWeight: 500
                }}>
                    Architecture & Systems
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '1rem' : '1.5rem',
                    marginTop: isMobile ? '3rem' : '4rem',
                    width: isMobile ? '100%' : 'auto',
                    maxWidth: isMobile ? '280px' : 'none'
                }}>
                    <motion.a
                        whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
                        href="#work"
                        style={{
                            padding: '1.2rem 3.5rem',
                            borderRadius: '12px',
                            fontWeight: 700,
                            background: 'var(--accent-primary)',
                            color: '#fff',
                            border: 'none',
                            fontSize: '0.9rem',
                            textAlign: 'center',
                            textDecoration: 'none'
                        }}
                    >
                        Explore Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -5, background: 'rgba(255,255,255,1)' }}
                        href="#contact"
                        style={{
                            padding: '1.2rem 3.5rem',
                            borderRadius: '12px',
                            fontWeight: 700,
                            background: 'rgba(255, 255, 255, 0.4)',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                            textAlign: 'center',
                            textDecoration: 'none',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}
                    >
                        Get in Touch
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '50px',
                    borderRadius: '15px',
                    border: '2px solid var(--text-secondary)',
                    opacity: 0.3
                }}
            >
                <div style={{
                    width: '4px',
                    height: '8px',
                    background: 'var(--text-secondary)',
                    borderRadius: '2px',
                    margin: '8px auto'
                }} />
            </motion.div>
        </div>
    );
};

export default Hero;
