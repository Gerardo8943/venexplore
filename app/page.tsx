import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import { venezuelaStates } from "@/lib/data";
import { StateAccordion } from "@/components/StateAccordion";
import { FeaturedGuides } from "@/components/FeaturedGuides";
import { SportsTourism } from "@/components/SportsTourism";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

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
                  Empezar ahora
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
              Visita los lugares unicos de Venezuela
              <span className={styles.searchSubtitle}>Preparate para tu siguiente aventura.</span>
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
            />
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES SECTION */}
      <FeaturedGuides />

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.introContentWrapper}>
          <div className={styles.container}>
            <h2 className={styles.animatedText}>Descubre las maravillas de nuestros estados</h2>
            <p className={styles.animatedSubtitle}>
              Vive experiencias unicas, en lugares fascinantes y llenos de vida.
            </p>
          </div>
        </div>
      </section>

        {/* STATES SHOWCASE */}
        <section id="destinations" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Destinos Imperdibles</h2>
              <p className={styles.sectionSubtitle}>Una selección de los tesoros más preciados de nuestra tierra.</p>
            </div>
            {venezuelaStates.slice(0, 3).map((state, index) => (
              <div key={state.id} className={styles.stateBlock}>
                <div className={styles.stateHeader}>
                  <h2 className={styles.stateName}>{state.name}</h2>
                  <p className={styles.stateTagline}>{state.tagline}</p>
                </div>

                {/* Main State Card */}
                <DestinationCard
                  title={state.name}
                  description={state.description}
                  imageUrl={state.mainImage}
                  reverse={index % 2 !== 0}
                />

                {/* Accordion representation for categories */}
                <div style={{ marginTop: '48px' }}>
                  <StateAccordion 
                    items={[
                      {
                        id: 'gastronomy',
                        title: 'Gastronomía',
                        description: state.gastronomy.description,
                        imageUrl: state.gastronomy.imageUrl
                      },
                      {
                        id: 'culture',
                        title: 'Cultura y Eventos',
                        description: state.culture.description,
                        imageUrl: state.culture.imageUrl
                      },
                      {
                        id: 'nature',
                        title: 'Naturaleza',
                        description: state.nature.description,
                        imageUrl: state.nature.imageUrl
                      }
                    ]} 
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.viewAllContainer}>
            <button className={styles.viewAllBtn}>
              Explorar todos los estados
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </section>

        {/* SPORTS TOURISM SECTION */}
        <SportsTourism />

        {/* TESTIMONIALS MARQUEE */}
        <TestimonialsMarquee />

      </main>

      <Footer />
    </>
  );
}
