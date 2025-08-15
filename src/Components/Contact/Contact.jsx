import React from 'react'

import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div> 
            <ul className={styles.links}>
                <li className={styles.link}> 
                    <a href="mailto:tambolirohit2412@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" /></a>
                    <a href="mailto:tambolirohit2412@gmail.com">tambolirohit2412@gmail.com</a>
                </li>
                <li className={styles.link}> 
                    <a href="https://www.linkedin.com/in/tambolirohit/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" /></a>
                    <a href="https://www.linkedin.com/in/tambolirohit/">linkedin.com/in/tambolirohit/</a>
                </li>
                <li className={styles.link}> 
                    <a href="https://www.github.com/rohit-tamboli"><img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" /></a>
                    <a href="https://www.github.com/rohit-tamboli">github.com/rohit-tamboli</a>
                </li>
            </ul> 
        </footer>
    )
}

export default Contact
