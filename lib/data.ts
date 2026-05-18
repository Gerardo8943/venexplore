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

export interface StateCoordinates {
  lat: number;
  lng: number;
}

export const stateCoordinates: Record<string, StateCoordinates> = {
  falcon: { lat: 11.4116, lng: -69.6702 },
  laguaira: { lat: 10.6000, lng: -66.9333 },
  merida: { lat: 8.5952, lng: -71.1441 },
  miranda: { lat: 10.2500, lng: -66.4167 },
  "nueva-esparta": { lat: 10.9667, lng: -63.8667 },
};

export const venezuelaGastronomy = [
  {
    id: "pabellon",
    name: "Pabellón Criollo",
    description: "El plato bandera de Venezuela: arroz blanco, carne mechada, caraotas negras, tajadas de plátano maduro frito y huevo revuelto. Una sinfonía de sabores y texturas.",
    region: "Todo el país",
    image: "/img/estados/falcon/Medanos-de-Coro1.webp"
  },
  {
    id: "arepa",
    name: "Arepa Reina Pepiada",
    description: "La arega reina: masa de maíz rellena con guasacaca de pollo desmenuzado, aguacate, mayonesa y cilantro fresco. Un bocado celestial.",
    region: "Originaria de Caracas",
    image: "/img/estados/merida/sierra-nevada.webp"
  },
  {
    id: "hallaca",
    name: "Hallaca",
    description: "Masa de maíz rellena con guiso de cerdo, pollo, res, aceitunas, alcaparras y pasas, envuelta en hojas de plátano. La realeza de la navidad venezolana.",
    region: "Todo el país",
    image: "/img/estados/miranda/miranda-personas.webp"
  },
  {
    id: "cachapa",
    name: "Cachapa con Queso de Mano",
    description: "Panqueque de maíz tierno, dulce y dorado, relleno de queso de mano fresco y cremoso. La merienda perfecta en los llanos.",
    region: "Región de los Llanos",
    image: "/img/estados/nueva-esparta/ambiente.webp"
  }
];

export const venezuelaSports = [
  {
    id: "beisbol",
    name: "Béisbol",
    subtitle: "La pasión nacional",
    description: "El deporte rey de Venezuela. Con figuras legendarias como Luis Aparicio, Miguel Cabrera y Johan Santana, la pelota criolla corre por las venas de cada venezolano desde la infancia.",
    image: "/img/deportes/landing-sports/kitesurfing.webp",
    color: "#CF142B"
  },
  {
    id: "boxeo",
    name: "Boxeo",
    subtitle: "Campeones de leyenda",
    description: "Venezuela ha producido grandes campeones mundiales: Edwin \"El Inca\" Valero, Carlos Morocho Hernández y Betulio González. El ring es templo de la garra venezolana.",
    image: "/img/deportes/landing-sports/baloncesto.webp",
    color: "#003DA5"
  },
  {
    id: "baloncesto",
    name: "Baloncesto",
    subtitle: "Gigantes criollos",
    description: "Con figuras como Carl Herrera y Greivis Vásquez en la NBA, y una liga local vibrante (LPB), el baloncesto crece imparable en la nación.",
    image: "/img/deportes/landing-sports/parapentev2.webp",
    color: "#FFD100"
  },
  {
    id: "bolas",
    name: "Bolas Criollas",
    subtitle: "Tradición de los llanos",
    description: "Juego tradicional de precisión donde se lanzan bolas de metal en una cancha de tierra. Herencia española convertida en deporte nacional con torneos en todo el país.",
    image: "/img/estados/falcon/Medanos-de-Coro1.webp",
    color: "#0077B6"
  }
];

