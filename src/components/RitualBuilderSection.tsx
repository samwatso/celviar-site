import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './RitualBuilderSection.module.css';

// Content for each scroll stage
const stages = [
  {
    id: 'intro',
    image: '/assets/img/product-jar.jpg',
    // No text content - just the intro header
  },
  {
    id: 'multi-use',
    image: '/assets/img/product-jar.jpg',
    title: 'One balm. <strong>Endless uses.</strong>',
    body: 'Rich Salve moves with your ritual — face, body, hair ends. Press it into cheeks for a dewy finish, smooth over dry patches, or polish flyaways with a single scoop.',
  },
  {
    id: 'texture',
    image: '/assets/img/berries-handbagx.jpg',
    title: 'Melts on contact. <strong>Feels like velvet.</strong>',
    body: 'A dual-phase swirl of pearlescent cream and rich berry oil. It warms between fingertips and transforms into a lightweight, cocooning veil that absorbs without residue.',
  },
  {
    id: 'cta',
    image: '/assets/img/berries-jar1.jpg',
    title: 'Your ritual, <strong>simplified.</strong>',
    body: "Whether it's a morning glow, an overnight cocoon, or a midday rescue — Rich Salve adapts. One jar. Zero fuss.",
    hasCta: true,
  },
];

export function RitualBuilderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [imagePosition, setImagePosition] = useState(0); // 0 = centered, 1 = left

  // Calculate scroll progress and update stage
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const scrollStart = window.innerHeight;
    const scrollEnd = rect.height - window.innerHeight;

    // Calculate progress (0 to 1)
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollEnd));

    // Determine current stage (0, 1, 2, or 3)
    const stageCount = stages.length;
    const stage = Math.min(stageCount - 1, Math.floor(progress * stageCount));
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;

    setCurrentStage(stage);

    // On mobile: keep centred and skip the left-shift behaviour
    if (isMobile) {
      setImagePosition(0);
      return;
    }

    // Desktop behaviour (your existing logic)
    if (stage === 0) {
      const stageProgress = (progress * stageCount) % 1;
      setImagePosition(Math.min(1, stageProgress * 2));
    } else {
      setImagePosition(1);
    }
  }, []);

  // Add useEffect for scroll event listener
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Jump to stage on dot click
    const jumpToStage = (index: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      const targetScroll = (index / stages.length) * scrollHeight;
      const containerTop = window.scrollY + rect.top;

      window.scrollTo({
        top: containerTop + targetScroll,
        behavior: 'smooth',
      });
    };

    // Calculate image transform based on position
    // Moves from center (50%) to left (25%) as imagePosition goes 0 -> 1
    const imageStyle: React.CSSProperties = {
      left: `calc(50% - ${imagePosition * 22}%)`,
      transform: `translate(calc(-50% + ${imagePosition * 22}%), -50%)`,
    };

    const isIntroVisible = currentStage === 0 && imagePosition < 0.5;
    const isTextVisible = currentStage > 0 || imagePosition > 0.3;

    return (
      <section className={styles.wrapper}>
        <div ref={containerRef} className={styles.scrollContainer}>
          <div className={styles.stickyViewport}>
            <div className={styles.content}>
              {/* Intro Header (Stage 0) */}
              <div className={`${styles.introHeader} ${!isIntroVisible ? styles.hidden : ''}`}>
                <span className={styles.eyebrow}>Ritual Builder</span>
                <h2 className={styles.mainHeadline}>How will you use it?</h2>
              </div>

              {/* Image Panel */}
              <div className={styles.imagePanel} style={imageStyle}>
                {stages.map((stage, index) => (
                  <img
                    key={stage.id}
                    src={stage.image}
                    alt={stage.title ? stage.title.replace(/<[^>]*>/g, '') : 'Rich Salve product'}
                    className={`${styles.productImage} ${currentStage === index ? styles.active : ''}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              {/* Text Panel (Stages 1, 2, 3) */}
              <div className={`${styles.textPanel} ${isTextVisible ? styles.visible : ''}`}>
                {stages.slice(1).map((stage, index) => {
                  const stageIndex = index + 1; // Offset by 1 since we sliced
                  const isActive = currentStage === stageIndex;

                  return (
                    <div
                      key={stage.id}
                      className={`${styles.textBlock} ${isActive ? styles.active : ''}`}
                    >
                      <h3
                        className={styles.textTitle}
                        dangerouslySetInnerHTML={{ __html: stage.title || '' }}
                      />
                      <p className={styles.textBody}>{stage.body}</p>

                      {stage.hasCta && (
                        <div className={styles.ctaSection}>
                          <Link to="/product/rich-salve" className={styles.primaryCta}>
                            Explore Rich Salve
                          </Link>
                          <Link to="/founding-member" className={styles.secondaryCta}>
                            Become a Founding Member
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Scroll Indicator (Stage 0 only) */}
              <div className={`${styles.scrollIndicator} ${!isIntroVisible ? styles.hidden : ''}`}>
                <span>Scroll</span>
                <div className={styles.scrollLine} />
              </div>

              {/* Progress Dots */}
              <div className={styles.progressDots}>
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    className={`${styles.progressDot} ${currentStage === index ? styles.active : ''}`}
                    onClick={() => jumpToStage(index)}
                    aria-label={`Go to stage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default RitualBuilderSection;