import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../config/links';
import styles from './Header.module.css';

interface HeaderProps {
  onWaitlistClick: () => void;
}

export function Header({ onWaitlistClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo - using image */}
        <Link to="/" className={styles.logo}>
          <img 
            src="/assets/white-logo.png" 
            alt="Celviar" 
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.main.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className={`${styles.navLink} ${location.pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className={styles.actions}>
          <Link 
            to="/founding-member"
            className={styles.foundingMemberButton}
          >
            Founding Member
          </Link>
          
          {/* Mobile menu toggle */}
          <button 
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile navigation"
      >
        <ul className={styles.mobileNavList}>
          {navLinks.main.map((link) => (
            <li key={link.href}>
              <Link 
                to={link.href} 
                className={`${styles.mobileNavLink} ${location.pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              to="/founding-member"
              className={styles.mobileFoundingButton}
            >
              Become a Founding Member
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}