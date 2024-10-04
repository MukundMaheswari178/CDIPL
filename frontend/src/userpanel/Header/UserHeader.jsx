import React, { useState, useEffect } from 'react';
import { FaPhone, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Ensure to update your CSS accordingly

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detect scroll to add sticky class
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`navbar-area ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    {/* Left side: Logo */}
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="navbar-logo">
                            <a href="/">
                                <img src="./cdiplogo.png" alt="FinBest" className="logo" />
                            </a>
                        </div>
                    </div>

                    {/* Center: Desktop Navigation Menu */}
                    <div className="col-lg-6 col-md-6 d-none d-md-block">
                        <nav className="navbar-menu">
                            <ul className="menu-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="/About-Us">About Us</a></li>
                                <li><a href="/property">Projects</a></li>
                                <li><a href="/">Faq</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/Contact-Us">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Right side: Search, Call and Hamburger Icon */}
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="navbar-actions d-flex justify-content-end align-items-center">
                            <FaSearch className="search-icon" />
                            <div className="call-info d-none d-lg-flex align-items-center">
                                <FaPhone className="phone-icon" />
                                <div>
                                    <p className="request-call">Requesting A Call:</p>
                                    <p className="phone-number">+91 9266768043</p>
                                </div>
                            </div>
                            {/* Hamburger Icon for Mobile */}
                            <FaBars className="hamburger-icon d-block d-lg-none" onClick={toggleMobileMenu} />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                        <div className="mobile-menu-header">
                            <a href="/" className="logo">
                                <img src="./cdiplogo.png" alt="FinBest" />
                            </a>
                            <FaTimes className="close-icon" onClick={toggleMobileMenu} />
                        </div>
                        <nav className="mobile-nav">
                            <ul className="mobile-menu-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/pages">Pages</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                        {/* Contact Info in Mobile Menu */}
                        <div className="mobile-contact-info">
                            <p>86 New Mt. View, NY, USA</p>
                            <p>Email: contourdirectindia@gmail.com</p>
                            <p>Phone: +91 9266-768-043
                            </p>
                        </div>
                        {/* Social Media Links in Mobile Menu */}
                        <div className="mobile-social-media-links">
                            <a href="https://www.facebook.com/contourdirectindia/"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="https://www.instagram.com/contourdirectindia/"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/company/contour-direct-india/"><FaLinkedinIn /></a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
