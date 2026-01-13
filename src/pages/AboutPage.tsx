import React from 'react';
import { Button, Section, Container } from '../components';
import styles from './AboutPage.module.css';

const approachPillars = [
  {
    id: 'science',
    title: 'Science-Led',
    body: "We study biomimetic ingredients like PDRN and build formulations that respect skin's natural intelligence. No shortcuts, no filler claims.",
  },
  {
    id: 'sensory',
    title: 'Sensorial Luxury',
    body: 'Texture matters. Every formula is calibrated for pleasure—silky, weightless, instantly absorbed. Science should feel indulgent.',
  },
  {
    id: 'simplicity',
    title: 'Radical Simplicity',
    body: "Fewer products. Higher concentration. One balm that works everywhere. We edit ruthlessly so you don't have to.",
  },
  {
    id: 'integrity',
    title: 'Sourcing Integrity',
    body: "From Nordic salmon to botanical extracts, we trace every ingredient. Purity isn't marketing—it's our standard.",
  },
];

const beliefs = [
  'Great skin is a practice, not a prescription.',
  "Luxury is what you feel, not what you're told to buy.",
  "The best routine is the one you'll actually do.",
  'Ingredients should be researched, not hyped.',
  'Results take time. Rituals make it worth it.',
  "You deserve to understand what you're putting on your skin.",
  'Real optimisation is sustainable, not surgical.',
];

