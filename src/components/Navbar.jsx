import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { currentUser, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/topics', label: 'Topics' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  if (isAdmin) {
    navLinks.push({ path: '/admin', label: 'Admin' });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={styles.navbar} style={scrolled ? { boxShadow: 'var(--shadow-md)' } : {}}>
        <div className={styles['navbar-inner']}>
          <Link to="/" className={styles['navbar-logo']}>
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#2D6A4F"/>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="Inter, sans-serif" fontWeight="800" fontSize="16" fill="#FAFAF5">
                VQ
              </text>
            </svg>
            Vault Q
          </Link>

          <div className={styles['navbar-links']}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={isActive(link.path) ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles['navbar-cta']}>
            {currentUser ? (
              <button onClick={logout} className="btn btn-secondary btn-sm">
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">
                Sign In
              </Link>
            )}
            <div
              className={`${styles['navbar-hamburger']} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${styles['mobile-menu']} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={isActive(link.path) ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        {currentUser ? (
          <button onClick={logout} className="btn btn-secondary">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
        )}
      </div>

      {/* Spacer for fixed navbar */}
      <div style={{ height: 'var(--nav-height)' }} />
    </>
  );
}
