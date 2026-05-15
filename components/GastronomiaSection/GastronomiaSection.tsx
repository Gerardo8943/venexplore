"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { venezuelaGastronomy } from '@/lib/data';
import styles from './GastronomiaSection.module.css';

export const GastronomiaSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const current = el.scrollLeft;
    setScrollProgress(maxScroll > 0 ? current / maxScroll : 0);
    setCanScrollLeft(current > 10);
    setCanScrollRight(current < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className={styles.wrapper} id="gastronomia">
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Sabores</span>
        <h2 className={styles.sectionTitle}>Gastronomía Nacional</h2>
        <p className={styles.sectionSubtitle}>
          Un viaje por los sabores que definen la identidad venezolana.
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        {canScrollLeft && (
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => scrollTo('left')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <div className={styles.track} ref={scrollRef}>
          {venezuelaGastronomy.map((item, i) => (
            <motion.article
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className={styles.imageOverlay} />
                <span className={styles.region}>{item.region}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.dishName}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {canScrollRight && (
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => scrollTo('right')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${scrollProgress * 100}%` }} />
        </div>
        <div className={styles.progressDots}>
          {venezuelaGastronomy.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i / (venezuelaGastronomy.length - 1) <= scrollProgress + 0.1 ? styles.dotActive : ''}`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.scrollWidth / venezuelaGastronomy.length;
                el.scrollTo({ left: cardWidth * i - (el.clientWidth - cardWidth) / 2, behavior: 'smooth' });
              }}
              aria-label={`Ir a ${venezuelaGastronomy[i].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};