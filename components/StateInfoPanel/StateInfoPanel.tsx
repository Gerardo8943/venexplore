"use client";

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './StateInfoPanel.module.css';

interface StateInfoPanelProps {
  title: string;
  tagline: string;
  description: string;
}

export const StateInfoPanel = ({ title, tagline, description }: StateInfoPanelProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${styles.panel} ${isIntersecting ? 'is-visible' : ''} fade-in-up`}
    >
      <span className={styles.tagline}>{tagline}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};