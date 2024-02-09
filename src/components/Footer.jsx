import React from 'react';
import githubLogo from '../images/github-mark.png';
import linkedinLogo from '../images/linkedin-logo.png';
import gmailLogo from '../images/gmail-logo.png';
import '../styles/footer.css';

const Footer = () => {
    return (
      
        <footer className="footer">
            <div className="container-fluid">
                {/* Contact info */}
                <div className="row">
                    <div className="col-md-4 col-lg-3"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="tel:+1615-967-0280">Call me</a>
                        </button>
                    </div>
                    <div className="col-md-4 col-lg-3"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="mailto:habamutegegne1@gmail.com">
                                <img src={gmailLogo} alt="Gmail" />
                            </a>
                        </button>
                    </div>
                    <div className="col-md-4 col-lg-3"> {/* Adjust the column width for different screen sizes */}
                        <button className="button link-btn">
                            <a href="https://github.com/htegegne" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub Logo" width="30" height="30" />
                            </a>
                        </button>
                    </div>
                    <div className="col-md-4 col-lg-3"> {/* Adjust the column width for different screen sizes */}
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
