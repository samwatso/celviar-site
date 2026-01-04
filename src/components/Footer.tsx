import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, socialLinks, formEndpoints, siteConfig } from '../config/links';
import { siteContent } from '../content/site';
import styles from './Footer.module.css';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate form submission (replace with actual endpoint)
    try {
      // In production, this would POST to formEndpoints.waitlist
      console.log('Subscribing:', email, 'to', formEndpoints.waitlist);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <p className={styles.tagline}>{siteContent.footer.tagline}</p>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={siteContent.footer.newsletterPlaceholder}
                className={styles.input}
                disabled={status === 'loading' || status === 'success'}
              />
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? '...' : siteContent.footer.newsletterButton}
              </button>
            </div>
            {status === 'success' && (
              <p className={styles.successMessage}>Welcome to Celviar.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMessage}>Please enter a valid email.</p>
            )}
          </form>
        </div>

        {/* Links Grid */}
        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Shop</h4>
            <ul className={styles.linkList}>
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Learn</h4>
            <ul className={styles.linkList}>
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Brand</h4>
            <ul className={styles.linkList}>
              {footerLinks.brand.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Social</h4>
            <ul className={styles.linkList}>
              <li>
                <a href={socialLinks.instagram} className={styles.link} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={socialLinks.tiktok} className={styles.link} target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a href={socialLinks.youtube} className={styles.link} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href={socialLinks.pinterest} className={styles.link} target="_blank" rel="noopener noreferrer">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.logoArea}>
            <Link to="/" className={styles.logo}>
              <img 
                src="/assets/white-logo.png" 
                alt="Celviar" 
                className={styles.logoImage}
              />
            </Link>
          </div>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className={styles.legalLinks}>
            {footerLinks.legal.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link to={link.href} className={styles.legalLink}>{link.label}</Link>
                {index < footerLinks.legal.length - 1 && <span className={styles.separator}>/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
