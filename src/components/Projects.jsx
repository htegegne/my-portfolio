import React from 'react';
import '../styles/projects.css';

const Projects = () => {
    const projects = [
        {
            name:  'Portfolio Website',
            description:  'Developed a personal portfolio website to showcase my skills, projects, and professional experience.',
            technologies: ['React', 'HTML', 'CSS', 'Bootstrap'],
            repoLink: 'https://github.com/htegegne/portfolo',
            liveDemoLink:  'https://htegegne.github.io/my-portfolio/'
        }
    ];

    return (
        <div className="section">
            <h2>Projects</h2>
            <br/>
            {projects.map((project, index) => (
                <div key={index}>
                     <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p><b>Technologies used: </b>{project.technologies.join(", ")}</p>
                    <p><b>Repository: </b><a href={project.repoLink} target="_blank" rel="noopener noreferrer">Portfolio GitHub Repository</a></p>
                    {project.liveDemoLink && <p><b>Live Demo: </b><a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">{project.liveDemoLink}</a></p>}
                </div>

            ))}         
        </div>
    );
};

export default Projects;