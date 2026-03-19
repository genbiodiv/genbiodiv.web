import { Member, MemberRole, ResearchCategory, Publication, Supporter, Language } from './types';

export const TEAM_MEMBERS: Member[] = [
  {
    name: "Rafik Neme",
    role: {
      es: "Profesor / Lider del Grupo",
      en: "Professor / Group Leader"
    },
    category: MemberRole.LEADER,
    description: {
      es: "Biologo Evolutivo, me interesan (mayoritariamente) las escalas moleculares y genómicas de la evolución. Hice mi doctorado en el Instituto Max Planck de Biología Evolutiva. Actualmente soy profesor del Departamento de Química y Biología en Uninorte.",
      en: "Evolutionary Biologist, I am interested (mostly) in the molecular and genomic scales of evolution. I did my PhD at the Max Planck Institute for Evolutionary Biology. Currently, I am a professor in the Department of Chemistry and Biology at Uninorte."
    },
    image: "https://picsum.photos/400/400?random=1"
  },
  {
    name: "Jorge Moreno",
    role: {
      es: "Estudiante Maestría",
      en: "Master's Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Biólogo egresado de la Universidad del Atlántico. Enfocado en el análisis de ADN ambiental en cuerpos de agua.",
      en: "Biologist graduated from the Universidad del Atlántico. Focused on the analysis of environmental DNA in water bodies."
    },
    image: "https://picsum.photos/400/400?random=2"
  },
  {
    name: "Damaris Grandas",
    role: {
      es: "Bióloga",
      en: "Biologist"
    },
    category: MemberRole.RESEARCHER,
    description: {
      es: "Bióloga egresada de la Universidad del Atlántico enfocada en la ecología de Insectos de la familia Formicidae.",
      en: "Biologist graduated from the Universidad del Atlántico focused on the ecology of insects of the Formicidae family."
    },
    image: "https://picsum.photos/400/400?random=3"
  },
  {
    name: "Valeria Machacon",
    role: {
      es: "Estudiante Biología",
      en: "Biology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Biología de la Universidad del Atlántico enfocada en ecología y metagenomica de Coleópteros.",
      en: "Biology student at the Universidad del Atlántico focused on ecology and metagenomics of Coleoptera."
    },
    image: "https://picsum.photos/400/400?random=4"
  },
  {
    name: "Roberto Castro",
    role: {
      es: "Estudiante Geología",
      en: "Geology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Geología de la Universidad del Norte enfocado en el análisis de ADN ambiental en suelo.",
      en: "Geology student at the Universidad del Norte focused on the analysis of environmental DNA in soil."
    },
    image: "https://picsum.photos/400/400?random=5"
  },
  {
    name: "Juliana Chinchilla",
    role: {
      es: "Estudiante Geología",
      en: "Geology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Geología de la Universidad del Norte, enfocada en el estudio de las abejas Meliponas.",
      en: "Geology student at the Universidad del Norte, focused on the study of Melipona bees."
    },
    image: "https://picsum.photos/400/400?random=6"
  },
  {
    name: "Keyner Moreno",
    role: {
      es: "Biólogo",
      en: "Biologist"
    },
    category: MemberRole.RESEARCHER,
    description: {
      es: "Biólogo egresado de la Universidad del Atlántico, énfasis en Entomología. Enfocado en ecología y evolución de Lepidoptera.",
      en: "Biologist graduated from the Universidad del Atlántico, emphasis on Entomology. Focused on ecology and evolution of Lepidoptera."
    },
    image: "https://picsum.photos/400/400?random=7"
  },
  {
    name: "Alejandro Diaz",
    role: {
      es: "Estudiante Biología",
      en: "Biology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Biología de la Universidad del Atlántico trabaja en estimar la divergencia molecular entre mamíferos americanos.",
      en: "Biology student at the Universidad del Atlántico working on estimating molecular divergence between American mammals."
    },
    image: "https://picsum.photos/400/400?random=8"
  },
  {
    name: "Maria Jose Rodriguez",
    role: {
      es: "Estudiante Biología / Ilustradora",
      en: "Biology Student / Illustrator"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Biología de la Universidad del Atlántico. Ilustradora científica.",
      en: "Biology student at the Universidad del Atlántico. Scientific illustrator."
    },
    image: "https://picsum.photos/400/400?random=9"
  },
  {
    name: "Luis Bustamante",
    role: {
      es: "Biólogo",
      en: "Biologist"
    },
    category: MemberRole.RESEARCHER,
    description: {
      es: "Biólogo egresado de la Universidad del Atlántico enfocado en el estudio de Termitas (Isoptera).",
      en: "Biologist graduated from the Universidad del Atlántico focused on the study of Termites (Isoptera)."
    },
    image: "https://picsum.photos/400/400?random=10"
  },
  {
    name: "Luis Ángel Aragón",
    role: {
      es: "Estudiante Geología",
      en: "Geology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Geología de la Universidad del Norte enfocado en el estudio de actividades secundarias de genes.",
      en: "Geology student at the Universidad del Norte focused on the study of secondary gene activities."
    },
    image: "https://picsum.photos/400/400?random=11"
  },
  {
    name: "Olga Buelvas",
    role: {
      es: "Estudiante Biología",
      en: "Biology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Biología de la Universidad del Atlántico, enfocada en el estudio de la dieta del Oso Hormiguero mediante metagenómica.",
      en: "Biology student at the Universidad del Atlántico, focused on the study of the Anteater's diet through metagenomics."
    },
    image: "https://picsum.photos/400/400?random=12"
  },
  {
    name: "Mauren Lavalle",
    role: {
      es: "Estudiante Geología/Licenciatura",
      en: "Geology/Education Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Geología de la Universidad del Norte y Licenciatura en Ciencias Naturales en la Universidad del Atlántico.",
      en: "Geology student at the Universidad del Norte and Natural Sciences Education at the Universidad del Atlántico."
    },
    image: "https://picsum.photos/400/400?random=13"
  },
  {
    name: "Leydi Jiménez",
    role: {
      es: "Estudiante Biología",
      en: "Biology Student"
    },
    category: MemberRole.STUDENT,
    description: {
      es: "Estudiante de Biología de la Universidad del Atlántico enfocada en análisis de genomas humanos en Barranquilla.",
      en: "Biology student at the Universidad del Atlántico focused on the analysis of human genomes in Barranquilla."
    },
    image: "https://picsum.photos/400/400?random=14"
  },
  {
    name: "Cecilia Torres",
    role: {
      es: "Alumni - MSc",
      en: "Alumni - MSc"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Nutricionista Dietista (UNAL), MSc Ciencias Naturales (Uninorte). Especialización en Ciencia y Tecnología de Alimentos.",
      en: "Nutritionist Dietitian (UNAL), MSc Natural Sciences (Uninorte). Specialization in Food Science and Technology."
    },
    image: "https://picsum.photos/400/400?random=15"
  },
  {
    name: "Rodrigo Sarmiento",
    role: {
      es: "Alumni",
      en: "Alumni"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Biólogo (UNAL), experto en Entomología. Maestría en Ecologia Funcional (UFSC, Brasil).",
      en: "Biologist (UNAL), expert in Entomology. Master's in Functional Ecology (UFSC, Brazil)."
    },
    image: "https://picsum.photos/400/400?random=16"
  },
  {
    name: "Carolina Mazo",
    role: {
      es: "Alumni - PhD",
      en: "Alumni - PhD"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Microbióloga (Javeriana), PhD en Patología Vegetal (Cornell). Investigadora posdoctoral.",
      en: "Microbiologist (Javeriana), PhD in Plant Pathology (Cornell). Postdoctoral researcher."
    },
    image: "https://picsum.photos/400/400?random=17"
  },
  {
    name: "Anahí Barros",
    role: {
      es: "Alumni - MSc",
      en: "Alumni - MSc"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Microbióloga (Libre), MSc Ciencias Naturales (Uninorte). Becaria Colciencias.",
      en: "Microbiologist (Libre), MSc Natural Sciences (Uninorte). Colciencias fellow."
    },
    image: "https://picsum.photos/400/400?random=18"
  },
  {
    name: "Valeria Rodriguez",
    role: {
      es: "Alumni",
      en: "Alumni"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Estudiante de Biología (Atlántico), enfocada en Nematodos y Curculionidae.",
      en: "Biology student (Atlántico), focused on Nematodes and Curculionidae."
    },
    image: "https://picsum.photos/400/400?random=19"
  },
  {
    name: "Leyla Falla",
    role: {
      es: "Alumni",
      en: "Alumni"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Estudiante de Biología de la Universidad del Atlántico.",
      en: "Biology student at the Universidad del Atlántico."
    },
    image: "https://picsum.photos/400/400?random=20"
  },
  {
    name: "Daniel Posada",
    role: {
      es: "Alumni",
      en: "Alumni"
    },
    category: MemberRole.ALUMNI,
    description: {
      es: "Biólogo (Atlántico) con experiencia en Coleópteros y análisis de datos biológicos.",
      en: "Biologist (Atlántico) with experience in Coleoptera and biological data analysis."
    },
    image: "https://picsum.photos/400/400?random=21"
  }
];

