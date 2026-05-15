import { DestinationsShowcase } from "@/components/DestinationsShowcase";
import { FeaturedGuides } from "@/components/FeaturedGuides";
import { SportsTourism } from "@/components/SportsTourism";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { GastronomiaSection } from "@/components/GastronomiaSection";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
        {/* HERO SECTION - PAPERPILLAR STYLE */}
        <div className={styles.heroWrapper}>
          <section className={styles.hero}>
            <Image
              src="/img/hero-section/principal-panel.jpg"
              alt="Playa calida de Venezuela"
              fill
              className={styles.heroImage}
              priority
              sizes="100vw"
            />
            {/* Subtle gradient for text legibility, much lighter than before */}
            <div className={styles.heroOverlay}></div>

            <div className={styles.heroContentGrid}>
              <h1 className={`fade-in-up is-visible ${styles.heroTitle}`}>Venexplore</h1>

              <div className={`fade-in-up is-visible delay-1 ${styles.heroBottomRight}`}>
                <p className={styles.heroDescription}>
                  Descubre maravillas ocultas y una belleza inigualable.
                  Venezuela te espera para vivir una aventura inolvidable.
                </p>
                <button className={styles.letsGoBtn}>
                  Explorar lugares
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* FLOATING SEARCH BAR (Optional addition to match Dribbble closely) */}
          <div className={`fade-in-up is-visible delay-2 ${styles.searchBar}`}>
            <div className={styles.searchTitle}>
              Visita los destinos unicos de Venezuela
              <span className={styles.searchSubtitle}>Preparate para adentrarte en un pais lleno de maravillas</span>
            </div>
          </div>
      </div>

      {/* ABOUT TOURISM SECTION (Image right, text left) */}
      <section className={styles.aboutTourism}>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>Un paraíso en la tierra, esa es Venezuela</h2>
            <p className={styles.aboutDescription}>
              Nuestro país es un paraíso donde convergen todos los ecosistemas de la Tierra. Desde las cumbres nevadas de los Andes hasta la selva amazónica insondable, pasando por las playas cristalinas del Caribe.
            </p>
            <p className={styles.aboutDescription}>
              Disfruta de la biodiversidad, la calidez inigualable de nuestra gente y una aventura que quedará grabada en tu memoria. Descubre por qué Venezuela es el tesoro mejor guardado para el viajero exquisito.
            </p>
          </div>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/img/resume/salto_angel.png"
              alt="Salto Ángel, caida del agua de manera vertical"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 900px) 100vw, 400px"
            />
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES SECTION */}
      <FeaturedGuides />

      {/* DESTINATIONS SHOWCASE (New cinematic component) */}
      <DestinationsShowcase />

        {/* GASTRONOMIA NACIONAL */}
        <GastronomiaSection />

        {/* SPORTS TOURISM SECTION */}
        <SportsTourism />

        {/* TESTIMONIALS MARQUEE */}
        <TestimonialsMarquee />

      </main>
  );
}
