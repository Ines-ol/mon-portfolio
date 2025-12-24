import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import skillsData from '../../data/skillsData';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h3>Languages</h3>
            <ul>
              {skillsData.languages.map((skill, i) => (
                <li key={i}><i className="fas fa-code"></i> {skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <h3>Frameworks</h3>
            <ul>
              {skillsData.frameworks.map((skill, i) => (
                <li key={i}><i className="fas fa-layer-group"></i> {skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <h3>Tools</h3>
            <ul>
              {skillsData.tools.map((skill, i) => (
                <li key={i}><i className="fas fa-tools"></i> {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;