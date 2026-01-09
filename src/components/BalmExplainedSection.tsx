import React, { useState, useCallback } from 'react';
import styles from './BalmExplainedSection.module.css';

interface BalmItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const balmItems: BalmItem[] = [
  {
    id: 1,
    title: 'Face, Body & Hair — One Icon',
    description: 'A true multi-tasking luxury balm designed to simplify your ritual without compromising the finish. Press into cheeks, smooth over dry areas, or polish hair ends with a soft, dewy sheen.',
    image: '/assets/img/product-jar.jpg',
    imageAlt: 'Celviar Rich Salve product jar',
  },
  {
    id: 2,
    title: 'The Signature Dual-Phase Swirl',
    description: 'Two complementary phases folded into one jar for a sensorial experience — rich cushion, effortless glide, and an elegant finish that feels considered every time you scoop.',
    image: '/assets/img/berries-jar.jpg',
    imageAlt: 'Rich Salve dual-phase swirl texture',
  },
  {
    id: 3,
    title: 'Powered by Sodium PDRN',
    description: 'Formulated with salmon-derived sodium PDRN to support skin that looks refreshed, smoother, and more hydrated — the kind of ingredient choice you feel in the texture and see in the finish.',
    image: '/assets/img/berries-bottle.jpg',
    imageAlt: 'Premium skincare ingredients',
  },
  {
    id: 4,
    title: 'Cushion-Soft Nourishment, Built In',
    description: 'A buttery base of oils and butters melts on contact to comfort dryness and lock in hydration, leaving skin feeling supple, not sticky.',
    image: '/assets/img/champagne-caviar.jpg',
    imageAlt: 'Luxurious texture and nourishment',
  },
  {
    id: 5,
    title: 'Plumper Feel. Smoother Look.',
    description: 'Designed for visible polish: skin feels more cushioned and looks more even, with a subtle glow that elevates bare skin and layers beautifully over routine staples.',
    image: '/assets/img/female-cream.jpg',
    imageAlt: 'Smooth, radiant skin results',
  },
  {
    id: 6,
    title: 'Targeted Use, Anytime You Need It',
    description: 'Keep it close for quick fixes — lips, cuticles, elbows, knees — and for finishing touches before you step out.',
    image: '/assets/img/berry-handbag.jpg',
    imageAlt: 'Portable luxury skincare',
  },
];

export function BalmExplainedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  const handleItemClick = useCallback((index: number) => {
    if (index === activeIndex) return;
    
    setExitingIndex(activeIndex);
    setActiveIndex(index);
    
    setTimeout(() => {
      setExitingIndex(null);
    }, 500);
  }, [activeIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(index);
    }
  }, [handleItemClick]);

  const handlePrev = useCallback(() => {
    const newIndex = activeIndex === 0 ? balmItems.length - 1 : activeIndex - 1;
    handleItemClick(newIndex);
  }, [activeIndex, handleItemClick]);

  const handleNext = useCallback(() => {
    const newIndex = activeIndex === balmItems.length - 1 ? 0 : activeIndex + 1;
    handleItemClick(newIndex);
  }, [activeIndex, handleItemClick]);

  const currentItem = balmItems[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Content (Desktop) */}
          <div className={styles.content}>
            <h2 className={styles.headline}>The Balm, Explained</h2>
            <p className={styles.subhead}>
              Tap a heading to reveal what makes Celviar Rich Salve different — and why it earns a permanent place on your shelf.
            </p>

            {/* Accordion List */}
            <div className={styles.accordionList} role="tablist">
              {balmItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                >
                  <button
                    className={styles.accordionButton}
                    onClick={() => handleItemClick(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`panel-${item.id}`}
                    role="tab"
                    id={`tab-${item.id}`}
                  >
                    <span className={styles.indicator} aria-hidden="true" />
                    <span className={styles.accordionTitle}>{item.title}</span>
                    <span className={styles.accordionIcon} aria-hidden="true">
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 4.5L6 8.5L10 4.5" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={styles.accordionContent}
                    role="tabpanel"
                    id={`panel-${item.id}`}
                    aria-labelledby={`tab-${item.id}`}
                    hidden={activeIndex !== index}
                  >
                    <div className={styles.accordionInner}>
                      <p className={styles.accordionText}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Panel */}
          <div className={styles.imagePanel}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
              <h2 className={styles.mobileHeadline}>The Balm, Explained</h2>
            </div>

            <div className={styles.imageWrapper}>
              {balmItems.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.imageAlt}
                  className={`${styles.image} ${
                    activeIndex === index ? styles.active : ''
                  } ${exitingIndex === index ? styles.exiting : ''}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
            
            <div className={styles.imageOverlay} aria-hidden="true" />
            
            {/* Desktop indicator */}
            <div className={styles.imageIndicator}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(balmItems.length).padStart(2, '0')}
            </div>

            {/* Mobile Overlay */}
            <div className={styles.mobileOverlay}>
              {/* Text Card */}
              <div className={styles.mobileTextCard}>
                <span className={styles.mobileTitle}>{currentItem.title}.</span>{' '}
                <span className={styles.mobileDescription}>{currentItem.description}</span>
              </div>

              {/* Navigation */}
              <div className={styles.mobileNav}>
                <button 
                  className={styles.navButton}
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18L9 12L15 6" />
                  </svg>
                </button>

                {/* Dots */}
                <div className={styles.dotsIndicator}>
                  {balmItems.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
                      onClick={() => handleItemClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  className={styles.navButton}
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BalmExplainedSection;