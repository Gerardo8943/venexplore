"use client";

import React from 'react';
import Image from 'next/image';
import styles from './FeaturedGuides.module.css';

const guides = [
  {
    id: 1,
    title: "Canaima: El susurro de los antiguos Tepuyes",
    excerpt: "Descubre el corazón de la Gran Sabana, donde el tiempo se detiene y la naturaleza habla en su forma más pura.",
    category: "Aventura",
    image: "/img/resume/salto_angel.png"
  },
  {
    id: 2,
    title: "Los Roques: El azul que no sabías que existía",
    excerpt: "Un archipiélago de coral donde el degradado del mar caribe desafía cualquier imaginación.",
    category: "Playa",
    image: "/img/hero-section/principal-panel.jpg" // Temporal, use existing for now
  },
  {
    id: 3,
    title: "La Ruta del Chocolate: Un viaje sensorial",
    excerpt: "Desde el árbol hasta la barra, exploramos por qué el cacao venezolano es considerado el mejor del mundo.",
    category: "Gastronomía",
    image: "/img/estados/miranda/miranda-personas.jpg"
  }
];

export const FeaturedGuides = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Guías de Viaje</h2>
          <p className={styles.subtitle}>Crónicas y consejos para que tu próxima aventura en Venezuela sea inolvidable.</p>
        </div>

        <div className={styles.grid}>
          {guides.map((guide) => (
            <div key={guide.id} className={styles.guideCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.category}>{guide.category}</span>
                <h3 className={styles.cardTitle}>{guide.title}</h3>
                <p className={styles.cardExcerpt}>{guide.excerpt}</p>
                <div className={styles.readMore}>
                  Seguir leyendo
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
