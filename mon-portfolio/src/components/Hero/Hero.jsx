import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import avatar from '../../assets/avatar.jpg';

function Hero() {
  const [nameIndex, setNameIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullName = "Ouldji Ines Yasmine"; 
  const roles = [
    "Web Developer",
    "mobile Developer",
    "Frontend Developer",
    "UI Designer"
  ];

  // Animation du nom (typing effect)
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setNameIndex(nameIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex]);

  // Animation des rôles (typing + deleting effect)
  useEffect(() => {
    const currentText = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && roleIndex < currentText.length) {
        setRoleIndex(roleIndex + 1);
      } else if (isDeleting && roleIndex > 0) {
        setRoleIndex(roleIndex - 1);
      } else if (!isDeleting && roleIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && roleIndex === 0) {
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [roleIndex, isDeleting, currentRole]);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        
        {/* Section Gauche - Image avec effet lumineux */}
        <div className={styles.imageSection}>
          <div className={styles.glowEffect}></div>
          <div className={styles.imageWrapper}>
            <img 
              src={avatar} 
              alt="Votre Nom" 
              className={styles.profileImage}
            />
          </div>
        </div>

        {/* Section Droite - Texte animé */}
        <div className={styles.contentSection}>
          <div className={styles.greeting}>Hello, I'm</div>
          
          <h1 className={styles.name}>
            {fullName.substring(0, nameIndex)}
            <span className={styles.cursor}>|</span>
          </h1>
          
          <div className={styles.roleContainer}>
            <span className={styles.roleText}>And I'm a </span>
            <span className={styles.role}>
              {roles[currentRole].substring(0, roleIndex)}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <p className={styles.description}>
           I'm a passionate web and mobile developer with hands-on experience building real-world applications.<br></br>
           I enjoy turning ideas into functional and user-friendly products, whether it's a dynamic web platform or a cross-platform mobile app.
           Always eager to learn and create solutions that make a difference!
          </p>

          {/* Réseaux sociaux */}
          <div className={styles.socialLinks}>
            <a href="https://github.com/Ines-ol" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ouldji-ines-yasmine-05210b252/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/ines.ol.2025" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:ouldjiinesyasmine@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Bouton CTA */}
          <button className={styles.ctaButton} onClick={() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;