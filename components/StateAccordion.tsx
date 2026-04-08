"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './StateAccordion.module.css';

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface StateAccordionProps {
  items: AccordionItem[];
}

export const StateAccordion: React.FC<StateAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={item.id}
            className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className={styles.overlay}></div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.icon}>{isActive ? '−' : '+'}</span>
              </div>
              
              <div className={styles.bodyWrapper}>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
