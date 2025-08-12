import React from 'react';
//import ReactPlayer from 'react-player';


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
                <h3 className="role">Software Engineer | Full-Stack Developer | Cloud, DevOps & Database Specialist</h3>
                <p className="description">
                Highly motivated Software Engineer with a passion for both backend and frontend development, 
                cloud infrastructure, and DevOps automation. Experienced in building scalable 
                applications with modern frameworks and managing both relational and NoSQL databases. 
                Agile team player who’s always eager to learn and improve. 
                Let’s build something incredible!


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
