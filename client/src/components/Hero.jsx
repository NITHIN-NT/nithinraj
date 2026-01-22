import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

function Backdrop() {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    });

    return (
        <mesh ref={mesh} position={[0, 0, -5]}>
            <sphereGeometry args={[15, 32, 32]} />
            <meshStandardMaterial color="#0a0a0a" wireframe transparent opacity={0.3} />
        </mesh>
    );
}

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Backdrop />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="hero-title">Nithin Raj</h1>
                <p className="hero-subtitle">
                    Growing Full Stack Developer from Kerala, India.
                    Studying at Brototype Malaylam.
                </p>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                ↓
            </motion.div>
        </div>
    );
};

export default Hero;
