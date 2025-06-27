import React from "react";
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css"

const skillColors = {
    "Raspberry Pi": "#C51A4A",
    "Netcat": "#4CAF50",
    "Vosk": "#FF9800",
    "3D Modelling": "#9C27B0",
    "Bash": "#795548",
    "Unreal Engine": "#2196F3",
    "Unity 6": "#607D8B",
    "Steam Advanced Sessions": "#0E48A0"
};

export const ProjectCard = ({project : {title, imageSrc, description, skills, demo, source}}) => {
    return (
    <div className={styles.container}>
        <img src={getImageURL(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>{
            skills.map((skill, id) => {
                return (
                    <li 
                        key={id} 
                        className={styles.skill}
                        style={{ color: skillColors[skill] || "#FFFFFF" }}
                    >
                        {skill}
                    </li>
                )
            })}
        </ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
        </div>
    </div>
    );
}