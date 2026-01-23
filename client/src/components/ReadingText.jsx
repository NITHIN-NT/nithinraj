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
                        color: "var(--accent-primary)",
                        scale: 1.2,
                        y: -5,
                        textShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
                        transition: { duration: 0.2 }
                    }}
                    style={{
                        display: 'inline-block',
                        cursor: 'default',
                        whiteSpace: char === " " ? "pre" : "normal",
                        transition: "all 0.2s ease"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

export default ReadingText;
