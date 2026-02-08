import { Link } from 'react-router-dom';
import styles from './HowItWorksPage.module.css';

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'Tell Us Your Problem',
      description:
        'Fill a simple form or drop a WhatsApp message explaining where you\'re stuck. Are you looking for a topic? Confused about your proposal? Need help planning experiments? Just tell us.',
    },
    {
      number: 2,
      title: 'We Match You With Guidance',
      description:
        'Based on your needs, you\'ll get a curated topic, a resource pack, or a one-on-one guidance session. We focus on your specific situation — no generic advice.',
    },
    {
      number: 3,
      title: 'Receive an Actionable Roadmap',
      description:
        'Walk away with clear next steps — not vague advice, but specific actions. What to read, how to structure your work, what to do first, second, and third.',
    },
    {
      number: 4,
      title: 'Follow-Up Clarity',
      description:
        'Still confused after the session? Have a new question while working? Reach out again. We don\'t disappear after one interaction. Your growth matters to us.',
    },
  ];

  return (
    <>
      <section className={styles['hiw-hero']}>
        <div className="container">
          <h1>How It Works</h1>
          <p>
            Getting research help shouldn't be complicated.
            Here's our simple, transparent process.
          </p>
        </div>
      </section>

      <section className={styles['steps-section']}>
        <div className="container">
          <div className={styles['steps-container']}>
            {steps.map((step) => (
              <div key={step.number} className={styles.step}>
                <div className={styles['step-number']}>{step.number}</div>
                <div className={styles['step-content']}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reassurance}>
        <div className="container">
          <div className={styles['reassurance-box']}>
            <p>"No pressure. No commitments. No judgment. Just honest help from someone who's been there."</p>
          </div>

          <div style={{
            marginTop: 'var(--space-xl)',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <Link to="/topics" className="btn btn-primary btn-lg">
              Browse Research Topics
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
