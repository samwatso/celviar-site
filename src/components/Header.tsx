import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlassSurface } from '../ui/reactbits/GlassSurface';
import { navLinks } from '../config/links';
import { shopifyConfig } from '../config/shopify';
import styles from './Header.module.css';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const productUrl = shopifyConfig.productUrls.richSalve;

  return (
    <header ref={headerRef} className={styles.header}>
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={24}
      >
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img 
              src="/assets/white-logo.png" 
              alt="Celviar" 
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.main.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a 
              href={productUrl}
              className={styles.preorderButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pre-Order
            </a>
            
            <Link to="/founding-member" className={styles.foundingButton}>
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
      </GlassSurface>

      {/* Mobile Navigation Dropdown */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={20}
        >
          <div className={styles.mobileNavInner}>
            <ul className={styles.mobileNavList}>
              {navLinks.main.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.mobileNavLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className={styles.mobileCtas}>
              <a 
                href={productUrl}
                className={styles.mobilePreorderButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-Order
              </a>
              <Link to="/founding-member" className={styles.mobileFoundingButton}>
                Founding Member
              </Link>
            </div>
          </div>
        </GlassSurface>
      </div>
    </header>
  );
}