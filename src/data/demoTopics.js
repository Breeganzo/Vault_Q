// Demo topics for when Firebase is not configured or for development
const demoTopics = [
  {
    id: 'demo-1',
    title: 'Antimicrobial Activity of Biosynthesized Silver Nanoparticles from Medicinal Plant Extracts',
    description:
      'Explore the green synthesis of silver nanoparticles using plant extracts and evaluate their antimicrobial potential against MDR bacteria. Includes methodology for synthesis, characterization (UV-Vis, SEM, XRD), and antimicrobial assays.',
    price: 499,
    status: 'available',
    category: 'Microbiology',
    difficulty: 'Intermediate',
    purchasedBy: null,
  },
  {
    id: 'demo-2',
    title: 'CRISPR-Cas9 Mediated Gene Editing in Model Organisms: A Comprehensive Review',
    description:
      'A structured literature review topic covering recent advances in CRISPR-Cas9 applications, delivery mechanisms, off-target effects, and ethical considerations. Ideal for students who prefer computational/review-based projects.',
    price: 399,
    status: 'available',
    category: 'Biotechnology',
    difficulty: 'Beginner',
    purchasedBy: null,
  },
  {
    id: 'demo-3',
    title: 'Isolation and Characterization of Bacteriophages Against Hospital-Acquired Infections',
    description:
      'A wet lab project focusing on isolating bacteriophages from environmental samples and testing their lytic activity against common nosocomial pathogens. Includes protocol design for phage isolation, purification, and host range determination.',
    price: 699,
    status: 'available',
    category: 'Microbiology',
    difficulty: 'Advanced',
    purchasedBy: null,
  },
  {
    id: 'demo-4',
    title: 'In Silico Molecular Docking Studies of Phytochemicals Against Dengue Virus Proteins',
    description:
      'A bioinformatics-based project using molecular docking tools (AutoDock Vina, PyRx) to screen plant-derived compounds against dengue virus target proteins. Suitable for students with basic computer skills and interest in drug discovery.',
    price: 549,
    status: 'available',
    category: 'Bioinformatics',
    difficulty: 'Intermediate',
    purchasedBy: null,
  },
  {
    id: 'demo-5',
    title: 'Microbiome Analysis of Fermented Foods Using 16S rRNA Sequencing Data',
    description:
      'Analyze publicly available 16S rRNA sequencing datasets of traditional Indian fermented foods. Learn bioinformatics pipelines (QIIME2, R), taxonomic classification, and diversity analysis. No wet lab required.',
    price: 599,
    status: 'sold',
    category: 'Bioinformatics',
    difficulty: 'Intermediate',
    purchasedBy: 'demo-user',
  },
  {
    id: 'demo-6',
    title: 'Biofilm Formation and Antibiotic Resistance in Clinical Isolates of Staphylococcus aureus',
    description:
      'Investigate the relationship between biofilm formation ability and antibiotic resistance patterns in clinical S. aureus isolates. Includes protocols for biofilm quantification (crystal violet assay) and antibiotic susceptibility testing.',
    price: 599,
    status: 'available',
    category: 'Microbiology',
    difficulty: 'Intermediate',
    purchasedBy: null,
  },
];

export default demoTopics;
