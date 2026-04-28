//se va a cambiar
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './VenezuelaMap.module.css';

// Dynamically load the Leaflet map so it bypasses SSR and avoids window errors
const MapComponent = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Cargando Mapa Interactivo...</div>
});

export const VenezuelaMap = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Explora el Mapa</h2>
          <p className={styles.subtitle}>Toca los marcadores azules en nuestro mapa satelital para descubrir grandes destinos.</p>
        </div>

        <div className={styles.mapArea}>
          <div className={styles.leafletWrapper}>
             <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};
