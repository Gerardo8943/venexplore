"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineSports } from '@/lib/deportes-data';
import styles from './TimelineDeportes.module.css';

export const TimelineDeportes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const bgRotation = useTransform(scrollYProgress, [0, 1], ['0deg', '360deg']);

  return (
    <section className={styles.wrapper} ref={containerRef} id="deportes-timeline">
      <motion.div
        className={styles.bgOrb}
        style={{ rotate: bgRotation }}
      />

      <div className={styles.header}>
        <span className={styles.sectionLabel}>Tradición</span>
        <h2 className={styles.sectionTitle}>Los deportes que nos definen</h2>
        <p className={styles.sectionSubtitle}>
          Tres disciplinas que encienden el alma venezolana.
        </p>
      </div>

      <div className={styles.container}>
        {timelineSports.map((sport, i) => (
          <motion.div
            key={sport.id}
            className={styles.sportRow}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={`${styles.sportCard} ${styles[i === 1 ? 'reversed' : '']}`}>
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.imageOverlay} style={{ background: `linear-gradient(135deg, ${sport.color}88 0%, transparent 60%)` }} />
                  <div className={styles.sportIcon}>{sport.icon}</div>
                </div>
              </div>

              <div className={styles.contentCol}>
                <div className={styles.sportHeader}>
                  <div className={styles.colorDot} style={{ backgroundColor: sport.color }} />
                  <h3 className={styles.sportName}>{sport.name}</h3>
                </div>
                <p className={styles.sportDescription}>{sport.description}</p>

                <div className={styles.timelineTrack}>
                  <div className={styles.timelineLine} style={{ background: sport.color }} />
                  <div className={styles.hitos}>
                    {sport.hitos.map((hito, j) => (
                      <motion.div
                        key={j}
                        className={styles.hitoItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: j * 0.08 }}
                      >
                        <div className={styles.hitoDot} style={{ borderColor: sport.color }} />
                        <span className={styles.hitoText}>{hito}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
