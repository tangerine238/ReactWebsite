import React from 'react';
import styles from "./Hero.module.css";
import { getImageURL } from '../../utils';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Stephen</h1>
            <p className={styles.description}>
            I'm currently a first year Software Engineering Student at the
            University of Waterloo. I'm interested in technology and business.
            I'm specifically interested in game development, artificial
            intelligence, and economics.
            </p>
            <a href="Resume.pdf" download className={styles.contactBtn}>Download Resume</a>
        </div>
        <img src={getImageURL("MeCropped.png")} alt="hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};