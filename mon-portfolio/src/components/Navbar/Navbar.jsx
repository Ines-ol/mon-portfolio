import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className={styles.logo}>Portfolio</a>
        
        <ul className={styles.navLinks}>
          <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
          <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
        </ul>
        
        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeButton}>
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </button>
          <a href="cv.pdf" download className={styles.cvButton}>Download CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;