"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isHome
    ? `${styles.header} ${isScrolled ? styles.scrolled : ''}`
    : `${styles.header} ${styles.static}`;

  const wrapperClass = isHome
    ? styles.navbarWrapper
    : `${styles.navbarWrapper} ${styles.wrapperStatic}`;

  return (
    <div className={wrapperClass}>
      <header className={headerClass}>
        
        {/* Left: Menu (Empty to balance flexbox) */}
        <div className={styles.navLeft}></div>
        
        {/* Center: Links */}
        <nav className={styles.navCenter}>

          <Link href="/" className={styles.link}>Inicio</Link>
          <Link href="/destinos" className={styles.link}>Destinos</Link>
          <Link href="/deportes" className={styles.link}>Deportes</Link>
          <Link href="/#gastronomia" className={styles.link}>Gastronomía</Link>
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
