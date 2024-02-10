import React from 'react';
import ReactPlayer from 'react-player';


import '../styles/home.css';

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../images/Habtamu-Tegegne-resume.pdf';
        link.download = 'Habtamu-Tegegne-resume.pdf';
        link.click();
    };

    return (
        <div className="section home-section" >
            <div className="content">
                <h1 className="welcome-text">Welcome to My Portfolio</h1>
                <h1 className="name">I am Habtamu Tegegne</h1>
                <h3 className="role">Software Engineer, Full-Stack Developer</h3>
                <p className="description">
                    Highly motivated Computing graduate with a passion for full-stack development and database wizardry.
                    Proficient in OOP, agile methodologies, and always eager to learn and improve. Let's build something incredible!
                </p>
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