export const RESEARCH_CATEGORIES: ResearchCategory[] = [
  {
    id: "molecular",
    title: {
      es: "Evolución Molecular y Genómica",
      en: "Molecular Evolution and Genomics"
    },
    description: {
      es: "Investigamos las bases genómicas de la adaptación y el origen de la novedad biológica.",
      en: "We investigate the genomic bases of adaptation and the origin of biological novelty."
    },
    projects: [
      {
        title: {
          es: "Cómo Surgen Nuevos Genes",
          en: "How New Genes Arise"
        },
        description: {
          es: "Investigación teórica sobre cómo funciones secundarias de genes preexistentes pueden evolucionar hacia nuevos genes funcionales.",
          en: "Theoretical research on how secondary functions of pre-existing genes can evolve into new functional genes."
        }
      },
      {
        title: {
          es: "Divergencia entre Mapaches y Kinkajús",
          en: "Divergence between Raccoons and Kinkajous"
        },
        description: {
          es: "Estimación molecular de tiempos de separación evolutiva para entender la formación del Istmo de Panamá.",
          en: "Molecular estimation of evolutionary separation times to understand the formation of the Isthmus of Panama."
        }
      },
      {
        title: {
          es: "Ancestría Genética de Barranquilleros",
          en: "Genetic Ancestry of Barranquilleros"
        },
        description: {
          es: "Análisis de mezcla genética (africana, europea, indígena) en 200 personas de Barranquilla usando estrategias de pooling.",
          en: "Analysis of genetic mixture (African, European, Indigenous) in 200 people from Barranquilla using pooling strategies."
        }
      },
      {
        title: {
          es: "Elasticidad Genómica",
          en: "Genomic Elasticity"
        },
        description: {
          es: "Concepto teórico y simulación sobre la capacidad de los genomas para absorber y recuperarse de perturbaciones ambientales.",
          en: "Theoretical concept and simulation on the capacity of genomes to absorb and recover from environmental perturbations."
        }
      }
    ]
  },
  {
    id: "insectos",
    title: {
      es: "Diversidad de Insectos",
      en: "Insect Diversity"
    },
    description: {
      es: "Documentación y análisis de la entomofauna del Caribe para conservación y sostenibilidad.",
      en: "Documentation and analysis of the Caribbean entomofauna for conservation and sustainability."
    },
    projects: [
      {
        title: {
          es: "Hormigas del Bosque Seco",
          en: "Ants of the Dry Forest"
        },
        description: {
          es: "Catálogo de diversidad taxonómica en el Atlántico, incluyendo 19 nuevos registros y análisis de impacto por fragmentación.",
          en: "Catalog of taxonomic diversity in the Atlántico, including 19 new records and impact analysis by fragmentation."
        }
      },
      {
        title: {
          es: "Escarabajos Coprófagos",
          en: "Dung Beetles"
        },
        description: {
          es: "Investigación sobre la distribución y función de reciclaje de nutrientes de escarabajos en bosques secos.",
          en: "Research on the distribution and nutrient recycling function of beetles in dry forests."
        }
      },
      {
        title: {
          es: "Microbiota y Escarabajos",
          en: "Microbiota and Beetles"
        },
        description: {
          es: "Análisis experimental del impacto de escarabajos coprófagos en la diversidad microbiana del suelo.",
          en: "Experimental analysis of the impact of dung beetles on soil microbial diversity."
        }
      },
      {
        title: {
          es: "Insectos para Seguridad Alimentaria",
          en: "Insects for Food Security"
        },
        description: {
          es: "Protocolos de cría y divulgación (BioAlimenta) para el uso de insectos como fuente de proteína.",
          en: "Breeding and outreach protocols (BioAlimenta) for the use of insects as a protein source."
        }
      },
      {
        title: {
          es: "Exploración Entomológica del Caribe",
          en: "Entomological Exploration of the Caribbean"
        },
        description: {
          es: "Uso de trampas Malaise y metabarcoding para correlacionar diversidad con variables ambientales.",
          en: "Use of Malaise traps and metabarcoding to correlate diversity with environmental variables."
        }
      },
      {
        title: {
          es: "ADN vs Morfología",
          en: "DNA vs Morphology"
        },
        description: {
          es: "Validación de metabarcoding frente a identificación morfológica tradicional en coleópteros.",
          en: "Validation of metabarcoding against traditional morphological identification in Coleoptera."
        }
      }
    ]
  },
  {
    id: "ecosistemas",
    title: {
      es: "Ecosistemas del Caribe",
      en: "Caribbean Ecosystems"
    },
    description: {
      es: "Uso de ADN ambiental (eDNA) y otras herramientas para monitorear la salud de nuestros ecosistemas.",
      en: "Use of environmental DNA (eDNA) and other tools to monitor the health of our ecosystems."
    },
    projects: [
      {
        title: {
          es: "eDNA en Bosques Secos",
          en: "eDNA in Dry Forests"
        },
        description: {
          es: "Metodología para monitorear biodiversidad de plantas, hongos, insectos y vertebrados en remanentes de bosque.",
          en: "Methodology to monitor biodiversity of plants, fungi, insects, and vertebrates in forest remnants."
        }
      },
      {
        title: {
          es: "Genética Oculta del Bosque",
          en: "Hidden Genetics of the Forest"
        },
        description: {
          es: "Secuenciación de ADN de hojas para revelar diversidad microbiana y simbiótica asociada a plantas.",
          en: "DNA sequencing of leaves to reveal microbial and symbiotic diversity associated with plants."
        }
      },
      {
        title: {
          es: "Biodiversidad del Río Magdalena",
          en: "Biodiversity of the Magdalena River"
        },
        description: {
          es: "Caracterización de peces y vertebrados a lo largo del gradiente fluvial mediante metabarcoding.",
          en: "Characterization of fish and vertebrates along the fluvial gradient through metabarcoding."
        }
      },
      {
        title: {
          es: "Corales Resilientes",
          en: "Resilient Corals"
        },
        description: {
          es: "Estudio de comunidades coralinas en zonas de alta sedimentación e impacto del Río Magdalena.",
          en: "Study of coral communities in areas of high sedimentation and impact of the Magdalena River."
        }
      },
      {
        title: {
          es: "Dieta del Oso Hormiguero",
          en: "Anteater's Diet"
        },
        description: {
          es: "Metagenómica de contenido estomacal para comprender relaciones tróficas en el bosque seco.",
          en: "Metagenomics of stomach content to understand trophic relationships in the dry forest."
        }
      }
    ]
  },
  {
    id: "divulgacion",
    title: {
      es: "Divulgación y Ciencia Participativa",
      en: "Outreach and Participatory Science"
    },
    description: {
      es: "Apropiación social del conocimiento para conectar la ciencia con la comunidad.",
      en: "Social appropriation of knowledge to connect science with the community."
    },
    projects: [
      {
        title: {
          es: "Guías Ilustradas",
          en: "Illustrated Guides"
        },
        description: {
          es: "Libros sobre escarabajos y hormigas del Caribe para investigadores y público general.",
          en: "Books on beetles and ants of the Caribbean for researchers and the general public."
        }
      },
      {
        title: {
          es: "La Rana Coquí en Barranquilla",
          en: "The Coqui Frog in Barranquilla"
        },
        description: {
          es: "Ciencia ciudadana para rastrear la rana invasora Eleutherodactylus johnstonei mediante audio.",
          en: "Citizen science to track the invasive frog Eleutherodactylus johnstonei through audio."
        }
      },
      {
        title: {
          es: "Caminos Evolutivos",
          en: "Evolutionary Paths"
        },
        description: {
          es: "Instalación interactiva en Uninorte explorando principios de evolución biológica.",
          en: "Interactive installation at Uninorte exploring principles of biological evolution."
        }
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
  { 
    name: { es: "Universidad del Norte", en: "University of the North" }, 
    subtext: { es: "División de Ciencias Naturales", en: "Natural Sciences Division" } 
  },
  { 
    name: { es: "Instituto Max Planck", en: "Max Planck Institute" }, 
    subtext: { es: "Grupo Asociado (Biología Evolutiva)", en: "Associated Group (Evolutionary Biology)" } 
  },
  { 
    name: { es: "Pew Charitable Trusts", en: "Pew Charitable Trusts" }, 
    subtext: { es: "Programa Pew Latin American Fellows", en: "Pew Latin American Fellows Program" } 
  }
];

export const HOME_CONTENT = {
  hero: {
    badge: { es: "Grupo de Estudio y Semillero de Investigación", en: "Study Group and Research Seedbed" },
    title: { 
      es: "Genómica y Biodiversidad del Caribe Colombiano", 
      en: "Genomics and Biodiversity of the Colombian Caribbean" 
    },
    subtitle: { 
      es: "Investigamos la diversidad biológica de nuestra región a través de un enfoque interdisciplinario que combina genómica, ecología y evolución.", 
      en: "We investigate the biological diversity of our region through an interdisciplinary approach that combines genomics, ecology, and evolution." 
    },
    ctaPrimary: { es: "Nuestra Investigación", en: "Our Research" },
    ctaSecondary: { es: "Conoce al Equipo", en: "Meet the Team" }
  },
  intro: {
    title: { es: "Ciencia desde el Caribe para el Mundo", en: "Science from the Caribbean for the World" },
    p1: { 
      es: "Ubicados en el Departamento de Química y Biología de la Universidad del Norte, nuestro grupo se dedica a comprender la estructura y dinámica de las comunidades en ecosistemas clave como el bosque seco tropical y el río Magdalena.", 
      en: "Located in the Department of Chemistry and Biology at the Universidad del Norte, our group is dedicated to understanding the structure and dynamics of communities in key ecosystems such as the tropical dry forest and the Magdalena River." 
    },
    p2: { 
      es: "Utilizamos herramientas avanzadas como ADN ambiental, metabarcoding y análisis filogenéticos, integrando ciencia básica con aplicaciones en conservación y monitoreo ambiental.", 
      en: "We use advanced tools such as environmental DNA, metabarcoding, and phylogenetic analysis, integrating basic science with applications in conservation and environmental monitoring." 
    },
    quote: { 
      es: "\"Hacer ciencia en el Caribe implica también compartirla, contextualizarla y fortalecer el vínculo con el entorno.\"", 
      en: "\"Doing science in the Caribbean also implies sharing it, contextualizing it, and strengthening the bond with the environment.\"" 
    },
    features: [
      { 
        title: { es: "Genómica", en: "Genomics" }, 
        desc: { es: "Evolución molecular y nuevos genes.", en: "Molecular evolution and new genes." } 
      },
      { 
        title: { es: "Ecología", en: "Ecology" }, 
        desc: { es: "Bosque seco y ecosistemas acuáticos.", en: "Dry forest and aquatic ecosystems." } 
      },
      { 
        title: { es: "Comunidad", en: "Community" }, 
        desc: { es: "Ciencia participativa y divulgación.", en: "Participatory science and outreach." } 
      },
      { 
        title: { es: "Impacto", en: "Impact" }, 
        desc: { es: "Conservación y monitoreo ambiental.", en: "Conservation and environmental monitoring." } 
      }
    ]
  },
  supportersTitle: { es: "Instituciones que nos apoyan", en: "Institutions that support us" }
};

export const TEAM_PAGE_CONTENT = {
  title: { es: "Nuestro Equipo", en: "Our Team" },
  subtitle: { 
    es: "Un grupo interdisciplinario de investigadores apasionados por la biodiversidad y la evolución.", 
    en: "An interdisciplinary group of researchers passionate about biodiversity and evolution." 
  }
};

export const RESEARCH_PAGE_CONTENT = {
  title: { es: "Líneas de Investigación", en: "Research Lines" },
  subtitle: { 
    es: "Exploramos la vida desde sus bases moleculares hasta sus interacciones ecológicas.", 
    en: "We explore life from its molecular bases to its ecological interactions." 
  },
  viewProjects: { es: "Ver Proyectos", en: "View Projects" }
};

export const PUBLICATIONS_PAGE_CONTENT = {
  title: { es: "Publicaciones y Producción", en: "Publications and Production" },
  subtitle: { 
    es: "Nuestro trabajo científico en revistas internacionales, preprints y libros.", 
    en: "Our scientific work in international journals, preprints, and books." 
  },
  types: {
    Paper: { es: "Artículo", en: "Paper" },
    Preprint: { es: "Preprint", en: "Preprint" },
    Thesis: { es: "Tesis", en: "Thesis" },
    Book: { es: "Libro", en: "Book" }
  },
  viewPublication: { es: "Ver Publicación", en: "View Publication" }
};

export const CONTACT_PAGE_CONTENT = {
  title: { es: "Contacto", en: "Contact" },
  subtitle: { 
    es: "¿Tienes preguntas sobre nuestro trabajo o estás interesado en colaborar? ¡Escríbenos!", 
    en: "Do you have questions about our work or are you interested in collaborating? Write to us!" 
  },
  infoTitle: { es: "Información de Contacto", en: "Contact Information" },
  location: { es: "Ubicación", en: "Location" },
  locationDesc: { 
    es: "Universidad del Norte, Km 5 Vía Puerto Colombia. Barranquilla, Colombia.", 
    en: "Universidad del Norte, Km 5 Vía Puerto Colombia. Barranquilla, Colombia." 
  },
  email: { es: "Correo Electrónico", en: "Email" },
  formTitle: { es: "Envíanos un mensaje", en: "Send us a message" },
  form: {
    name: { es: "Nombre Completo", en: "Full Name" },
    email: { es: "Correo Electrónico", en: "Email" },
    subject: { es: "Asunto", en: "Subject" },
    message: { es: "Mensaje", en: "Message" },
    send: { es: "Enviar Mensaje", en: "Send Message" }
  }
};
