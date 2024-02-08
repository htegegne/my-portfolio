import React from 'react';

const Projects = () => {
    return (
        <div className="section">
            <h2>Projects</h2>
            <div className="project">
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
                <p>Technologies used: Technology 1, Technology 2</p>
                <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                {/* Add more projects as needed */}
            </div>
        </div>
    );
};

export default Projects;