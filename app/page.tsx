import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import { venezuelaStates } from "@/lib/data";
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
              src="/hero-photo/principal-panel.jpg"
              alt="Imponente paisaje venezolano"
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
                  Disfruta de una aventura inolvidable en este destino premium.
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

        {/* INTRODUCTION */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Nuestra Curaduría</h2>
            <p className={styles.sectionSubtitle}>
              Experiencias transformadoras diseñadas para el viajero exigente.
            </p>
          </div>
        </section>

        {/* STATES SHOWCASE */}
        <section id="destinations" className={styles.section}>
          <div className={styles.container}>
            {venezuelaStates.map((state, index) => (
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

                {/* Sub Categories Grid */}
                <div className={styles.categoriesGrid}>
                  <div className={styles.categoryCol}>
                    <DestinationCard
                      title={state.gastronomy.title}
                      description={state.gastronomy.description}
                      imageUrl={state.gastronomy.imageUrl}
                      categoryName="Gastronomía"
                      className={styles.categoryCardOverride}
                    />
                  </div>
                  <div className={styles.categoryCol}>
                    <DestinationCard
                      title={state.culture.title}
                      description={state.culture.description}
                      imageUrl={state.culture.imageUrl}
                      categoryName="Cultura"
                      className={styles.categoryCardOverride}
                    />
                  </div>
                  <div className={styles.categoryCol}>
                    <DestinationCard
                      title={state.nature.title}
                      description={state.nature.description}
                      imageUrl={state.nature.imageUrl}
                      categoryName="Naturaleza"
                      className={styles.categoryCardOverride}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
