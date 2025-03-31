import React from "react";

const Experience = () => {
    return (
        <div className="section">
            <h2>Experience and Skills</h2>
            <h3>Experience</h3>
            <ExperienceItem 
                title="AWS DevOps Engineer, Tech Consulting"
                startDate="Sep 2024"
                endDate="Mar 2025"
                bullets={[
                    "Designed, implemented, and managed AWS cloud infrastructure using EC2, S3, RDS, Lambda, API Gateway, VPC, IAM, and Route 53, ensuring scalability, security, and high availability.",
                    "Automated infrastructure provisioning and configuration management with Terraform, CloudFormation, and Ansible, streamlining deployment processes and reducing manual errors.",
                    "Developed and maintained CI/CD pipelines with Jenkins, GitHub Actions, and AWS CodePipeline, enabling automated testing, secure deployments, and faster software delivery.",
                    "Managed containerized applications using Docker and Kubernetes (Amazon EKS & ECS), enhancing scalability, performance, and flexibility.",
                    "Implemented monitoring and alerting solutions using AWS CloudWatch, CloudTrail, Prometheus, Grafana, and ELK Stack for proactive issue resolution and real-time performance monitoring.",
                    "Enhanced security by implementing IAM roles, secure VPC configurations, encryption, and conducting regular security audits of AWS infrastructure.",
                    "Developed Python and Bash automation scripts to streamline cloud operations and optimize infrastructure management.",
                    "Collaborated with development and security teams to optimize application performance, scalability, and cost-efficiency, ensuring adherence to best DevOps practices.",
                    "Designed and implemented high availability (HA) and disaster recovery (DR) strategies, leveraging AWS multi-region architectures, automated backups, and failover mechanisms.",
                    "Troubleshot production issues, conducted root cause analysis, and implemented solutions to ensure system stability and minimize downtime."
                ]}
            />
            <ExperienceItem
                title="Associate Software Engineer, Infosys Limited"
                startDate="Sep 2021"
                endDate="Feb 2023"
                bullets={[
                    "Designed and developed RESTful APIs using Spring Boot for backend services, integrating seamlessly with front-end frameworks and third-party systems. Implemented CRUD operations, JWT/OAuth-based security, and optimized performance.",
                    "Built dynamic and responsive single-page applications (SPAs) using Angular, implementing state management (NgRx), lazy loading, and modular components for an improved user experience and faster loading times.",
                    "Developed and optimized server-side logic using Spring Boot and Java with robust service layers, leveraging Hibernate and Spring Data JPA to ensure efficient persistence and object-relational mapping.",
                    "Designed and maintained relational databases like MySQL and PostgreSQL, optimizing queries, indexing strategies, and ensuring data integrity for scalable and efficient data management.",
                    "Integrated backend APIs with front-end applications and third-party services, ensuring secure data exchange and enhancing overall system functionality.",
                    "Implemented CI/CD pipelines with Jenkins and GitHub Actions, automating testing, build, and deployment processes for quicker release cycles and consistent code quality.",
                    "Wrote unit and integration tests with JUnit and Mockito to ensure high-quality code. Diagnosed and resolved bugs and performance issues, improving system reliability and user satisfaction.",
                    "Worked closely with cross-functional teams, including frontend developers, UX/UI designers, and product managers, to ensure timely delivery of high-quality software solutions in an Agile environment.",
                    "Applied security best practices, such as encryption and authentication, and followed coding standards and design patterns (e.g., SOLID, MVC) to ensure clean, maintainable, and scalable code."
                ]}
            />
            <h3>Skills</h3>
            <ul>
                <li><strong>Programming and Scripting Languages:</strong> Java/J2EE, C#, JavaScript, TypeScript, Python, Bash</li>
                <li><strong>Web Development Frameworks & Tools:</strong> Spring Boot, Maven, Hibernate, ASP.NET MVC, Entity Framework, Angular, jQuery</li>
                <li><strong>Database Technologies:</strong> SQL (MySQL, MS SQL Server, Oracle, PostgreSQL), NoSQL (MongoDB), ETL processes, AWS RDS</li>
                <li><strong>Cloud Computing:</strong> AWS (EC2, S3, EBS, ELB, CloudWatch, ECS, EKS, RDS, Lambda, IAM, VPC, CloudFormation, CodePipeline, Glue), Microsoft Azure</li>
                <li><strong>Infrastructure as Code (IaC) & Configuration Management:</strong> Terraform, CloudFormation, Ansible for automating infrastructure provisioning and configuration management</li>
                <li><strong>Containerization & Orchestration:</strong> Docker, Kubernetes (EKS & ECS) for enhancing scalability and deployment flexibility</li>
                <li><strong>CI/CD Pipelines:</strong> Jenkins, GitHub Actions, AWS CodePipeline for automating software testing, building, and deployment</li>
                <li><strong>Version Control & Collaboration Tools:</strong> Git, GitHub, GitLab, Bitbucket, Trello, Lucidchart</li>
                <li><strong>API & Web Services:</strong> RESTful APIs, Microservices Architecture, API Testing (Postman, Swagger)</li>
                <li><strong>Markup & Data Formats:</strong> HTML5, CSS, JSON, XML</li>
                <li><strong>Agile Methodologies:</strong> Scrum, Kanban, User Story Creation</li>
                <li><strong>Monitoring & Alerting:</strong> Prometheus, Grafana, CloudWatch for proactive system monitoring</li>
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
