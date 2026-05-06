"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { venezuelaStates } from '@/lib/data';
import styles from './DestinationsShowcase.module.css';

// Obtiene los primerro 3 estados, se puede cambiar el numero
const destinations = venezuelaStates.slice(0, 3);

export const DestinationsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDestination = destinations[currentIndex];

  return (
    <section className={styles.wrapper}>
      {/* Background Image con AnimatePresence para crossfade */}
      <div className={styles.backgroundContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDestination.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <Image
              src={currentDestination.mainImage}
              alt={currentDestination.name}
              fill
              className={styles.image}
              sizes="100vw"
              quality={100}
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.contentContainer}>
        <header>
          <h2 className={styles.header}>Nuestros destinos principales</h2>
        </header>

        <div className={styles.mainContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDestination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className={styles.title}>{currentDestination.name}</h3>
              <p className={styles.description}>{currentDestination.description}</p>
              
              <button className={styles.discoverBtn}>
                Descubre
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <nav className={styles.navigation}>
          {destinations.map((dest, index) => (
            <button
              key={dest.id}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.navItem} ${index === currentIndex ? styles.active : ''}`}
            >
              {dest.name}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};
