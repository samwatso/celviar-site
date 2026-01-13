import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, Container, BalmExplainedSection, RitualBuilderSection } from '../components';
import { homeContent } from '../content/site';
import { shopifyConfig } from '../config/shopify';
import { socialLinks } from '../config/links';
import styles from './Home.module.css';

export function Home() {
  const productUrl = shopifyConfig.productUrls.richSalve;

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

      {/* The Balm, Explained - Interactive Section */}
      <BalmExplainedSection />

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

      {/* Ritual Builder Section */}
      <RitualBuilderSection />

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

    </>
  );
}
