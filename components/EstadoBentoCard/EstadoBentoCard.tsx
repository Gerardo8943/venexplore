"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { StateData } from '@/lib/data';
import styles from './EstadoBentoCard.module.css';

const STATE_COLORS: Record<string, string> = {
  falcon: "#FFD100",
  merida: "#E63946",
  miranda: "#2A9D8F",
  "nueva-esparta": "#0077B6",
};

interface EstadoBentoCardProps {
  state: StateData;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

export const EstadoBentoCard = ({
  state,
  index,
  isActive,
  onHover,
  onLeave,
  onClick,
}: EstadoBentoCardProps) => {
  const accent = STATE_COLORS[state.id] || "#0077B6";

  return (
    <motion.article
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      style={{ "--card-accent": accent } as React.CSSProperties}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={state.mainImage}
          alt={state.name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.number}>0{index + 1}</span>
        <h3 className={styles.name}>{state.name}</h3>
        <p className={styles.tagline}>{state.tagline}</p>
        <div className={styles.arrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
};