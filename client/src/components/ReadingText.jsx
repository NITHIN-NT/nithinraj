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
                        color: "#3b82f6",
                        scale: 1.4,
                        textShadow: "0 0 8px rgba(59, 130, 246, 0.8)",
                        transition: { duration: 0.1 }
                    }}
                    style={{
                        display: 'inline-block',
                        cursor: 'default',
                        whiteSpace: char === " " ? "pre" : "normal"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

export default ReadingText;
