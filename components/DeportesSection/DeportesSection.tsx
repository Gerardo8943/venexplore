"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { venezuelaSports } from '@/lib/data';
import styles from './DeportesSection.module.css';

export const DeportesSection = () => {
  return (
    <section className={styles.wrapper} id="deportes">
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Pasión</span>
        <h2 className={styles.sectionTitle}>Deportes Nacionales</h2>
        <p className={styles.sectionSubtitle}>
          El alma competitiva de Venezuela late en cada disciplina.
        </p>
      </div>

      <div className={styles.timeline}>
        {venezuelaSports.map((sport, i) => (
          <motion.div
            key={sport.id}
            className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={styles.card} style={{ '--sport-color': sport.color } as React.CSSProperties}>
              <div className={styles.imageWrapper}>
                <Image
                  src={sport.image}
                  alt={sport.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.content}>
                <div className={styles.iconCircle}>
                  <span className={styles.iconNumber}>0{i + 1}</span>
                </div>
                <h3 className={styles.sportName}>{sport.name}</h3>
                <span className={styles.subtitle}>{sport.subtitle}</span>
                <p className={styles.description}>{sport.description}</p>
              </div>
            </div>

            <div className={styles.timelineDot} style={{ backgroundColor: sport.color }}>
              <div className={styles.dotPulse} style={{ borderColor: sport.color }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.timelineLine} />
    </section>
  );
};