import React from 'react';

const Education = () => {
    const relevantCourses = [
        'Software Engineering I & II',
        'Advanced Web Design and Development',
        'Database Advanced Topics',
    ];

    const projects = [
        {
            name: 'Human Computer Interaction Project',
            description: [
                'Gathered and analyzed requirements to meet project expectations.',
                'Led the development team in setting up the collaboration environment in Bitbucket and ensuring weekly timely delivery, resulting in the successful delivery of a complex project on time. Developed user personas and prototypes to assess and validate user interfaces.',
                'Created user-friendly interfaces that enhanced user satisfaction and engagement.',
            ],
            technologies: ['C#', 'ASP.NET', 'SQLite database', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bitbucket'],
            repoLink: 'https://bitbucket.org/restaurantws/teamc_hci_repo/src/master/',
        },
        {
            name: 'Software Engineering II Project',
            description: [
                'Conducted requirement gathering and analysis to develop a user-friendly web application.',
                'Designed UML and ERD diagrams, ensuring clear project visualization and planning.',
                'Developed unit test cases and employed code metrics to guarantee thorough test coverage and quality.',
                'Implemented agile methodologies to enhance team productivity and successfully meet project deadlines.',
            ],
            technologies: ['ASP.NET MVC', 'Razor', 'Web API', 'Oracle database', 'Microsoft Azure', 'Lucidchart', 'Trello', 'GitHub'],
        },
    ];

    return (
        <div className="section">
            <h2>Education</h2>
            <EducationItem
                degree="Bachelor of Science in Computing"
                concentration="Information Technology"
                university="East Tennessee State University (ETSU)"
                location="Johnson City, Tennessee"
                graduationDate="Dec 2020"
                relevantCourses={relevantCourses}
                projects={projects}
            />
            <EducationItem
                degree="Bachelor of Science in Environmental Health"
                university="Hawassa University"
                location="Hawassa, Ethiopia"
                graduationDate="July 2006"
            />
        </div>
    );
};

const EducationItem = ({ degree, concentration, university, location, graduationDate, relevantCourses, projects }) => {
    return (
        <div className="education-item">
            <h3>{degree}</h3>
            <p>
                {concentration && <span style={{ fontSize: '1.2em' }}>{concentration}, </span>}
                <span style={{ fontSize: '1.2em' }}>{university}, {location}</span>
            </p>
            <p style={{ fontSize: '1.2em' }}>
                Graduated: {graduationDate}
            </p>
            {relevantCourses && (
                <div>
                    <h4>Relevant Courses</h4>
                    <ul>
                        {relevantCourses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            )}
            {projects && (
                <div>
                    <h4>Relevant Projects</h4>
                    <ul>
                        {projects.map((project, index) => (
                            <div key={index}>
                                <h5>{project.name}</h5>
                                <ul>
                                    {project.description.map((point, pointIndex) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                    <li>Technologies used: {project.technologies.join(", ")}</li>
                                    {project.repoLink && <li>Project repository: <a href={project.repoLink} target="_blank" rel="noopener noreferrer">{project.repoLink}</a></li>}
                                </ul>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Education;
