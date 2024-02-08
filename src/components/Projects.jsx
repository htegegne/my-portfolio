import React from 'react';

const Projects = () => {
    return (
        <div className="section">
            <h2>Projects</h2>
            <div className="project">
                <h3>Portfolio</h3>
                <p>Personal portfolio</p>
                <p>Technologies used: JavaScript(React), HTML, CSS, Bootstrap </p>
                <a href="https://github.com/htegegne/portfolio.github.io" target="_blank" rel="noopener noreferrer">PortfolioGitHub Repository</a>
                {/* Add more projects as needed */}
            </div>
        </div>
    );
};

export default Projects;