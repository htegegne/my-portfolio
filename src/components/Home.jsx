import React from 'react';
import ReactPlayer from 'react-player';
//import Contacts from './Contacts';
import githubLogo from '../images/github-mark.png';
import linkedinLogo from '../images/linkedin-logo.png';
import gmailLogo from '../images/gmail-logo.png';
import homeVideo from '../images/ht-logo-video.mp4';

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../images/Habtamu-Tegegne-resume.pdf';
        link.download = 'Habtamu-Tegegne-resume.pdf';
        link.click();
    };

    return (
        <div className="section">
            <div className="content">
                <div className="main-content">
                    <div className="video-wrapper">
                        <ReactPlayer
                            url={homeVideo}
                            autoPlay={true}
                            controls={true}
                            loop={true}
                            muted={false}
                            width="640"
                            height="360"
                        />
                        <div className="video-overlay">
                            <div className="video-text">
                                <h1>Welcome to My Portfolio</h1>
                                <h1>I am Habtamu Tegegne</h1>
                                <h3>Software Engineer, Full-Stack Developer</h3>
                                <h5>
                                    Highly motivated Software Engineer with a passion for both backend and frontend development, 
                cloud infrastructure, and DevOps automation. Experienced in building scalable 
                applications with modern frameworks and managing both relational and NoSQL databases. 
                Agile team player who’s always eager to learn and improve. 
                Let’s build something incredible!
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="download-section">
                    <button className="button download-btn" onClick={handleDownload}>
                        <h2>Download Resume</h2>
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;
