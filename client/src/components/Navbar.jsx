import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="navbar glass"
        >
            <div className="logo">NITHIN RAJ</div>
            <div className="nav-links">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#work" className="nav-link">Work</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
