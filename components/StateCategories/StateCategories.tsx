"use client";

import React from 'react';
import type { Category } from '@/lib/data';
import { DestinationCard } from '@/components/DestinationCard';
import styles from './StateCategories.module.css';

interface StateCategoriesProps {
  categories: {
    gastronomy: Category;
    culture: Category;
    nature: Category;
  };
}

export const StateCategories = ({ categories }: StateCategoriesProps) => {
  const items = [
    { ...categories.gastronomy, key: 'gastronomy', label: 'Gastronomía' },
    { ...categories.culture, key: 'culture', label: 'Cultura' },
    { ...categories.nature, key: 'nature', label: 'Naturaleza' },
  ];

  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <DestinationCard
          key={item.key}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          categoryName={item.label}
          reverse={false}
        />
      ))}
    </div>
  );
};