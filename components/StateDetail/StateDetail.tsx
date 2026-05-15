"use client";

import React from 'react';
import type { StateData } from '@/lib/data';
import { StateHero } from '@/components/StateHero';
import { StateInfoPanel } from '@/components/StateInfoPanel';
import { StateCategories } from '@/components/StateCategories';
import styles from './StateDetail.module.css';

interface StateDetailProps {
  state: StateData;
}

export const StateDetail = ({ state }: StateDetailProps) => {
  return (
    <article className={styles.wrapper}>
      <StateHero state={state} />
      <div className={styles.infoSection}>
        <StateInfoPanel
          title={state.name}
          tagline={state.tagline}
          description={state.description}
        />
      </div>
      <div className={styles.categoriesSection}>
        <StateCategories categories={{
          gastronomy: state.gastronomy,
          culture: state.culture,
          nature: state.nature,
        }} />
      </div>
    </article>
  );
};