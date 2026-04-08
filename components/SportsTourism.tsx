"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './SportsTourism.module.css';

export const SportsTourism = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Turismo Deportivo</h2>
          <p className={styles.subtitle}>Siente la adrenalina y la pasión en escenarios de clase mundial.</p>
        </div>
      </div>

      <div className={styles.parallaxContainer}>
        {/* Layer 1: Kitesurf Margarita */}
        <div className={styles.parallaxPane}>
          <div className={styles.imageBox}>
            <Image 
              src="/img/deportes/landing-sports/kitesurfing.jpg"
              alt="Kitesurf en El Yaque, Margarita"
              fill
              className={styles.image}
              sizes="100vw"
              priority
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.contentBox}>
            <h3>Kitesurf en Margarita</h3>
            <p>Con vientos alisios perfectos todo el año, Playa El Yaque es la meca mundial para los amantes del Kitesurf y Windsurf.</p>
          </div>
        </div>

        {/* Layer 2: Parapente Mérida */}
        <div className={styles.parallaxPane}>
          <div className={styles.imageBox}>
            <Image 
              src="/img/deportes/landing-sports/parapentev2.jpg"
              alt="Parapente en Mérida"
              fill
              className={styles.image}
              sizes="100vw"
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.contentBox}>
            <h3>Vuela sobre los Andes</h3>
            <p>Despega desde Tierra Negra en Mérida y siente la inmensidad de las montañas en un inolvidable vuelo en parapente.</p>
          </div>
        </div>

        {/* Layer 3: Béisbol Caracas */}
        <div className={styles.parallaxPane}>
          <div className={styles.imageBox}>
            <Image 
              src="https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=1200&h=800"
              alt="Béisbol en Estadio Monumental Simón Bolívar"
              fill
              className={styles.image}
              sizes="100vw"
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.contentBox}>
            <h3>Pasión Nacional: Beisbol</h3>
            <p>Vive la emoción inigualable de nuestra pelota criolla en el imponente Estadio Monumental Simón Bolívar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
