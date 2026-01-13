import React, { useRef, useEffect, useState } from 'react';
import { Ballpit, Button, Section, Container } from '../components';
import styles from './PdrnSciencePage.module.css';

interface ScrollSection {
  id: string;
  title: string;
  body: string;
}

const whatIsPdrnSections: ScrollSection[] = [
  {
    id: 'origin',
    title: 'Salmon-Derived Regeneration',
    body: 'PDRN (Polydeoxyribonucleotide) is a biocompatible compound derived from salmon DNA. It helps support the appearance of skin renewal through its unique molecular structure.',
  },
  {
    id: 'mechanism',
    title: 'Cellular Communication',
    body: 'PDRN works by helping to improve the look of skin texture and tone. It supports the appearance of firmer, more supple skin through gentle, biomimetic pathways.',
  },
  {
    id: 'benefits',
    title: 'Visible Results',
    body: 'Over time, PDRN helps improve the appearance of fine lines, texture irregularities, and overall skin vitality — revealing a more luminous, youthful-looking complexion.',
  },
];

const proofOfCraftTimeline = [
  {
    id: 'sourcing',
    label: 'Sustainable Sourcing',
    title: 'From Nordic Waters',
    body: 'Our PDRN is ethically sourced from salmon in pristine Nordic seas. Each batch is carefully selected for purity and potency.',
  },
  {
    id: 'extraction',
    label: 'Precision Extraction',
    title: 'Lab-Grade Purification',
    body: 'Through a proprietary low-temperature extraction process, we preserve the delicate molecular integrity of PDRN while achieving pharmaceutical-grade purity.',
  },
  {
    id: 'formulation',
    label: 'Expert Formulation',
    title: 'Balanced Delivery',
    body: 'Our chemists calibrate PDRN concentration to optimize skin absorption. The result: a lightweight serum that delivers visible improvement without heaviness.',
  },
  {
    id: 'testing',
    label: 'Clinical Standards',
    title: 'Verified Performance',
    body: 'Each batch undergoes rigorous stability testing and third-party verification. We ensure consistent quality, batch after batch, year after year.',
  },
];

