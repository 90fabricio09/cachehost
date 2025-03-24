import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/logo_png.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleHomeNavigation = (e) => {
        e.preventDefault();
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    };    

    const handleNavigation = (sectionId) => {
        if (location.pathname === "/") {
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/", { state: { scrollTo: sectionId } });
        }
    };

    return (
        <motion.nav className="navbar">
            <div className="navbar-logo">
                <a href="/" onClick={handleHomeNavigation}>
                    <img src={Logo} alt="CacheHost Logo" className="navbar-title" />
                </a>
            </div>

            <ul className="navbar-menu">
                <motion.li whileHover={{ scale: 1.0 }}>
                <a href="/" onClick={handleHomeNavigation}>Início</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.0 }}>
                    <a href="#features" onClick={(e) => { e.preventDefault(); handleNavigation("#features"); }}>Sobre</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.0 }}>
                    <a href="#plans" onClick={(e) => { e.preventDefault(); handleNavigation("#plans"); }}>Serviços</a>
                </motion.li>
            </ul>

            <div 
                className="navbar-auth"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <motion.button className="auth-button" whileHover={{ scale: 1 }}>
                    Área do Cliente <i className="bi bi-chevron-down"></i>
                </motion.button>

                <AnimatePresence>
                    {dropdownOpen && (
                        <motion.div 
                            className="dropdown-menu"
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 1 }}
                            exit={{ scaleY: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <a href="/login">Dashboard</a>
                            <a href="https://discord.gg/CC7HH2mzsK" target="_blank">Suporte</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.div 
                className="hamburger" 
                onClick={toggleMenu}
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <i className={menuOpen ? "bi bi-x" : "bi bi-list"}></i>
            </motion.div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.ul 
                        className={`navbar-mobile ${menuOpen ? "active" : ""}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <li><a href="/" onClick={handleHomeNavigation}>Início</a></li>
                        <li><a href="#features" onClick={(e) => { e.preventDefault(); handleNavigation("#features"); }}>Sobre</a></li>
                        <li><a href="#plans" onClick={(e) => { e.preventDefault(); handleNavigation("#plans"); }}>Serviços</a></li>
                        <div className="navbar-auth-mobile">
                            <a href="/login">Área do Cliente</a>
                        </div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
