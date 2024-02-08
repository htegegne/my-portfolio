import React, { useState } from 'react';
import '../styles/header.css';
import { Link, Outlet } from 'react-router-dom';
import mainLogo from '../images/logo-ht1.png';

const Header = ({ closeMenu }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleLinkClick = () => {
        setShowMenu(false); // Close the menu when a link is clicked
        closeMenu(); // Call the closeMenu function from props
    };

    return (
        <header className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={mainLogo} alt="Habtamu Tegegne Logo" className="logo" />
                </Link>
                <button
                    className="navbar-toggler collapsed"
                    onClick={toggleMenu}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                   
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className="nav-link" onClick={handleLinkClick}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experience" className="nav-link" onClick={handleLinkClick}>Experience and Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Me</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <Outlet/>
        </header>
    );
};

export default Header;