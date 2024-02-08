import React from 'react';
import githubLogo from '../images/github-mark.png';
import linkedinLogo from '../images/linkedin-logo.png';
import gmailLogo from '../images/gmail-logo.png';

const Contact = () => {
    return (
        <div className="section">
            <div className="contacts-section">
                <h2>Contact Info</h2>
                <br/>
                <h4> Phone: <a href="tel:+1615-967-0280">Call me</a>   </h4>     
                <br />
                <h4> Email: <a href="mailto:habamutegegne1@gmail.com"> <img src={gmailLogo} alt="Gmail" className="logo" />
                </a></h4>
                <br />
                <h4>GitHub: <a href="https://github.com/htegegne" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Logo" width="30" height="30" /></a> </h4>
                <br />
                <h4>LinkedIn: <a href="https://www.linkedin.com/in/habtamu-tegegne/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" className="logo" /> </a> </h4>
                <br />
            </div>
        </div>
    );
};

export default Contact;
