"use client";

import React from 'react';
import { HeroDeportes } from './HeroDeportes';
import { Leyendas } from './Leyendas';
import { TimelineDeportes } from './TimelineDeportes';
import { Momentos } from './Momentos';

export const DeportesSection = () => {
  return (
    <>
      <HeroDeportes />
      <Leyendas />
      <TimelineDeportes />
      <Momentos />
    </>
  );
};
