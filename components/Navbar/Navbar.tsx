"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
        
        {/* Left: Menu (Empty to balance flexbox) */}
        <div className={styles.navLeft}></div>
        
        {/* Center: Links */}
        <nav className={styles.navCenter}>
          <Link href="#destinations" className={styles.link}>Destinos</Link>
          <Link href="#experiences" className={styles.link}>Experiencias</Link>
          <Link href="#food" className={styles.link}>Gastronomia</Link>
          <Link href="#about" className={styles.link}>Nosotros</Link>
        </nav>

        {/* Right: Actions */}
        <div className={styles.navRight}>
          <div className={`${styles.searchContainer} ${searchOpen ? styles.searchActive : ''}`}>
            <input 
              type="text" 
              placeholder="¿Qué maravilla buscas?" 
              className={styles.searchInput}
              autoFocus={searchOpen}
            />
            <button 
              className={styles.searchBtn}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
        
      </header>
    </div>
  );
};