export function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container size="md">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Celviar</h1>
            <p className={styles.heroThesis}>
              Modern skincare for people who want better-looking skin without the intervention.
            </p>
            <p className={styles.heroIntro}>
              We're building a new category of at-home skin optimisation—anchored in longevity science, designed for ritual, and obsessed with craft.
            </p>
          </div>
        </Container>
      </section>

      {/* Chapter I: The Beginning */}
      <Section variant="cream" spacing="xl">
        <Container size="md">
          <div className={styles.chapterWithImage}>
            <div className={styles.chapter}>
              <span className={styles.chapterLabel}>Chapter I</span>
              <h2 className={styles.chapterTitle}>How Celviar Began</h2>

              <div className={styles.chapterContent}>
                <p>
                  Celviar started with a question: <em>Why does my skin look worse after trying everything?</em>
                </p>
                <p>
                  Avinash Kalra spent years exploring professional skin treatments—lasers, peels, injectables—chasing the promise of "better skin." But the results were inconsistent. The downtime was real. And the dependence on appointments felt endless.
                </p>
                <p>
                  So he went deeper. He studied dermatology research, interviewed formulation chemists, and became obsessed with one question: <strong>What if the best skin optimisation didn't require a clinic?</strong>
                </p>
                <p>
                  That curiosity led him to PDRN—a biomimetic compound derived from salmon DNA, used in South Korean aesthetic clinics to support the appearance of skin renewal. It was elegant, under-the-radar, and scientifically fascinating. But it wasn't accessible. There were no luxury at-home formulations. No brands building around it with integrity.
                </p>
                <p>
                  Celviar was born from that gap: a brand for people who want science-backed skin optimisation without the needles, the hype, or the guesswork.
                </p>
              </div>
            </div>

            {/* Founder Portrait Image */}
            <div className={styles.founderImage}>
              <div
                className={styles.imagePlaceholder}
                style={{ backgroundImage: 'url(/assets/img/avi-bw.png)' }}
              >
                <span className={styles.placeholderText}>Founder Portrait</span>
              </div>
              <p className={styles.imageCaption}>Avinash Kalra, Founder</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder Quote */}
      <section className={styles.quoteSection}>
        <Container size="md">
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>
              I didn't want another serum. I wanted a new standard—products that actually improve the look of skin over time, with ingredients you can trace and rituals you'll keep.
            </p>
            <cite className={styles.quoteCite}>— Avinash Kalra, Founder</cite>
          </blockquote>
        </Container>
      </section>

      {/* Chapter II: Why Now */}
      <Section variant="cream" spacing="xl">
        <Container size="md">
          <div className={styles.chapter}>
            <span className={styles.chapterLabel}>Chapter II</span>
            <h2 className={styles.chapterTitle}>Why Now</h2>

            <div className={styles.chapterContent}>
              <p>
                We're living through a shift. Longevity science is moving from labs to living rooms. People are optimising sleep, diet, movement—and increasingly, <em>skin</em>.
              </p>
              <p>
                But the skincare industry hasn't caught up. It's still stuck between two extremes: clinical treatments that require a dermatologist, or mass-market products that overpromise and underdeliver.
              </p>
              <p>
                <strong>Celviar sits in the middle.</strong> We're inspired by aesthetic medicine, but built for daily ritual. We formulate with PDRN-based ingredients and biomimetic compounds that help support the appearance of skin renewal—without the needles, the downtime, or the dependence on appointments.
              </p>
              <p>
                This is skincare for people who think long-term. Who want results, not routines. Who value science, but refuse to sacrifice sensory pleasure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lab Image Break */}
      <section className={styles.labImageSection}>
        <Container size="lg">
          <div className={styles.labImageContainer}>
            <div
              className={styles.labImagePlaceholder}
              style={{ backgroundImage: 'url(/assets/img/cherries-coffee-bw.jpg)' }}
            >
              <span className={styles.placeholderText}>Lab Testing</span>
            </div>
            <p className={styles.imageCaption}>Formulation development and ingredient testing</p>
          </div>
        </Container>
      </section>

      {/* Chapter III: Our Approach */}
      <Section variant="default" spacing="xl">
        <Container size="md">
          <div className={styles.chapter}>
            <span className={styles.chapterLabel}>Chapter III</span>
            <h2 className={styles.chapterTitle}>Our Approach</h2>
          </div>

          <div className={styles.pillars}>
            {approachPillars.map((pillar) => (
              <div key={pillar.id} className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What We Believe */}
      <Section variant="dark" spacing="xl">
        <Container size="md">
          <div className={styles.beliefs}>
            <h2 className={styles.beliefsTitle}>What We Believe</h2>
            <ul className={styles.beliefsList}>
              {beliefs.map((belief, index) => (
                <li key={index} className={styles.beliefItem}>
                  {belief}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Chapter IV: What's Next */}
      <Section variant="cream" spacing="xl">
        <Container size="md">
          <div className={styles.chapterWithSmallImage}>
            <div className={styles.chapter}>
              <span className={styles.chapterLabel}>Chapter IV</span>
              <h2 className={styles.chapterTitle}>What's Next</h2>

              <div className={styles.chapterContent}>
                <p>
                  We launched with <strong>Rich Salve</strong>—a multi-use balm designed to simplify your ritual without compromising results. It's the foundation of what we're building: fewer products, better ingredients, real craft.
                </p>
                <p>
                  Next, we're introducing our <strong>PDRN Renewal Serum</strong>—a lightweight formula inspired by aesthetic medicine, calibrated for at-home use, and designed to support the appearance of skin texture and tone over time.
                </p>
                <p>
                  This is just the beginning. We're building a new category: <em>longevity skincare for daily life</em>. No hype. No shortcuts. Just science, ritual, and integrity.
                </p>
              </div>
            </div>

            {/* Founder Working Detail Image */}
            <div className={styles.detailImage}>
              <div
                className={styles.smallImagePlaceholder}
                style={{ backgroundImage: 'url(/assets/img/female-male-eating-bw.jpeg)' }}
              >
                <span className={styles.placeholderText}>Detail</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container size="md">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Start Your Ritual</h2>
            <p className={styles.ctaBody}>
              Explore our foundational balm or join the waitlist for our PDRN Renewal Serum.
            </p>

            <div className={styles.ctaButtons}>
              <Button
                href="/product/rich-salve"
                variant="primary"
                size="lg"
              >
                Explore Rich Salve
              </Button>

              <Button
                href="/waitlist"
                variant="secondary"
                size="lg"
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;
