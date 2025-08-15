import React from 'react'

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
    return ( 
        <section className={styles.container} id='about'>
            <h1 className={styles.title}>About</h1>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
                        <div className={styles.aboutItemText}>
                            {/* <h3>Frontend Developer</h3> */}
                            <p>MERN Stack Developer with hands-on experience building responsive web applications using React, Node.js, Express.js, and MongoDB. Proficient in HTML, CSS, JavaScript, Tailwind CSS, and SQL, with a strong foundation in RESTful API integration and version control using Git and GitHub. Passionate about creating scalable, user-centric solutions and contributing to innovative development teams.</p>
                        </div>
                    </li>
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Experienced in designing and developing responsive, user-friendly interfaces using JavaScript, React, and Tailwind CSS. Skilled in optimizing websites for performance, accessibility, and scalability to ensure exceptional user experiences.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Proficient in building fast, optimized, and secure backend systems and APIs using Node.js and Express.js. Skilled in database management with MongoDB and SQL, and experienced in integrating RESTful APIs for efficient data handling</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Ui icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>UI Designer focused on creating intuitive, visually striking, and user-friendly digital experiences.</p>
                        </div>
                    </li> */}

                </ul>
            </div>
        </section>
    )
}

export default About
