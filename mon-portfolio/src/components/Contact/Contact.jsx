// src/components/Contact/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xwvejzpn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>

        <div className={styles.content}>
          {/* Infos de contact */}
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Connect With Me</h3>
            <p className={styles.infoText}>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>

            <ul className={styles.socialLinks}>
              <li>
                <a href="mailto:ines.yasmine.ouldji@gmail.com" className={styles.socialItem}>
                  <i className="fas fa-envelope"></i> Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ines-yasmine-ouldji" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Ines-ol" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ines.ol.2025" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
            </ul>
          </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>Contact Me</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={styles.input} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={styles.input} />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="6" required className={styles.textarea} />
          <button type="submit" className={styles.submitBtn} disabled={formStatus === 'sending'}>
           {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
    </button>

    {formStatus === 'success' && <p className={styles.success}>Message sent successfully!</p>}
    {formStatus === 'error' && <p className={styles.error}>Something went wrong. Try again.</p>}
  </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;