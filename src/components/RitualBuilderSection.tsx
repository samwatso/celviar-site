import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RitualBuilderSection.module.css';

interface Step {
  id: string;
  title: string;
  body: string;
  imageIndex: number;
  hasCta?: boolean;
}

const images = [
  { src: '/assets/img/berry-paintbrush.jpg', alt: 'Celviar Rich Salve product jar with dual-phase swirl' },
  { src: '/assets/img/female-cream1.jpg', alt: 'Rich Salve in luxury handbag for on-the-go use' },
  { src: '/assets/img/female-cream.jpg', alt: 'Rich Salve dual-phase berry swirl texture close-up' },
  { src: '/assets/img/berries-jar2.jpg', alt: 'Luxurious lifestyle moment with Rich Salve' },
];

const steps: Step[] = [
  {
    id: 'multi-use',
    title: 'One balm. Endless uses.',
    body: 'Rich Salve moves with your ritual — face, body, hair ends. Press it into cheeks for a dewy finish, smooth over dry patches, or polish flyaways with a single scoop.',
    imageIndex: 0,
  },
  {
    id: 'texture',
    title: 'Melts on contact. Feels like velvet.',
    body: 'A dual-phase swirl of pearlescent cream and rich berry oil. It warms between fingertips and transforms into a lightweight, cocooning veil that absorbs without residue.',
    imageIndex: 1,
  },
  {
    id: 'versatility',
    title: 'From morning glow to overnight cocoon.',
    body: 'Layer it under makeup for a dewy base. Press into pulse points for lasting hydration. Apply generously as a sleeping mask for visibly rested skin.',
    imageIndex: 2,
  },
  {
    id: 'cta',
    title: 'Your ritual, simplified.',
    body: "Whether it's a morning glow, an overnight cocoon, or a midday rescue — Rich Salve adapts. One jar. Zero fuss.",
    imageIndex: 3,
    hasCta: true,
  },
];

export function RitualBuilderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        // Trigger slightly earlier to ensure smooth transitions
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section className={styles.section}>
      {/* Mobile Header (Fixed over fullscreen images on mobile) */}
      <header className={styles.mobileHeader}>
        <span className={styles.eyebrow}>Ritual Builder</span>
        <h2 className={styles.headline}>How will you use it?</h2>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* IMAGE COLUMN (Left on Desktop) */}
          <div className={styles.imageColumn}>
            <div className={styles.stickyWrapper}>
              <div className={styles.imageStack}>
                <div className={styles.imageOverlay} />
                
                {images.map((image, index) => {
                  const isRevealed = index === 0 || index <= activeIndex;
                  return (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      style={{ zIndex: index }}
                      className={`${styles.image} ${isRevealed ? styles.revealed : ''}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  );
                })}

                {/* Image Count Indicator */}
                <div className={styles.imageCount}>
                  {activeIndex + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>

          {/* TEXT COLUMN (Right on Desktop) */}
          <div className={styles.stepsColumn}>
            
            {/* Desktop Header */}
            <header className={styles.desktopHeader}>
              <span className={styles.eyebrow}>Ritual Builder</span>
              <h2 className={styles.headline}>How will you use it?</h2>
            </header>

            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`${styles.step} ${activeIndex === index ? styles.active : ''}`}
              >
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                  
                  {step.hasCta && (
                    <div className={styles.ctaGroup}>
                      <Link to="/product/rich-salve" className={styles.primaryCta}>
                        Explore Rich Salve
                      </Link>
                      <Link to="/waitlist" className={styles.secondaryCta}>
                        Join the Waitlist
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default RitualBuilderSection;