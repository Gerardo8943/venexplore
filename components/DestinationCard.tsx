"use client";

import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from './Button';
import styles from './DestinationCard.module.css';

interface DestinationCardProps {
  title: string;
  tagline?: string;
  description: string;
  imageUrl: string;
  categoryName?: string;
  reverse?: boolean;
  className?: string;
}

export const DestinationCard = ({
  title,
  tagline,
  description,
  imageUrl,
  categoryName,
  reverse = false,
  className = ""
}: DestinationCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <article 
      ref={ref} 
      className={`fade-in-up ${isIntersecting ? 'is-visible' : ''} ${styles.card} ${reverse ? styles.reverse : ''} ${className}`}
    >
      <div className={styles.imageContainer}>
        {categoryName && <span className={styles.categoryBadge}>{categoryName}</span>}
        <Image 
          src={imageUrl} 
          alt={`Imagen de ${title}`}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Button variant="ghost" className={styles.readMore}>Saber más</Button>
        </div>
      </div>
    </article>
  );
};
