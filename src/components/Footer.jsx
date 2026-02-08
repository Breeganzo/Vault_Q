import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer-grid']}>
          <div className={styles['footer-brand']}>
            <h3>Vault Q</h3>
            <p>
              Curated research guidance for curious minds. Practical, affordable,
              and honest support for students navigating the world of research.
            </p>
          </div>

          <div className={styles['footer-column']}>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/topics">Research Topics</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className={styles['footer-column']}>
            <h4>Resources</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={styles['footer-column']}>
            <h4>Get in Touch</h4>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'}?text=Hi, I need research guidance.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'hello@vaultq.in'}`}>
              Email
            </a>
          </div>
        </div>

        <div className={styles['footer-disclaimer']}>
          <p>
            <strong>Academic Honesty Disclaimer:</strong> Vault Q provides research
            guidance and mentorship only. We do not write assignments, theses, or
            papers on behalf of students. All work submitted to academic institutions
            must be the student's own. We encourage ethical research practices and
            academic integrity.
          </p>
        </div>

        <div className={styles['footer-bottom']}>
          <p>&copy; {currentYear} Vault Q. All rights reserved.</p>
          <p>Built with care for students who want to do real research.</p>
        </div>
      </div>
    </footer>
  );
}
