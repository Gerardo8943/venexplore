"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { momentos } from '@/lib/deportes-data';
import styles from './Momentos.module.css';

function VideoThumbnail({ videoId, title }: { videoId: string; title: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <img
      src={
        imgError
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      }
      alt={title}
      className={styles.thumbnailImg}
      loading="lazy"
      onError={() => setImgError(true)}
    />
  );
}

export const Momentos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className={styles.wrapper} id="momentos">
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Eternos</span>
        <h2 className={styles.sectionTitle}>Momentos inolvidables</h2>
        <p className={styles.sectionSubtitle}>
          Instantes que paralizaron al país y quedaron grabados en la memoria colectiva.
        </p>
      </div>

      <div className={styles.grid}>
        {momentos.map((momento, i) => (
          <motion.article
            key={momento.id}
            className={`${styles.card} ${activeVideo === momento.id ? styles.active : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={styles.videoWrapper}>
              {activeVideo === momento.id ? (
                <div className={styles.embedContainer}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${momento.videoId}?autoplay=1&rel=0`}
                    title={momento.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.iframe}
                    loading="lazy"
                  />
                </div>
              ) : (
                <button
                  className={styles.thumbnail}
                  onClick={() => setActiveVideo(momento.id)}
                  aria-label={`Reproducir: ${momento.title}`}
                >
                  <VideoThumbnail
                    videoId={momento.videoId}
                    title={momento.title}
                  />
                  <div className={styles.thumbnailOverlay} />
                  <div className={styles.playBtn}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                    </svg>
                  </div>
                  <span className={styles.duration}>{momento.year}</span>
                </button>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.category}>{momento.category}</span>
                <span className={styles.year}>{momento.year}</span>
              </div>
              <h3 className={styles.title}>{momento.title}</h3>
              <p className={styles.description}>{momento.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
