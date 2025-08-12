import React from 'react';
import githubLogo from '../images/github-mark.png';
import linkedinLogo from '../images/linkedin_logo.png';
import gmailLogo from '../images/gmail-logo.png';
import phoneIcon from '../images/call-me.png';
import homeBackground from '../images/port_back.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: `url(${homeBackground})` }}>
            <div className="button-container">
                {/* Contact info */}
                <div className="d-flex justify-content-center"> {/* Use flexbox to center items */}
                    <div className="col-md-3 mb-2"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="tel:+1615-967-0280" >
                                <img src={phoneIcon} alt="Phone Icon" />
                            </a>
                        </button>
                    </div>
                    <div className="col-md-3 mb-2"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="mailto:habamutegegne1@gmail.com">
                                <img src={gmailLogo} alt="Gmail"  />
                            </a>
                        </button>
                    </div>
                    <div className="col-md-3 mb-2"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="https://github.com/htegegne" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub Logo"  />
                            </a>
                        </button>
                    </div>
                    <div className="col-md-3 mb-2"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="https://www.linkedin.com/in/habtamu-tegegne/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
