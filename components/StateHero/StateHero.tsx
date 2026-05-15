"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { StateData } from '@/lib/data';
import styles from './StateHero.module.css';

interface StateHeroProps {
  state: StateData;
}

export const StateHero = ({ state }: StateHeroProps) => {
  return (
    <section className={styles.hero}>
      <Image
        src={state.mainImage}
        alt={state.name}
        fill
        className={styles.image}
        sizes="100vw"
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.h2
          className={styles.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {state.name}
        </motion.h2>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {state.tagline}
        </motion.p>
      </div>
    </section>
  );
};