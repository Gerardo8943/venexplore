import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandInfo}>
            <h2 className={styles.brandName}>Venexplore</h2>
            <p className={styles.brandDesc}>
              Descubriendo el lujo en la naturaleza virgen de Venezuela. Curaduría de experiencias incomparables.
            </p>
          </div>
          
          <div className={styles.linksGroup}>
            <h3 className={styles.linkTitle}>Explora</h3>
            <Link href="#destinations" className={styles.link}>Destinos</Link>
            <Link href="#gastronomy" className={styles.link}>Gastronomía</Link>
            <Link href="#culture" className={styles.link}>Cultura Local</Link>
          </div>

          <div className={styles.linksGroup}>
            <h3 className={styles.linkTitle}>Compañía</h3>
            <Link href="#about" className={styles.link}>Sobre Nosotros</Link>
            <Link href="#contact" className={styles.link}>Contacto</Link>
            <Link href="#terms" className={styles.link}>Términos y Condiciones</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Venexplore Tourism. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
