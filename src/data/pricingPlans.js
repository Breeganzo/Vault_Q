const pricingPlans = [
  {
    id: 'quick-clarity',
    name: 'Quick Clarity',
    price: 299,
    description: 'Got a specific doubt? Need quick direction? This is for you.',
    features: [
      'Single doubt-clearing session (30 min)',
      'Topic suggestions based on your interest',
      'Email summary of key takeaways',
      'No commitments — one-time only',
    ],
    highlight: false,
    cta: 'Get Quick Clarity',
  },
  {
    id: 'research-starter',
    name: 'Research Starter',
    price: 699,
    description: 'Starting your project from scratch? Let\'s build a solid foundation together.',
    features: [
      'Topic selection + feasibility discussion',
      'Proposal/synopsis structuring guidance',
      '2 guidance sessions (30 min each)',
      'Curated resource list for your topic',
      '1-week follow-up support via email',
    ],
    highlight: true,
    cta: 'Start Your Research',
  },
  {
    id: 'full-guidance',
    name: 'Full Guidance',
    price: 1499,
    description: 'End-to-end support for students who want thorough, ongoing mentorship.',
    features: [
      'Everything in Research Starter',
      'Experimental design discussion',
      'Literature review structuring',
      'Career & research roadmap session',
      '4 guidance sessions (30 min each)',
      '2-week follow-up support',
    ],
    highlight: false,
    cta: 'Get Full Guidance',
  },
];

export default pricingPlans;
