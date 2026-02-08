/**
 * Seed Demo Topics into Firestore
 *
 * Populates Firestore with sample research topics for testing.
 *
 * Prerequisites:
 *   1. Same serviceAccountKey.json from set-admin.js
 *   2. firebase-admin installed (npm install firebase-admin)
 *
 * Usage:
 *   cd scripts
 *   node seed-topics.js
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const topics = [
  {
    title: 'Antimicrobial Resistance Patterns in Hospital-Acquired Infections',
    description:
      'A comprehensive study analyzing the prevalence of multidrug-resistant organisms in tertiary care hospitals across India. Includes methodology for sample collection, antibiotic susceptibility testing, and statistical analysis framework.',
    category: 'Microbiology',
    difficulty: 'MSc',
    price: 499,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'CRISPR-Cas9 Gene Editing in Plant Pathogen Resistance',
    description:
      'Exploring the application of CRISPR technology to develop disease-resistant crop varieties. Covers guide RNA design, transformation protocols, and phenotypic screening strategies suitable for Indian agricultural conditions.',
    category: 'Biotechnology',
    difficulty: 'PhD',
    price: 799,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'Gut Microbiome Diversity in South Indian Populations',
    description:
      'A metagenomic analysis of gut microbial composition across different dietary patterns in South India. Includes 16S rRNA sequencing protocol, bioinformatics pipeline, and community ecology analysis.',
    category: 'Microbiology',
    difficulty: 'PhD',
    price: 699,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'Water Quality Assessment Using Bioindicators',
    description:
      'Biological monitoring of freshwater ecosystems using macroinvertebrate and algal indices. Perfect for MSc students looking for a field-based project with clear methodology and data collection framework.',
    category: 'Environmental Science',
    difficulty: 'MSc',
    price: 399,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'Molecular Docking Studies on Anti-Diabetic Compounds from Medicinal Plants',
    description:
      'In-silico screening of phytochemicals from traditional Indian medicinal plants as potential anti-diabetic agents. Covers ligand preparation, protein target selection, docking protocols using AutoDock, and result interpretation.',
    category: 'Bioinformatics',
    difficulty: 'MSc',
    price: 599,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'Biofilm Formation and Quorum Sensing in Clinical Isolates',
    description:
      'Investigation of biofilm-forming ability and quorum sensing mechanisms in Pseudomonas and Staphylococcus clinical isolates. Includes crystal violet assay, confocal microscopy protocols, and gene expression analysis.',
    category: 'Microbiology',
    difficulty: 'PhD',
    price: 899,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'Bioremediation of Heavy Metals Using Indigenous Bacterial Strains',
    description:
      'Isolation and characterization of heavy metal-tolerant bacteria from contaminated sites for bioremediation applications. Covers enrichment culture techniques, metal tolerance assays, and biosorption experiments.',
    category: 'Environmental Science',
    difficulty: 'MSc',
    price: 449,
    status: 'available',
    createdAt: new Date(),
  },
  {
    title: 'Comparative Genomics of Pathogenic Mycobacterium Species',
    description:
      'Whole-genome sequence analysis comparing M. tuberculosis clinical isolates from drug-sensitive and drug-resistant cases. Covers genome assembly, SNP analysis, phylogenetics, and resistance gene identification.',
    category: 'Bioinformatics',
    difficulty: 'PhD',
    price: 999,
    status: 'available',
    createdAt: new Date(),
  },
];

try {
  const serviceAccount = JSON.parse(
    readFileSync(join(__dirname, 'serviceAccountKey.json'), 'utf8')
  );

  initializeApp({
    credential: cert(serviceAccount),
  });

  const db = getFirestore();
  const batch = db.batch();

  topics.forEach((topic) => {
    const ref = db.collection('topics').doc();
    batch.set(ref, topic);
  });

  await batch.commit();

  console.log(`\n✅ Successfully seeded ${topics.length} topics into Firestore!\n`);
  console.log('Topics added:');
  topics.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.title} (₹${t.price})`);
  });
  console.log('');
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('\n❌ Error: serviceAccountKey.json not found.');
    console.error('   Download it from Firebase Console:');
    console.error('   Project Settings → Service Accounts → Generate New Private Key');
    console.error('   Save it as scripts/serviceAccountKey.json\n');
  } else {
    console.error('\n❌ Error:', error.message, '\n');
  }
  process.exit(1);
}
