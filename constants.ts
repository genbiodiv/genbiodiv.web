import { Member, MemberRole, ResearchCategory, Publication, Supporter } from './types';

export const TEAM_MEMBERS: Member[] = [
  {
    name: "Rafik Neme",
    role: "Profesor / Lider del Grupo",
    category: MemberRole.LEADER,
    description: "Biologo Evolutivo, me interesan (mayoritariamente) las escalas moleculares y genómicas de la evolución. Hice mi doctorado en el Instituto Max Planck de Biología Evolutiva. Actualmente soy profesor del Departamento de Química y Biología en Uninorte.",
    image: "https://picsum.photos/400/400?random=1"
  },
  {
    name: "Jorge Moreno",
    role: "Estudiante Maestría",
    category: MemberRole.STUDENT,
    description: "Biólogo egresado de la Universidad del Atlántico. Enfocado en el análisis de ADN ambiental en cuerpos de agua.",
    image: "https://picsum.photos/400/400?random=2"
  },
  {
    name: "Damaris Grandas",
    role: "Bióloga",
    category: MemberRole.RESEARCHER,
    description: "Bióloga egresada de la Universidad del Atlántico enfocada en la ecología de Insectos de la familia Formicidae.",
    image: "https://picsum.photos/400/400?random=3"
  },
  {
    name: "Valeria Machacon",
    role: "Estudiante Biología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Biología de la Universidad del Atlántico enfocada en ecología y metagenomica de Coleópteros.",
    image: "https://picsum.photos/400/400?random=4"
  },
  {
    name: "Roberto Castro",
    role: "Estudiante Geología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Geología de la Universidad del Norte enfocado en el análisis de ADN ambiental en suelo.",
    image: "https://picsum.photos/400/400?random=5"
  },
  {
    name: "Juliana Chinchilla",
    role: "Estudiante Geología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Geología de la Universidad del Norte, enfocada en el estudio de las abejas Meliponas.",
    image: "https://picsum.photos/400/400?random=6"
  },
  {
    name: "Keyner Moreno",
    role: "Biólogo",
    category: MemberRole.RESEARCHER,
    description: "Biólogo egresado de la Universidad del Atlántico, énfasis en Entomología. Enfocado en ecología y evolución de Lepidoptera.",
    image: "https://picsum.photos/400/400?random=7"
  },
  {
    name: "Alejandro Diaz",
    role: "Estudiante Biología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Biología de la Universidad del Atlántico trabaja en estimar la divergencia molecular entre mamíferos americanos.",
    image: "https://picsum.photos/400/400?random=8"
  },
  {
    name: "Maria Jose Rodriguez",
    role: "Estudiante Biología / Ilustradora",
    category: MemberRole.STUDENT,
    description: "Estudiante de Biología de la Universidad del Atlántico. Ilustradora científica.",
    image: "https://picsum.photos/400/400?random=9"
  },
  {
    name: "Luis Bustamante",
    role: "Biólogo",
    category: MemberRole.RESEARCHER,
    description: "Biólogo egresado de la Universidad del Atlántico enfocado en el estudio de Termitas (Isoptera).",
    image: "https://picsum.photos/400/400?random=10"
  },
  {
    name: "Luis Ángel Aragón",
    role: "Estudiante Geología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Geología de la Universidad del Norte enfocado en el estudio de actividades secundarias de genes.",
    image: "https://picsum.photos/400/400?random=11"
  },
  {
    name: "Olga Buelvas",
    role: "Estudiante Biología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Biología de la Universidad del Atlántico, enfocada en el estudio de la dieta del Oso Hormiguero mediante metagenómica.",
    image: "https://picsum.photos/400/400?random=12"
  },
  {
    name: "Mauren Lavalle",
    role: "Estudiante Geología/Licenciatura",
    category: MemberRole.STUDENT,
    description: "Estudiante de Geología de la Universidad del Norte y Licenciatura en Ciencias Naturales en la Universidad del Atlántico.",
    image: "https://picsum.photos/400/400?random=13"
  },
  {
    name: "Leydi Jiménez",
    role: "Estudiante Biología",
    category: MemberRole.STUDENT,
    description: "Estudiante de Biología de la Universidad del Atlántico enfocada en análisis de genomas humanos en Barranquilla.",
    image: "https://picsum.photos/400/400?random=14"
  },
  {
    name: "Cecilia Torres",
    role: "Alumni - MSc",
    category: MemberRole.ALUMNI,
    description: "Nutricionista Dietista (UNAL), MSc Ciencias Naturales (Uninorte). Especialización en Ciencia y Tecnología de Alimentos.",
    image: "https://picsum.photos/400/400?random=15"
  },
  {
    name: "Rodrigo Sarmiento",
    role: "Alumni",
    category: MemberRole.ALUMNI,
    description: "Biólogo (UNAL), experto en Entomología. Maestría en Ecologia Funcional (UFSC, Brasil).",
    image: "https://picsum.photos/400/400?random=16"
  },
  {
    name: "Carolina Mazo",
    role: "Alumni - PhD",
    category: MemberRole.ALUMNI,
    description: "Microbióloga (Javeriana), PhD en Patología Vegetal (Cornell). Investigadora posdoctoral.",
    image: "https://picsum.photos/400/400?random=17"
  },
  {
    name: "Anahí Barros",
    role: "Alumni - MSc",
    category: MemberRole.ALUMNI,
    description: "Microbióloga (Libre), MSc Ciencias Naturales (Uninorte). Becaria Colciencias.",
    image: "https://picsum.photos/400/400?random=18"
  },
  {
    name: "Valeria Rodriguez",
    role: "Alumni",
    category: MemberRole.ALUMNI,
    description: "Estudiante de Biología (Atlántico), enfocada en Nematodos y Curculionidae.",
    image: "https://picsum.photos/400/400?random=19"
  },
  {
    name: "Leyla Falla",
    role: "Alumni",
    category: MemberRole.ALUMNI,
    description: "Estudiante de Biología de la Universidad del Atlántico.",
    image: "https://picsum.photos/400/400?random=20"
  },
  {
    name: "Daniel Posada",
    role: "Alumni",
    category: MemberRole.ALUMNI,
    description: "Biólogo (Atlántico) con experiencia en Coleópteros y análisis de datos biológicos.",
    image: "https://picsum.photos/400/400?random=21"
  }
];

