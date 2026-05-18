export interface Leyenda {
  id: string;
  name: string;
  deporte: string;
  description: string;
  frase: string;
  image: string;
  logros: string[];
}

export interface Momento {
  id: string;
  title: string;
  description: string;
  videoId: string;
  year: string;
  category: string;
}

export interface TimelineSport {
  id: string;
  name: string;
  color: string;
  description: string;
  icon: string;
  image: string;
  hitos: string[];
}

export const leyendas: Leyenda[] = [
  {
    id: "luis-aparicio",
    name: "Luis Aparicio",
    deporte: "Béisbol",
    description: "El pionero. Primer venezolano exaltado al Salón de la Fama de Cooperstown. Campocorto legendario de los White Sox y Orioles, ganador de la Serie Mundial de 1966 y nueve Guantes de Oro consecutivos.",
    frase: "El béisbol es un deporte de respeto, disciplina y pasión. Nunca olvides de dónde vienes y quién te apoyó en el camino.",
    image: "/img/deportes/luis-aparicio.webp",
    logros: ["Salón de la Fama de Cooperstown (1984)", "9 Guantes de Oro", "Novato del Año 1956", "Campeón Serie Mundial 1966"]
  },
  {
    id: "miguel-cabrera",
    name: "Miguel Cabrera",
    deporte: "Béisbol",
    description: "Triple Corona de bateo en 2012, dos MVP de la Liga Americana, 500+ jonrones y miembro del Club de los 3,000 hits. Considerado uno de los mejores bateadores derechos de la historia.",
    frase: "Se tiene que tener compromiso con el país. Representar a Venezuela es el honor más grande que puede tener un pelotero.",
    image: "/img/deportes/miguel-cabrera.webp",
    logros: ["Triple Corona (2012)", "2x MVP Liga Americana", "500 HR / 3,000 Hits", "11x Juego de Estrellas"]
  },
  {
    id: "juan-arango",
    name: "Juan Arango",
    deporte: "Fútbol",
    description: "El mejor futbolista venezolano de todos los tiempos. Brilló en el Mallorca, Borussia Mönchengladbach y la Vinotinto. Su golpeo de balón y precisión en tiros libres lo convirtieron en una leyenda.",
    frase: "Ser venezolano es llevar la Vinotinto en el pecho, no importa dónde estés. Cada gol es un grito de esperanza para nuestro país.",
    image: "/img/deportes/juan-arango.webp",
    logros: ["Máximo goleador histórico de la Vinotinto", "Copa del Rey con Mallorca (2003)", "Bundesliga con Gladbach", "Gol olímpico histórico vs. Bolivia"]
  },
  {
    id: "carl-herrera",
    name: "Carl Herrera",
    deporte: "Baloncesto",
    description: "Primer venezolano en la NBA. Bicampeón con los Houston Rockets (1994, 1995) junto a Hakeem Olajuwon. Representó a Venezuela en los Juegos Olímpicos de Barcelona 1992.",
    frase: "Ser el primer venezolano en la NBA fue un sueño cumplido. Quiero que las nuevas generaciones sepan que todo es posible con trabajo y dedicación.",
    image: "/img/deportes/carl-herrera.webp",
    logros: ["2x Campeón NBA (1994, 1995)", "Primer venezolano en la NBA", "Juegos Olímpicos Barcelona 1992", "Medalla de Oro Sudamericano 1991"]
  },
  {
    id: "salomon-rondon",
    name: "Salomón Rondón",
    deporte: "Fútbol",
    description: "Máximo goleador histórico de la selección venezolana. Su potencia y olfato de gol lo llevaron a brillar en Europa (Málaga, Zenit, Newcastle) y convertirse en el estandarte de la Vinotinto.",
    frase: "Cada vez que visto esta camiseta, represento a 30 millones de venezolanos que sueñan con vernos en un Mundial. Eso no tiene precio.",
    image: "/img/deportes/salomon-rondon.webp",
    logros: ["Máximo goleador histórico de la Vinotinto", "Máximo goleador histórico del Zenit", "Trofeo Pichichi Copa América 2019", "Champions League con el Newcastle"]
  },
  {
    id: "yulimar-rojas",
    name: "Yulimar Rojas",
    deporte: "Atletismo",
    description: "La reina del triple salto. Primera mujer venezolana en ganar un oro olímpico, plusmarquista mundial con 15.67m en Tokio 2020. Siete veces campeona mundial, la atleta más dominante de su generación.",
    frase: "Esto es historia. Mucha gente se identificará conmigo porque no soy solo yo, son alrededor de 40 millones de personas de mi país los que me siguieron.",
    image: "/img/deportes/yulimar-rojas.webp",
    logros: ["Oro Olímpico Tokio 2020", "Récord Mundial (15.67m)", "4x Campeona Mundial", "Primera mujer venezolana con oro olímpico"]
  }
];

