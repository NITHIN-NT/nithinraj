import React from 'react';
import { motion } from 'framer-motion';

const ReadingText = ({ text }) => {
    const characters = text.split("");

    return (
        <span style={{ display: 'inline-block' }}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    whileHover={{
                        color: "#10b981",
                        scale: 1.2,
                        x: [0, -2, 2, -2, 0],
                        y: [0, 1, -1, 1, 0],
                        textShadow: "0 0 12px rgba(16, 185, 129, 0.9), 0 0 20px rgba(16, 185, 129, 0.4)",
                        transition: { duration: 0.2, repeat: Infinity }
                    }}
                    style={{
                        display: 'inline-block',
                        cursor: 'default',
                        whiteSpace: char === " " ? "pre" : "normal",
                        transition: "color 0.2s ease"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

export default ReadingText;
