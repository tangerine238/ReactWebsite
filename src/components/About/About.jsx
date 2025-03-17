import React from 'react';
import { getImageURL } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageURL("cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive sites in HTML, CSS, and React.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageURL("serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience writing optimized code in C, C++, C#, Python and Java.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageURL("uiIcon.png")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>I'm a game developer with experience creating complete games in Unreal, Unity and Godot.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};