export const momentos: Momento[] = [
  {
    id: "wbc-champion",
    title: "Venezuela Campeona del Clásico Mundial 2026",
    description: "Histórico triunfo 3-2 sobre Estados Unidos en Miami. Eugenio Suárez conectó el doble decisivo en la novena entrada y Daniel Palencia cerró el juego para darle a Venezuela su primer título del WBC.",
    videoId: "dz_8z3frdYs",
    year: "2026",
    category: "Béisbol"
  },
  {
    id: "yulimar-oro",
    title: "Yulimar Rojas: Oro Olímpico y Récord Mundial",
    description: "En su último salto en Tokio 2020, Yulimar Rojas voló 15.67 metros para romper el récord mundial de 26 años y convertirse en la primera venezolana en ganar una medalla de oro olímpica.",
    videoId: "F9b3RjBRVPA",
    year: "2021",
    category: "Atletismo"
  },
  {
    id: "primera-medalla",
    title: "Primera Medalla Olímpica de Venezuela",
    description: "Asnoldo Devonish ganó la medalla de bronce en salto triple en Helsinki 1952, marcando el inicio de la historia olímpica venezolana. Un salto de 15.52 metros que cambió el deporte nacional para siempre.",
    videoId: "tZ48XW4IU_A",
    year: "1952",
    category: "Atletismo"
  },
  {
    id: "venezuela-3-0-uruguay",
    title: "Goleada Histórica 3-0 a Uruguay",
    description: "La Vinotinto escribió una página dorada al vencer 3-0 a Uruguay en las Eliminatorias, con una actuación memorable que demostró el poderío del fútbol venezolano ante uno de los gigantes sudamericanos.",
    videoId: "yRGvQtRu1lI",
    year: "2024",
    category: "Fútbol"
  },
  {
    id: "venezuela-mexico",
    title: "Los Héroes de México: Venezuela en la Copa América",
    description: "Venezuela derrotó a México en la Copa América 2024 con una actuación heroica, sellando su pase a cuartos de final con garra y calidad. Un triunfo que paralizó al continente.",
    videoId: "a7F_lpLdJ9s",
    year: "2024",
    category: "Fútbol"
  }
];

export const timelineSports: TimelineSport[] = [
  {
    id: "beisbol",
    name: "Béisbol",
    color: "#CF142B",
    description: "La pasión nacional. El deporte rey que corre por las venas de cada venezolano desde la infancia.",
    icon: "⚾",
    image: "/img/deportes/timeline-beisbol.webp",
    hitos: [
      "1941: Venezuela campeona mundial amateur",
      "1956: Luis Aparicio debuta en MLB",
      "1984: Aparicio exaltado a Cooperstown",
      "2003: Miguel Cabrera debuta en MLB",
      "2012: Cabrera gana la Triple Corona",
      "2026: ¡Venezuela Campeona del Clásico Mundial!"
    ]
  },
  {
    id: "boxeo",
    name: "Boxeo",
    color: "#003DA5",
    description: "Campeones de leyenda que pusieron a Venezuela en lo más alto del ring mundial.",
    icon: "🥊",
    image: "/img/deportes/timeline-boxeo.webp",
    hitos: [
      "1968: Morochito Rodríguez, primer oro olímpico",
      "1976: Pedro Gamarro, plata olímpica",
      "1990: Betulio González, campeón mundial",
      "2000: Carlos Morocho Hernández, campeón mundial",
      "2006: Edwin Valero, campeón mundial peso ligero",
      "2016: Yoel Finol, bronce olímpico en Río"
    ]
  },
  {
    id: "baloncesto",
    name: "Baloncesto",
    color: "#FFD100",
    description: "Gigantes criollos que han llevado el baloncesto venezolano a escenarios internacionales.",
    icon: "🏀",
    image: "/img/deportes/timeline-baloncesto.webp",
    hitos: [
      "1991: Carl Herrera, primer venezolano en la NBA",
      "1994: Herrera campeón NBA con Houston Rockets",
      "2011: Greivis Vásquez, sensación en la NBA",
      "2013: Venezuela campeona Sudamericana",
      "2015: Venezuela clasifica a Juegos Olímpicos",
      "2025: Nueva generación brilla en la LPB"
    ]
  }
];