export const RESEARCH_CATEGORIES: ResearchCategory[] = [
  {
    id: "molecular",
    title: "Evolución Molecular y Genómica",
    description: "Investigamos las bases genómicas de la adaptación y el origen de la novedad biológica.",
    projects: [
      {
        title: "Cómo Surgen Nuevos Genes",
        description: "Investigación teórica sobre cómo funciones secundarias de genes preexistentes pueden evolucionar hacia nuevos genes funcionales."
      },
      {
        title: "Divergencia entre Mapaches y Kinkajús",
        description: "Estimación molecular de tiempos de separación evolutiva para entender la formación del Istmo de Panamá."
      },
      {
        title: "Ancestría Genética de Barranquilleros",
        description: "Análisis de mezcla genética (africana, europea, indígena) en 200 personas de Barranquilla usando estrategias de pooling."
      },
      {
        title: "Elasticidad Genómica",
        description: "Concepto teórico y simulación sobre la capacidad de los genomas para absorber y recuperarse de perturbaciones ambientales."
      }
    ]
  },
  {
    id: "insectos",
    title: "Diversidad de Insectos",
    description: "Documentación y análisis de la entomofauna del Caribe para conservación y sostenibilidad.",
    projects: [
      {
        title: "Hormigas del Bosque Seco",
        description: "Catálogo de diversidad taxonómica en el Atlántico, incluyendo 19 nuevos registros y análisis de impacto por fragmentación."
      },
      {
        title: "Escarabajos Coprófagos",
        description: "Investigación sobre la distribución y función de reciclaje de nutrientes de escarabajos en bosques secos."
      },
      {
        title: "Microbiota y Escarabajos",
        description: "Análisis experimental del impacto de escarabajos coprófagos en la diversidad microbiana del suelo."
      },
      {
        title: "Insectos para Seguridad Alimentaria",
        description: "Protocolos de cría y divulgación (BioAlimenta) para el uso de insectos como fuente de proteína."
      },
      {
        title: "Exploración Entomológica del Caribe",
        description: "Uso de trampas Malaise y metabarcoding para correlacionar diversidad con variables ambientales."
      },
      {
        title: "ADN vs Morfología",
        description: "Validación de metabarcoding frente a identificación morfológica tradicional en coleópteros."
      }
    ]
  },
  {
    id: "ecosistemas",
    title: "Ecosistemas del Caribe",
    description: "Uso de ADN ambiental (eDNA) y otras herramientas para monitorear la salud de nuestros ecosistemas.",
    projects: [
      {
        title: "eDNA en Bosques Secos",
        description: "Metodología para monitorear biodiversidad de plantas, hongos, insectos y vertebrados en remanentes de bosque."
      },
      {
        title: "Genética Oculta del Bosque",
        description: "Secuenciación de ADN de hojas para revelar diversidad microbiana y simbiótica asociada a plantas."
      },
      {
        title: "Biodiversidad del Río Magdalena",
        description: "Caracterización de peces y vertebrados a lo largo del gradiente fluvial mediante metabarcoding."
      },
      {
        title: "Corales Resilientes",
        description: "Estudio de comunidades coralinas en zonas de alta sedimentación e impacto del Río Magdalena."
      },
      {
        title: "Dieta del Oso Hormiguero",
        description: "Metagenómica de contenido estomacal para comprender relaciones tróficas en el bosque seco."
      }
    ]
  },
  {
    id: "divulgacion",
    title: "Divulgación y Ciencia Participativa",
    description: "Apropiación social del conocimiento para conectar la ciencia con la comunidad.",
    projects: [
      {
        title: "Guías Ilustradas",
        description: "Libros sobre escarabajos y hormigas del Caribe para investigadores y público general."
      },
      {
        title: "La Rana Coquí en Barranquilla",
        description: "Ciencia ciudadana para rastrear la rana invasora Eleutherodactylus johnstonei mediante audio."
      },
      {
        title: "Caminos Evolutivos",
        description: "Instalación interactiva en Uninorte explorando principios de evolución biológica."
      }
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    type: 'Paper',
    citation: "Sarmiento-Garcés, R., Posada-Echeverría, D., & Neme, R. (2025). Diversity and efficacy of insect sampling methods in an urban tropical dry forest of the Colombian Caribbean. PeerJ, 13, e18262.",
    link: "https://doi.org/10.7717/peerj.18262"
  },
  {
    type: 'Preprint',
    citation: "Moreno-Tilano, J., Zong, S., et al. (2024). Decoding biodiversity patterns and community structure of the lower Magdalena River (Colombia) using environmental DNA. Authorea.",
    link: "https://doi.org/10.22541/au.173262274.49229664/v1"
  },
  {
    type: 'Preprint',
    citation: "Moreno‑Tilano, J. A., Sanabria Ramírez, I. L., & Neme, R. (2024). Unprecedented sighting of coral populations and associated fauna in the High Sedimentation Waters of Puerto Velero. bioRxiv.",
    link: "https://doi.org/10.1101/2024.10.09.617471"
  },
  {
    type: 'Paper',
    citation: "Braun, J., Neme, R., et al. (2023). SDRAP for annotating scrambled or rearranged genomes. NAR Genomics and Bioinformatics, 5(4), lqad096.",
    link: "https://doi.org/10.1093/nargab/lqad096"
  },
  {
    type: 'Paper',
    citation: "Feng, Y., Neme, R., et al. (2022). Comparative genomics reveals insight into the evolutionary origin of massively scrambled genomes. eLife, 11, e82979.",
    link: "https://doi.org/10.7554/eLife.82979"
  },
  {
    type: 'Paper',
    citation: "Miller, R. V., Neme, R., et al. (2021). Transcribed germline‑limited coding sequences in Oxytricha trifallax. G3, 11(6), jkab092.",
    link: "https://doi.org/10.1093/g3journal/jkab092"
  },
  {
    type: 'Thesis',
    citation: "Barros Martínez, A. M. (2023). Estudio de la biodiversidad de dípteros necrófagos... (Maestría en Ciencias Naturales).",
    link: "http://hdl.handle.net/10584/11739"
  },
  {
    type: 'Thesis',
    citation: "Torres González, C. M. (2023). Mosca soldado negra (Hermetia illucens): aproximaciones genómicas... (Maestría en Ciencias Naturales).",
    link: "http://hdl.handle.net/10584/12169"
  },
  {
    type: 'Book',
    citation: "Neme, R., Sarmiento, R., Machacón, V., Grandas, D., & Posada, D. (2024). Coleópteros: guía ilustrada... Editorial Universidad del Norte.",
    link: "https://editorial.uninorte.edu.co/gpd-coleopteros-guia-ilustrada-de-familias-y-subfamilias-de-escarabajos-en-el-caribe-colombiano-9789587896244-66e0dd85a1fa0.html"
  }
];

export const SUPPORTERS: Supporter[] = [
  { name: "Universidad del Norte", subtext: "División de Ciencias Naturales" },
  { name: "Instituto Max Planck", subtext: "Grupo Asociado (Biología Evolutiva)" },
  { name: "Pew Charitable Trusts", subtext: "Programa Pew Latin American Fellows" }
];