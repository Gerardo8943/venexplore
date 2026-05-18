"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroDeportes.module.css';

export const HeroDeportes = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/img/deportes/hero-beisbol.webp"
        alt="Selección de Venezuela celebrando el título del Clásico Mundial de Béisbol 2026"
        fill
        className={styles.heroImage}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pasión que une a una nación
          </motion.span>

          <h1 className={styles.title}>Deportes nacionales</h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            El alma competitiva de Venezuela late en cada rincón del país. Del diamante al ring,
            de la cancha a la pista —somos una potencia forjada con garra y corazón.
          </motion.p>

          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1.er</span>
              <span className={styles.statLabel}>Título Clásico Mundial</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Medallas Olímpicas de Oro</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>400+</span>
              <span className={styles.statLabel}>Atletas en el exterior</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.flagBar}>
        <span className={styles.flagYellow} />
        <span className={styles.flagBlue} />
        <span className={styles.flagRed} />
      </div>
    </section>
  );
};
