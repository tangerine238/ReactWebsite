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
                    <a href="mailto:https://www.linkedin.com/in/stephen-tang-b8807325b/">linkedin.com/Stephen</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("githubIcon.png")} alt="Github Icon" />
                    <a href="mailto:https://github.com/tangerine238">github.com/Stephen</a>
                </li>
            </ul>
        </footer>
    )
}