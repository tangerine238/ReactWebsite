import React from "react";
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css"

const skillColors = {
"Raspberry Pi": "#D81B60",
  "Netcat": "#00C853",
  "Vosk": "#FF8F00",
  "3D Modelling": "#8E24AA",
  "Bash": "#2E7D32",
  "Unreal Engine": "#2962FF",
  "Unity 6": "#5C6BC0",
  "Steam Advanced Sessions": "#00BCD4",
  "React": "#0096C7",
  "Typescript": "#3178C6",
  "HTML": "#E34F26",
  "CSS": "#2965F1",
  "Python": "#3776AB"
};

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container}>
      <img src={getImageURL(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li
            key={id}
            className={styles.skill}
            style={{ backgroundColor: skillColors[skill] || "var(--color-primary)" }}
          >
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};