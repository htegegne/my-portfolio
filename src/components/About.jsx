import React from 'react';
import profilePic from '../images/profile_pic.jpg';

const About = () => {
    return (
        <div className="section">
            
           
            <h1>About Me</h1>
            <img src={profilePic} alt="Habtamu's picture" height="200" width="200" />
            
           
            <p>
                 Hello! I'm Habtamu Tegegne, a passionate and innovative software engineer currently based in the heart of Tennessee,
                in the vibrant Greater Nashville area. As a Computing graduate, my journey began with crafting cutting-edge solutions and
                exploring the realms of full-stack development.
            </p>
            <p>
                Originally from Ethiopia, I carry the rich experiences of my BSC in Environmental Health. I served as an Environmental
                Health Officer at the Addis Ababa Health Bureau, inspecting and licensing food and drinking establishments, schools, and
                industrial firms. Later, I advanced in my career to become the Head of the Local Health Department and Cabinet Member. In
                this role, I contributed to socio-political decisions, monitored health programs, and trained health professionals.
                After moving to the USA in 2015, I continued to pursue knowledge and growth. I hold a certification in Environmental
                Public Health from the South Central Public Health Partnership, earned in September 2015, showcasing my commitment to
                continuous learning and adaptation.
            </p>
            <p>
                 Outside the coding world, you'll find me indulging in my love for travel, exploring new places, and spending tranquil
                moments around lakes-perhaps even some of the beautiful lakes here in the Tennessee landscape.
            </p>
            <p>
                 My coding adventure involves weaving together the threads of Java, C#, and JavaScript, sculpting elegant
                applications with Spring Boot, ASP.NET, and Angular. I thrive in the world of databases, architecting efficient
                systems with SQL, NoSQL, and a dash of cloud magic from AWS and Microsoft Azure.
            </p>
            <p>
                Dedicated to staying on the cutting edge of technology, I consistently read and explore the latest trends to enhance my
                skills and become a better developer. Ever-committed to growth, I embrace challenges, applying agile methodologies to bring
                ideas to life. When not at the keyboard, you might find me exploring the latest in tech, sipping on coffee, or sharing
                knowledge with those around me.
            </p>
            <p>
                 Awards and Honors: Graduated Cum Laude, member of Upsilon Pi Epsilon (UPE) - Computing & Information Disciplines
                Honor Society and recipient of the ETSU Students of Distinction Scholarship.
            </p>
            <p>
                Let's embark on this coding journey together and turn visions into reality. 
            </p>
        </div>
    );
};

export default About;