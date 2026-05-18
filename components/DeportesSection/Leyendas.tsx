"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { leyendas } from '@/lib/deportes-data';
import styles from './Leyendas.module.css';

export const Leyendas = () => {
  return (
    <section className={styles.wrapper} id="leyendas">
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Iconos</span>
        <h2 className={styles.sectionTitle}>Leyendas del deporte venezolano</h2>
        <p className={styles.sectionSubtitle}>
          Gigantes que pusieron a Venezuela en el mapa del deporte mundial.
        </p>
      </div>

      <div className={styles.grid}>
        {leyendas.map((leyenda, i) => (
          <motion.article
            key={leyenda.id}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={leyenda.image}
                alt={leyenda.name}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.deporteTag}>{leyenda.deporte}</div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.name}>{leyenda.name}</h3>
              <p className={styles.description}>{leyenda.description}</p>

              <div className={styles.logros}>
                {leyenda.logros.slice(0, 3).map((logro, j) => (
                  <span key={j} className={styles.logroItem}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
                      <path d="M20 6L9 17L4 12" stroke="#FFD100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {logro}
                  </span>
                ))}
              </div>

              <blockquote className={styles.frase}>
                <svg className={styles.quoteIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/>
                </svg>
                <span className={styles.fraseText}>{leyenda.frase}</span>
              </blockquote>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
