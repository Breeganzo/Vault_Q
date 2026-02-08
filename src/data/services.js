import {
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineBeaker,
  HiOutlineBookOpen,
  HiOutlineDesktopComputer,
  HiOutlineMap,
} from 'react-icons/hi';

const services = [
  {
    id: 'topic-selection',
    icon: 'HiOutlineAcademicCap',
    title: 'Research Topic Selection',
    shortDesc: 'Find a research topic that\'s relevant, feasible, and genuinely interesting to you.',
    forWhom: 'Students starting MSc projects, internships, or looking for a direction in their research journey.',
    whatYouGet: [
      'Curated topic suggestions tailored to your field and interests',
      'Feasibility and relevance analysis',
      'Discussion on scope, novelty, and expected outcomes',
      'List of related recent papers to get started',
    ],
    notPromised: [
      'Guaranteed topic approval by your institution or guide',
      'Complete thesis or project work',
      'Publishing or journal submission support',
    ],
  },
  {
    id: 'proposal-guidance',
    icon: 'HiOutlineDocumentText',
    title: 'Proposal & Synopsis Guidance',
    shortDesc: 'Structure your research proposal so it actually makes sense — to you and your evaluators.',
    forWhom: 'Students writing their first research proposal, synopsis, or project report outline.',
    whatYouGet: [
      'Clear structure and formatting guidance',
      'Feedback on objectives, methodology, and expected outcomes',
      'Help with writing the rationale and literature context',
      'Review of your draft with actionable suggestions',
    ],
    notPromised: [
      'Writing the proposal or synopsis for you',
      'Guaranteed approval from your college',
      'Plagiarism-free certificates or originality reports',
    ],
  },
  {
    id: 'experimental-design',
    icon: 'HiOutlineBeaker',
    title: 'Experimental Design Help',
    shortDesc: 'Plan your experiments properly before you waste time and reagents.',
    forWhom: 'Students confused about methodology, controls, variables, or how to plan a study.',
    whatYouGet: [
      'Study design discussion (in vitro, in vivo, in silico basics)',
      'Variable identification — independent, dependent, controlled',
      'Controls planning and sample size considerations',
      'Protocol pointers and workflow suggestions',
    ],
    notPromised: [
      'Running experiments or providing lab access',
      'Statistical analysis or data interpretation',
      'Custom protocols or SOPs',
    ],
  },
  {
    id: 'literature-review',
    icon: 'HiOutlineBookOpen',
    title: 'Literature Review Support',
    shortDesc: 'Stop drowning in papers. Learn how to read, organize, and actually use the literature.',
    forWhom: 'Students overwhelmed by research papers or struggling to write a coherent review.',
    whatYouGet: [
      'Search strategy and database navigation tips',
      'Key paper identification for your topic',
      'Review structuring — thematic, chronological, or methodological',
      'Guidance on citation management and avoiding plagiarism',
    ],
    notPromised: [
      'Writing the literature review for you',
      'Access to paid journals or databases',
      'Comprehensive bibliography or reference lists',
    ],
  },
  {
    id: 'bioinformatics',
    icon: 'HiOutlineDesktopComputer',
    title: 'Bioinformatics & Wet Lab Guidance',
    shortDesc: 'Basic direction for computational biology tools or wet lab troubleshooting.',
    forWhom: 'Students needing introductory bioinformatics help or wet lab protocol guidance.',
    whatYouGet: [
      'Tool and software recommendations for your analysis',
      'Basic workflow guidance (BLAST, sequence analysis, docking, etc.)',
      'Wet lab troubleshooting discussion',
      'Resource recommendations for self-learning',
    ],
    notPromised: [
      'Complete data analysis or custom scripts',
      'Advanced bioinformatics project execution',
      'Wet lab hands-on training',
    ],
  },
  {
    id: 'career-roadmap',
    icon: 'HiOutlineMap',
    title: 'Career & Research Roadmap',
    shortDesc: 'Figure out your next step — MSc, PhD, industry, or something else entirely.',
    forWhom: 'Students confused about career options after BSc/MSc, or planning for PhD/competitive exams.',
    whatYouGet: [
      'Personalized roadmap based on your background and goals',
      'Exam preparation guidance (CSIR-NET, GATE, DBT-JRF, etc.)',
      'PhD application and SOP discussion',
      'Industry vs. academia — an honest perspective',
    ],
    notPromised: [
      'Guaranteed admissions, placements, or exam results',
      'Application submission on your behalf',
      'Reference letters or recommendations',
    ],
  },
];

export default services;