export function PdrnSciencePage() {
  const [activeWhatIndex, setActiveWhatIndex] = useState(0);
  const [activeProofIndex, setActiveProofIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const whatSectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const proofSectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whatObserverRef = useRef<IntersectionObserver | null>(null);
  const proofObserverRef = useRef<IntersectionObserver | null>(null);

  // Check for mobile device and reduced motion preference
  useEffect(() => {
    // Check if mobile (screen width <= 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  // IntersectionObserver for "What is PDRN" section
  useEffect(() => {
    if (whatObserverRef.current) {
      whatObserverRef.current.disconnect();
    }

    whatObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = whatSectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveWhatIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    whatSectionRefs.current.forEach((ref) => {
      if (ref) whatObserverRef.current?.observe(ref);
    });

    return () => {
      whatObserverRef.current?.disconnect();
    };
  }, []);

  // IntersectionObserver for "Proof of Craft" timeline
  useEffect(() => {
    if (proofObserverRef.current) {
      proofObserverRef.current.disconnect();
    }

    proofObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = proofSectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveProofIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    proofSectionRefs.current.forEach((ref) => {
      if (ref) proofObserverRef.current?.observe(ref);
    });

    return () => {
      proofObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* HERO: Ballpit Background (Desktop Only) */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          {!reducedMotion && !isMobile ? (
            <Ballpit className={styles.ballpit} followCursor={true} />
          ) : (
            <div className={styles.staticBackground} />
          )}
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Advanced Skincare</span>
          <h1 className={styles.heroTitle}>The Science of PDRN</h1>
          <p className={styles.heroSubhead}>
            Discover how salmon-derived molecular science helps improve the appearance of skin renewal, texture, and radiance.
          </p>

          <div className={styles.heroCtas}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById('what-is-pdrn')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore the Science
            </Button>

          </div>
        </div>
      </section>

      {/* SECTION 1: What is PDRN? */}
      <section id="what-is-pdrn" className={styles.whatSection}>
        <Container size="lg">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Foundation</span>
            <h2 className={styles.sectionTitle}>What is PDRN?</h2>
            <p className={styles.sectionIntro}>
              A breakthrough in biomimetic skincare, PDRN represents a new frontier in supporting the appearance of healthy, youthful skin.
            </p>
          </header>

          <div className={styles.whatGrid}>
            {whatIsPdrnSections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => (whatSectionRefs.current[index] = el)}
                className={`${styles.whatCard} ${activeWhatIndex === index ? styles.active : ''}`}
              >
                <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <p className={styles.cardBody}>{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 2: Delivery & Texture */}
      <Section variant="cream" spacing="xl">
        <Container size="md">
          <div className={styles.deliverySection}>
            <div className={styles.deliveryContent}>
              <span className={styles.sectionEyebrow}>Formulation</span>
              <h2 className={styles.sectionTitle}>Delivery & Texture</h2>

              <div className={styles.deliveryBody}>
                <p>
                  Our PDRN serum is formulated as a lightweight, fast-absorbing fluid that melts seamlessly into skin. Unlike heavy creams or tacky serums, it delivers active molecules through a breathable, silky veil.
                </p>
                <p>
                  The texture is designed for layering — it sits beautifully under moisturizer, makeup, or SPF. You'll feel immediate softness, with visible improvements developing over consistent use.
                </p>
                <p>
                  Each drop is calibrated for optimal bioavailability, ensuring PDRN reaches the skin's surface layers where it helps support the appearance of renewal and elasticity.
                </p>
              </div>

              <div className={styles.deliveryFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureDot} />
                  <span>Lightweight, non-greasy formula</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureDot} />
                  <span>Fast-absorbing, no pilling</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureDot} />
                  <span>Layers under any routine</span>
                </div>
              </div>
            </div>

            <div className={styles.deliveryVisual}>
              <img
                src="/assets/img/berries-jar.jpg"
                alt="PDRN Serum texture and delivery"
                className={styles.deliveryImage}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: Proof of Craft (Timeline) */}
      <section className={styles.proofSection}>
        <Container size="lg">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Integrity</span>
            <h2 className={styles.sectionTitle}>Proof of Craft</h2>
            <p className={styles.sectionIntro}>
              From Nordic seas to your ritual — every step is designed with precision, purity, and respect for nature.
            </p>
          </header>

          <div className={styles.timeline}>
            {proofOfCraftTimeline.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (proofSectionRefs.current[index] = el)}
                className={`${styles.timelineItem} ${activeProofIndex >= index ? styles.active : ''}`}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot} />
                  {index < proofOfCraftTimeline.length - 1 && (
                    <div className={styles.timelineLine} />
                  )}
                </div>

                <div className={styles.timelineContent}>
                  <span className={styles.timelineLabel}>{item.label}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineBody}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: Your Ritual */}
      <Section variant="cream" spacing="xl">
        <Container size="md">
          <div className={styles.ritualSection}>
            <span className={styles.sectionEyebrow}>Application</span>
            <h2 className={styles.sectionTitle}>Your Ritual</h2>

            <div className={styles.ritualSteps}>
              <div className={styles.ritualStep}>
                <div className={styles.ritualNumber}>1</div>
                <h3 className={styles.ritualStepTitle}>Cleanse</h3>
                <p className={styles.ritualStepBody}>
                  Start with clean, dry skin. PDRN works best when applied to a fresh canvas.
                </p>
              </div>

              <div className={styles.ritualStep}>
                <div className={styles.ritualNumber}>2</div>
                <h3 className={styles.ritualStepTitle}>Apply</h3>
                <p className={styles.ritualStepBody}>
                  Dispense 2-3 drops into palms. Gently press into face and neck, avoiding eye area.
                </p>
              </div>

              <div className={styles.ritualStep}>
                <div className={styles.ritualNumber}>3</div>
                <h3 className={styles.ritualStepTitle}>Layer</h3>
                <p className={styles.ritualStepBody}>
                  Follow with your favorite moisturizer or balm. Use morning and evening for best results.
                </p>
              </div>
            </div>

            <div className={styles.ritualNote}>
              <p>
                <strong>Pro Tip:</strong> For enhanced results, pair with our Rich Salve to lock in PDRN's benefits and create a cocooning finish.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: Shopify Buy Section */}
      <section id="buy-section" className={styles.buySection}>
        <Container size="md">
          <div className={styles.buyContent}>
            <div className={styles.buyInfo}>
              <h2 className={styles.buyTitle}>PDRN Renewal Serum</h2>
              <p className={styles.buyPrice}>$185 USD</p>

              <div className={styles.buyDescription}>
                <p>
                  A lightweight, fast-absorbing serum that helps improve the appearance of skin texture, tone, and vitality through the power of salmon-derived PDRN.
                </p>
              </div>

              <ul className={styles.buyBullets}>
                <li>30ml / 1 fl oz — 2-3 month supply</li>
                <li>Salmon-derived PDRN at optimal concentration</li>
                <li>Lightweight, non-greasy formula</li>
                <li>Helps support the appearance of renewal</li>
                <li>Free shipping on orders over $150</li>
              </ul>
            </div>

            <div className={styles.buyBox}>
              {/* Shopify Buy Button will be injected here */}
              <div id="shopify-buybox" className={styles.shopifyPlaceholder}>
                <p className={styles.placeholderText}>Shopify Buy Button Placeholder</p>
                <p className={styles.placeholderSubtext}>
                  This div (#shopify-buybox) will be replaced with the Shopify Buy Button embed script.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.buyFootnote}>
            <p>
              <strong>Note:</strong> Results may vary. PDRN is formulated to help improve the appearance of skin texture and tone. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </Container>
      </section>

      {/* Sticky Buy CTA (Desktop only) */}
      <div className={styles.stickyCta}>
        <Button
          variant="primary"
          size="md"
          onClick={() => {
            document.getElementById('shopify-buybox')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Buy PDRN Serum
        </Button>
      </div>
    </div>
  );
}

export default PdrnSciencePage;
