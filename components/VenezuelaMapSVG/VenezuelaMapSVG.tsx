"use client";

import React from 'react';
import styles from './VenezuelaMapSVG.module.css';

interface VenezuelaMapSVGProps {
  activeState: string | null;
  hoveredState: string | null;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
}

const STATE_PATHS: Record<string, { d: string; label: string; cx: number; cy: number }> = {
  falcon: {
    d: "M55,110 C70,88 110,80 130,86 L145,90 L155,135 C150,148 130,156 110,155 C90,154 60,145 55,130 Z",
    label: "Falcón",
    cx: 105,
    cy: 118
  },
  merida: {
    d: "M75,210 C90,190 115,180 130,185 L148,195 L155,245 C150,265 125,275 90,270 C70,266 60,245 65,225 Z",
    label: "Mérida",
    cx: 110,
    cy: 230
  },
  laguaira: {
    d: "M175,72 C190,65 215,62 235,65 L245,70 L255,102 C250,112 230,118 210,115 C190,112 170,100 175,85 Z",
    label: "La Guaira",
    cx: 212,
    cy: 88
  },
  miranda: {
    d: "M160,130 C185,120 215,118 240,125 L260,135 L268,185 C262,200 235,208 200,205 C175,202 155,185 150,160 Z",
    label: "Miranda",
    cx: 210,
    cy: 162
  },
  "nueva-esparta": {
    d: "M365,28 C378,22 395,24 405,32 L410,42 L412,65 C408,78 390,84 375,78 C360,72 350,52 355,38 Z",
    label: "Nueva Esparta",
    cx: 385,
    cy: 52
  }
};

const COLORS: Record<string, string> = {
  falcon: "#FFD100",
  merida: "#E63946",
  laguaira: "#0077B6",
  miranda: "#2A9D8F",
  "nueva-esparta": "#D4A373"
};

export const VenezuelaMapSVG = ({ activeState, hoveredState, onHover, onClick }: VenezuelaMapSVGProps) => {
  return (
    <svg
      viewBox="0 0 500 550"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Venezuela base outline */}
      <path
        d="M120,68 C150,60 200,55 250,52 C300,50 340,58 370,72 L385,82 L392,110 L388,145 L380,180 L370,230 L355,290 L335,360 L310,420 L285,470 L260,500 L235,510 L210,500 L180,480 L155,445 L130,395 L105,340 L80,275 L60,215 L48,165 L50,125 C52,100 70,82 95,75 Z"
        className={styles.baseOutline}
      />

      {/* Reference grid lines for states */}
      <path
        d="M120,68 C150,60 200,55 250,52 C300,50 340,58 370,72 L385,82 L392,110 L388,145 L380,180 L370,230 L355,290 L335,360 L310,420 L285,470 L260,500 L235,510 L210,500 L180,480 L155,445 L130,395 L105,340 L80,275 L60,215 L48,165 L50,125 C52,100 70,82 95,75 Z"
        className={styles.baseBorder}
      />

      {/* State regions */}
      {Object.entries(STATE_PATHS).map(([id, path]) => {
        const isActive = activeState === id || hoveredState === id;
        const color = COLORS[id];

        return (
          <g key={id} className={styles.stateGroup}>
            <path
              d={path.d}
              className={`${styles.statePath} ${isActive ? styles.stateActive : ''}`}
              style={{
                '--state-color': color,
                fill: isActive ? color : `${color}55`,
                stroke: isActive ? color : `${color}88`,
                strokeWidth: isActive ? 3 : 1.5,
              } as React.CSSProperties}
              onMouseEnter={() => onHover(id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onClick(id)}
            />
            <text
              x={path.cx}
              y={path.cy}
              className={`${styles.stateLabel} ${isActive ? styles.labelActive : ''}`}
              style={{
                fill: isActive ? '#fff' : '#666',
                fontWeight: isActive ? 700 : 500,
              }}
            >
              {path.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};