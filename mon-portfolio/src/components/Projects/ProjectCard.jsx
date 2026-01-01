import React from 'react';
import styles from './ProjectCard.module.css';


function ProjectCard({ title, description, techStack, githubLink, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.projectImage} 
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <span className={styles.linkIcon}>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;