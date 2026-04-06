"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.navbarWrapper}>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        
        {/* Left: Menu */}
        <div className={styles.navLeft}>
          <button className={styles.menuBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span className={styles.menuText}>Menu</span>
          </button>
        </div>
        
        {/* Center: Links */}
        <nav className={styles.navCenter}>
          <a href="#destinations" className={styles.link}>Destinos</a>
          <a href="#experiences" className={styles.link}>Experiencias</a>
          <a href="#about" className={styles.link}>Nosotros</a>
        </nav>

        {/* Right: Actions */}
        <div className={styles.navRight}>
          <button className={styles.searchBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </button>
          <button className={styles.ctaBtn}>
            Empezar
          </button>
        </div>
        
      </header>
    </div>
  );
};
