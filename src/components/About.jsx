import React from 'react';
import profilePic from '../images/profile_pic.jpg';

const About = () => {
    return (
        <div className="section">
            
           
            <h1>About Me</h1>
            <img src={profilePic} alt="Habtamu Tegegne" height="200" width="200" />
            
           
            <p>
                Hello! I'm Habtamu Tegegne, a passionate and innovative software engineer currently based
                in the heart of Tennessee, in the vibrant Greater Nashville area. As a Computing graduate, my journey began with crafting cutting-edge solutions
                and exploring the realms of full-stack development.
            </p>

            <p>
                Originally from Ethiopia, I carry the rich experiences of my BSC in Environmental Health. I served as an Environmental
                Health Officer at the Addis Ababa Health Bureau, later advancing in my career to become the Head of the Local Health Department
                and Cabinet Member. In this role, I contributed to socio-political decisions, monitored health programs, and trained health professionals.
                After moving to the USA in 2015, I continued to pursue knowledge and growth. I hold a certification in Environmental Public Health from
                the South Central Public Health Partnership, earned in September 2015, showcasing my commitment to continuous learning and adaptation.
            </p>

            <p>
                Over the past few years, I�ve honed my skills in cloud computing and DevOps, gaining expertise in AWS services such as
                EC2, S3, RDS, Lambda, and VPC. I specialize in infrastructure automation using Terraform, CloudFormation, and Ansible, a
                nd have built and maintained CI/CD pipelines with Jenkins and GitHub Actions to enable faster, more efficient deployments.
                With hands-on experience in containerization and orchestration using Docker and Kubernetes, I develop scalable,
                secure applications that run seamlessly across cloud environments, leveraging cloud-native tools to enhance operational excellence.
            </p>

            <p>
                My work spans a diverse tech stack, including Java, C#, Python, JavaScript, and frameworks like Spring Boot, ASP.NET, and Angular.
                I specialize in crafting high-performance applications, designing efficient database systems, and ensuring smooth integration across platforms,
                all while embracing agile methodologies to drive continuous improvement.
            </p>

            <p>
                Outside of technology, you'll find me exploring new places, indulging in my love for travel, and unwinding by tranquil lakes�perhaps
                even some of the beautiful lakes here in Tennessee.
            </p>

            <p>
                I am always eager to stay ahead of the curve, learning the latest trends and enhancing my skills to become a better developer.
                Embracing challenges, I use agile methodologies to bring ideas to life. When I�m not at the keyboard, you might find me diving
                into the latest tech news, sipping coffee, or sharing insights with others.
            </p>

            <p>
                Awards and Honors: Graduated Cum Laude, member of Upsilon Pi Epsilon (UPE) � Computing & Information Disciplines Honor Society,
                and recipient of the ETSU Students of Distinction Scholarship.
            </p>

            <p>
                Let's collaborate and transform ideas into reality!
            </p>
        </div>
    );
};

export default About;