import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, Container } from '../components';
import { homeContent } from '../content/site';
import { shopifyConfig } from '../config/shopify';
import { socialLinks } from '../config/links';
import styles from './Home.module.css';

export function Home() {
  const productUrl = shopifyConfig.productUrls.richSalve;
  const [activeSlide, setActiveSlide] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Scroll-based gallery animation
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      const rect = gallery.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      ));
      const slideIndex = Math.floor(scrollProgress * 3);
      setActiveSlide(Math.min(slideIndex, 2));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className={styles.hero}>
        <div className={styles.heroVideo}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/img/berries-jar.jpg"
            className={styles.video}
          >
            <source src="/assets/video/cream.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          {/* Brand Wordmark as Title - using logo image */}
          <h1 className={styles.heroTitle}>
            <img 
              src="/assets/white-logo.png" 
              alt="Celviar" 
              className={styles.heroLogo}
            />
          </h1>
          
          <p className={styles.heroSubhead}>
            {homeContent.hero.subhead}
          </p>
          
          <div className={styles.heroCtas}>
            <Button 
              href={productUrl}
              external
              variant="primary"
              size="lg"
            >
              {homeContent.hero.primaryCta.text}
            </Button>
            
            <Button 
              href={homeContent.hero.secondaryCta.href}
              variant="secondary"
              size="lg"
            >
              {homeContent.hero.secondaryCta.text}
            </Button>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Promise Section */}
      <Section variant="cream" spacing="lg">
        <Container size="md">
          <div className={styles.promise}>
            <h2 className={styles.sectionHeadline}>
              {homeContent.promise.headline}
            </h2>
            
            <ul className={styles.promiseBullets}>
              {homeContent.promise.bullets.map((bullet, index) => (
                <li key={index} className={styles.promiseBullet}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Editorial Collage Section */}
      <Section variant="dark" spacing="xl">
        <Container>
          <div className={styles.editorialGrid}>
            <div className={styles.editorialLarge}>
              <img 
                src="/assets/img/champagne-caviar.jpg" 
                alt="Champagne and caviar lifestyle"
                loading="lazy"
              />
            </div>
            <div className={styles.editorialSmall}>
              <img 
                src="/assets/img/berries-bottle.jpg" 
                alt="Berry-inspired skincare"
                loading="lazy"
              />
            </div>
            <div className={styles.editorialSmall}>
              <img 
                src="/assets/img/berry-handbag.jpg" 
                alt="Luxury lifestyle"
                loading="lazy"
              />
            </div>
            <div className={styles.editorialMedium}>
              <img 
                src="/assets/img/female-cream.jpg" 
                alt="Woman applying cream"
                loading="lazy"
              />
            </div>
            <div className={styles.editorialMedium}>
              <img 
                src="/assets/img/male-berry-suit.jpg" 
                alt="Man in berry suit"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Craft & Quality Section (replaces Drop Culture) */}
      <Section variant="cream" spacing="lg">
        <Container size="md">
          <div className={styles.craftSection}>
            <h2 className={styles.sectionHeadline}>
              {homeContent.craftQuality.headline}
            </h2>
            
            <p className={styles.sectionBody}>
              {homeContent.craftQuality.body}
            </p>
            
            <Button 
              href={homeContent.craftQuality.cta.href}
              variant="ghost"
              size="md"
            >
              {homeContent.craftQuality.cta.text} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Sticky Scroll Gallery Section */}
      <div className={styles.stickyGallery} ref={galleryRef}>
        <div className={styles.stickyContent}>
          <div className={styles.stickyText}>
            <h2 className={styles.stickyHeadline}>
              {homeContent.ritual.headline}
            </h2>
            <p className={styles.stickyBody}>
              {homeContent.ritual.body}
            </p>
          </div>
          
          <div className={styles.stickyImages}>
            <div className={`${styles.stickyImage} ${activeSlide >= 0 ? styles.active : ''}`}>
              <img src="/assets/img/berries-jar1.jpg" alt="Rich Salve texture" loading="lazy" />
            </div>
            <div className={`${styles.stickyImage} ${activeSlide >= 1 ? styles.active : ''}`}>
              <img src="/assets/img/berries-jar2.jpg" alt="Rich Salve application" loading="lazy" />
            </div>
            <div className={`${styles.stickyImage} ${activeSlide >= 2 ? styles.active : ''}`}>
              <img src="/assets/img/female-cream1.jpg" alt="Skincare ritual" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* Science x Sensory Split */}
      <Section variant="cream" spacing="lg">
        <Container>
          <div className={styles.split}>
            <div className={styles.splitCard}>
              <h3 className={styles.splitTitle}>
                {homeContent.scienceSensory.science.title}
              </h3>
              <p className={styles.splitCopy}>
                {homeContent.scienceSensory.science.copy}
              </p>
              <Link to={homeContent.scienceSensory.science.link.href} className={styles.splitLink}>
                {homeContent.scienceSensory.science.link.text} →
              </Link>
            </div>
            
            <div className={styles.splitDivider} aria-hidden="true" />
            
            <div className={styles.splitCard}>
              <h3 className={styles.splitTitle}>
                {homeContent.scienceSensory.sensory.title}
              </h3>
              <p className={styles.splitCopy}>
                {homeContent.scienceSensory.sensory.copy}
              </p>
              <Link to={homeContent.scienceSensory.sensory.link.href} className={styles.splitLink}>
                {homeContent.scienceSensory.sensory.link.text} →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Journal Teaser */}
      <Section variant="dark" spacing="lg">
        <Container size="md">
          <div className={styles.journalTeaser}>
            <span className={styles.journalLabel}>Journal</span>
            
            <h2 className={styles.journalHeadline}>
              {homeContent.journalTeaser.headline}
            </h2>
            
            <p className={styles.journalBody}>
              {homeContent.journalTeaser.body}
            </p>
            
            <Button 
              href={homeContent.journalTeaser.cta.href}
              variant="secondary"
              size="md"
            >
              {homeContent.journalTeaser.cta.text}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Lifestyle Image Break */}
      <section className={styles.lifestyleBreak}>
        <div className={styles.lifestyleGrid}>
          <img 
            src="/assets/img/cherries-coffee.jpg" 
            alt="Cherries and coffee lifestyle"
            loading="lazy"
          />
          <img 
            src="/assets/img/berries-bouquet.jpg" 
            alt="Berry bouquet"
            loading="lazy"
          />
          <img 
            src="/assets/img/male-drinking.jpg" 
            alt="Man lifestyle"
            loading="lazy"
          />
        </div>
      </section>

      {/* Social Media Section */}
      <Section variant="cream" spacing="lg">
        <Container size="md">
          <div className={styles.socialSection}>
            <h3 className={styles.socialHeadline}>
              {homeContent.socialMedia.headline}
            </h3>
            
            <div className={styles.socialLinks}>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a 
                href={socialLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                TikTok
              </a>
              <a 
                href={socialLinks.pinterest} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Pinterest
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