export const venezuelaStates: StateData[] = [
  {
    id: "falcon",
    name: "Falcón",
    tagline: "Donde el desierto se encuentra con el Caribe",
    description: "Médanos dorados infinitos y aguas cristalinas conforman un paisaje surrealista que invita a la exploración sin límites.",
    mainImage: "/img/estados/falcon/Medanos-de-Coro1.webp",
    gastronomy: {
      title: "Tacari chivo",
      description: "Masa suave con infusión de coco fresco, rellena de frutos del mar o queso de año.",
      imageUrl: "/img/estados/falcon/comida/tarkari-chivo.webp"
    },
    culture: {
      title: "Arquitectura Coriana",
      description: "Calles empedradas y casas de barro y caoba que susurran historias del siglo XVI.",
      imageUrl: "/img/estados/falcon/cueva.webp"
    },
    nature: {
      title: "Morrocoy",
      description: "Cayos prístinos de arena blanca y arrecifes repletos de vida marina colorida.",
      imageUrl: "/img/estados/falcon/Medanos-de-Coro2.webp"
    }
  },
  {
    id: "laguaira",
    name: "La Guaira",
    tagline: "La puerta costera de la nación",
    description: "Vibrante y colorida. Un litoral de playas cálidas respaldadas por la imponente cordillera que desciende hasta el mar.",
    mainImage: "/img/estados/vargas/playa-vargas.webp",
    gastronomy: {
      title: "Pescado Frito",
      description: "Captura del día, frito a la perfección, acompañado de tostones y ensalada fresca con una brisa del mar.",
      imageUrl: "/img/estados/vargas/playa-vargas.webp"
    },
    culture: {
      title: "Diablos Danzantes",
      description: "Un ritual sincrético lleno de percusión, máscaras vibrantes y devoción profunda resonando en Naiguatá.",
      imageUrl: "/img/estados/vargas/diablos-danzantes.png"
    },
    nature: {
      title: "Todasana",
      description: "Ríos helados que se cruzan con ensenadas vírgenes, un rincón sagrado para surfistas y almas libres.",
      imageUrl: "/img/estados/vargas/todasana.png"
    }
  },
  {
    id: "merida",
    name: "Mérida",
    tagline: "El techo de Venezuela",
    description: "Cumbres nevadas, páramos misteriosos y una ciudad universitaria que palpita cultura entre los Andes.",
    mainImage: "/img/estados/merida/sierra-nevada.webp",
    gastronomy: {
      title: "Pisca Andina",
      description: "Un caldo restaurador de cilantro, huevo, papas y leche, diseñado para calentar el alma en la madrugada andina.",
      imageUrl: "/img/estados/merida/comida/pisca-andina.webp"
    },
    culture: {
      title: "Feria del Sol",
      description: "Un carnaval de altura con desfiles, toros y celebraciones que iluminan la ciudad de los caballeros.",
      imageUrl: "/img/estados/merida/sierra-nevada3.webp"
    },
    nature: {
      title: "Pico Bolívar",
      description: "La cumbre más alta del país, cubierta de nieve eterna y accesible por el teleférico más alto y largo del mundo.",
      imageUrl: "/img/estados/merida/sierra-nevada2.webp"
    }
  },
  {
    id: "miranda",
    name: "Miranda",
    tagline: "Donde la selva toca el mar Caribe",
    description: "Selvas nubladas, manglares vírgenes y un latir cultural afrodescendiente que resuena en tambores de Barlovento.",
    mainImage: "/img/estados/miranda/laguna-tacarigua.webp",
    gastronomy: {
      title: "Sancocho de Pescado",
      description: "Guiso costero de pescado fresco con plátano, yuca y condimentos criollos cocidos a fuego lento.",
      imageUrl: "/img/estados/miranda/laguna-tacarigua.webp"
    },
    culture: {
      title: "Tambores de Barlovento",
      description: "El ritmo ancestral de los tambores redobla en Curiepe y Higuerote, herencia viva de la afrovenezolanidad.",
      imageUrl: "/img/estados/miranda/miranda-personas.webp"
    },
    nature: {
      title: "Parque Nacional Macarao",
      description: "Bosque nublado con bromelias y orquídeas, hábitat del puma y el mono araguato a minutos de Caracas.",
      imageUrl: "/img/estados/miranda/parque-macarao.webp"
    }
  },
  {
    id: "nueva-esparta",
    name: "Nueva Esparta",
    tagline: "La perla del Caribe venezolano",
    description: "Playas de arena blanca, fuertes históricos y un clima de ensueño convierten a Margarita en el destino caribeño por excelencia.",
    mainImage: "/img/estados/nueva-esparta/cerro-el-copey.webp",
    gastronomy: {
      title: "Pastel de Chucho",
      description: "Delicado pastel salado de pescado rayado (chucho) con aceitunas, alcaparras y especias en masa de maíz.",
      imageUrl: "/img/estados/nueva-esparta/ambiente.webp"
    },
    culture: {
      title: "Fortalzas Coloniales",
      description: "El Castillo San Carlos de Borromeo y la Fortaleza de La Galera narran batallas de piratas y corsarios.",
      imageUrl: "/img/estados/nueva-esparta/cerro-el-copey2.webp"
    },
    nature: {
      title: "Cerro El Copey",
      description: "Parque nacional con vistas panorámicas de toda la isla, donde el cardón y el dividive pintan el paisaje semiárido.",
      imageUrl: "/img/estados/nueva-esparta/cerro-el-copey3.webp"
    }
  }
];
