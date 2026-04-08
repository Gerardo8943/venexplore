export interface Category {
  title: string;
  description: string;
  imageUrl: string;
}

export interface StateData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainImage: string;
  gastronomy: Category;
  culture: Category;
  nature: Category;
}

export const venezuelaStates: StateData[] = [
  {
    id: "falcon",
    name: "Falcón",
    tagline: "Donde el desierto se encuentra con el Caribe",
    description: "Médanos dorados infinitos y aguas cristalinas conforman un paisaje surrealista que invita a la exploración sin límites.",
    mainImage: "/img/estados/falcon/Medanos-de-Coro1.jpg", 
    gastronomy: {
      title: "Tacari chivo",
      description: "Masa suave con infusión de coco fresco, rellena de frutos del mar o queso de año.",
      imageUrl: "/img/estados/falcon/comida/tarkari-chivo.jpg"
    },
    culture: {
      title: "Arquitectura Coriana",
      description: "Calles empedradas y casas de barro y caoba que susurran historias del siglo XVI.",
      imageUrl: "/img/estados/falcon/cueva.jpg"
    },
    nature: {
      title: "Morrocoy",
      description: "Cayos prístinos de arena blanca y arrecifes repletos de vida marina colorida.",
      imageUrl: "/img/estados/falcon/Medanos-de-Coro2.jpg"
    }
  },
  {
    id: "laguaira",
    name: "La Guaira",
    tagline: "La puerta costera de la nación",
    description: "Vibrante y colorida. Un litoral de playas cálidas respaldadas por la imponente cordillera que desciende hasta el mar.",
    mainImage: "/img/estados/vargas/playa-vargas.jpg",
    gastronomy: {
      title: "Pescado Frito",
      description: "Captura del día, frito a la perfección, acompañado de tostones y ensalada fresca con una brisa del mar.",
      imageUrl: "/img/estados/vargas/playa-vargas.jpg"
    },
    culture: {
      title: "Diablos Danzantes",
      description: "Un ritual sincrético lleno de percusión, máscaras vibrantes y devoción profunda resonando en Naiguatá.",
      imageUrl: "https://picsum.photos/seed/laguaira_cultura/800/600"
    },
    nature: {
      title: "Todasana",
      description: "Ríos helados que se cruzan con ensenadas vírgenes, un rincón sagrado para surfistas y almas libres.",
      imageUrl: "https://picsum.photos/seed/laguaira_nature/800/600"
    }
  },
  {
    id: "merida",
    name: "Mérida",
    tagline: "El techo de Venezuela",
    description: "Cumbres nevadas, páramos misteriosos y una ciudad universitaria que palpita cultura entre los Andes.",
    mainImage: "/img/estados/merida/sierra-nevada.jpg",
    gastronomy: {
      title: "Pisca Andina",
      description: "Un caldo restaurador de cilantro, huevo, papas y leche, diseñado para calentar el alma en la madrugada andina.",
      imageUrl: "/img/estados/merida/comida/pisca-andina.jpg"
    },
    culture: {
      title: "Feria del Sol",
      description: "Un carnaval de altura con desfiles, toros y celebraciones que iluminan la ciudad de los caballeros.",
      imageUrl: "/img/estados/merida/sierra-nevada3.jpg"
    },
    nature: {
      title: "Pico Bolívar",
      description: "La cumbre más alta del país, cubierta de nieve eterna y accesible por el teleférico más alto y largo del mundo.",
      imageUrl: "/img/estados/merida/sierra-nevada2.jpg"
    }
  }
];
