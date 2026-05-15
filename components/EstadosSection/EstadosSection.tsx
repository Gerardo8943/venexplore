"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { venezuelaStates } from '@/lib/data';
import { VenezuelaMapSVG } from '@/components/VenezuelaMapSVG';
import styles from './EstadosSection.module.css';

const featuredStates = venezuelaStates.filter(s =>
  ["falcon", "merida", "miranda", "nueva-esparta"].includes(s.id)
);

const STATE_COLORS: Record<string, string> = {
  falcon: "#FFD100",
  merida: "#E63946",
  miranda: "#2A9D8F",
  "nueva-esparta": "#D4A373",
};

const STATE_ORDER = ["falcon", "merida", "miranda", "nueva-esparta"];

export const EstadosSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sortedStates = [...featuredStates].sort(
    (a, b) => STATE_ORDER.indexOf(a.id) - STATE_ORDER.indexOf(b.id)
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Destinos</span>
        <h2 className={styles.sectionTitle}>Explora Venezuela</h2>
        <p className={styles.sectionSubtitle}>
          Cuatro regiones, infinitas maravillas. Elige tu próximo destino.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.mapColumn}>
          <div className={styles.mapCard}>
            <VenezuelaMapSVG
              activeState={null}
              hoveredState={hoveredId}
              onHover={setHoveredId}
              onClick={(id) => {
                window.location.href = `/destinos/${id}`;
              }}
            />
          </div>
        </div>

        <div className={styles.gridColumn}>
          <div className={styles.cardsGrid}>
            {sortedStates.map((state, i) => {
              const color = STATE_COLORS[state.id] || "#0077B6";
              const isHovered = hoveredId === state.id;

              return (
                <Link
                  key={state.id}
                  href={`/destinos/${state.id}`}
                  className={styles.cardLink}
                >
                  <motion.article
                    className={`${styles.card} ${isHovered ? styles.cardHovered : ""}`}
                    style={{ "--card-color": color } as React.CSSProperties}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                    onMouseEnter={() => setHoveredId(state.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={state.mainImage}
                        alt={state.name}
                        fill
                        className={styles.cardImage}
                        sizes="180px"
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.cardNumber}>0{i + 1}</span>
                      <h3 className={styles.cardName}>{state.name}</h3>
                      <p className={styles.cardTagline}>{state.tagline}</p>
                      <span className={styles.cardArrow}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};