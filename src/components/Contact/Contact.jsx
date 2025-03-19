import React from "react";
import { getImageURL } from "../../utils";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id = "contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:sw2tang@uwaterloo.ca">sw2tang@uwaterloo.ca</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("linkedinIcon.png")} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/stephen-tang-b8807325b/" target="_blank" rel="noopener noreferrer">linkedin.com/Stephen</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/tangerine238" target="_blank" rel="noopener noreferrer">github.com/Stephen</a>
                </li>
            </ul>
        </footer>
    )
}