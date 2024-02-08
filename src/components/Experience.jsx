import React from "react";

const Experience = () => {
    return (
        <div className="section">
            <h2>Experience and Skills</h2>
            <h3>Experience</h3>
            <ExperienceItem
                title="Associate Software Engineer, Infosys Limited"
                startDate="Sep 2021"
                endDate="Feb 2023"
                bullets={[
                    "Developed Restful APIs using Spring Boot, implementing CRUD operations, security measures, performance optimization, thorough Postman testing, documentation, and collaboration with cross-functional teams",
                    "Optimized business logic processes by implementing service layers with Spring Boot, resulting in increased operational efficiency. ",
                    "Utilized Spring Data and ORM to develop robust persistence layers, ensuring seamless data management. ",
                    "Created dynamic single-page applications using Angular, enhancing user interactivity and responsiveness. ",
                    "Spearheaded the design and implementation of relational databases, ensuring optimal data storage and retrieval. ",
                    "Applied object-oriented design principles and various Design Patterns to optimize code quality, scalability, and maintainability."
                ]}
            />
            <h3>Skills</h3>
            <ul>
                <li><strong>Programming languages:</strong> Java/J2EE, C#, JavaScript, TypeScript</li>
                <li><strong>Web Development Frameworks and tools:</strong> Maven, Spring Boot, Hibernate, ASP.NET MVC, Entity Framework</li>
                <li><strong>JavaScript Frameworks and Libraries:</strong> Angular, jQuery</li>
                <li><strong>Database Technologies:</strong> SQL, NoSQL, ETL, MongoDB, MS SQL Server, Oracle, MySQL, PostgreSQL</li>
                <li><strong>API and Web Services:</strong> Restful APIs, Microservices, API testing</li>
                <li><strong>Markup and Data Formats:</strong> HTML5, CSS, JSON, XML</li>
                <li><strong>Cloud Computing:</strong> AWS, Microsoft Azure</li>
                <li><strong>Version Control and collaboration tools:</strong> Git, Bitbucket, GitHub, GitLab, Trello, Lucidchart</li>
                <li><strong>Agile Methodologies:</strong> Scrum Framework, Kanban Methodology, User Story Creation and Management</li>
            </ul>
            <h3>Certifications</h3>
            <ul>
                <li>Infosys Certified AWS Solutions Architect Associate - 24 Jan 2023</li>
                <li>Infosys Certified Spring Associate - 30 Oct 2022</li>
                <li>Infosys Certified Angular Associate - 27 Jan 2002</li>
            </ul>
        </div>
    );
};

const ExperienceItem = ({ title, startDate, endDate, bullets }) => {
    return (
        <div className="experience-item">
            <h4>{title}</h4>
            <p>{startDate} - {endDate}</p>
            <ul>
                {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
