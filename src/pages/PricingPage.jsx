import { Link } from 'react-router-dom';
import pricingPlans from '../data/pricingPlans';
import styles from './PricingPage.module.css';

export default function PricingPage() {
  return (
    <>
      <section className={styles['pricing-hero']}>
        <div className="container">
          <h1>Simple, Honest Pricing</h1>
          <p>
            No hidden costs. No subscriptions. Pay only for what you need.
            One-time guidance, affordable research topics, and transparent rates.
          </p>
        </div>
      </section>

      <section className={`container ${styles['pricing-section']}`}>
        <div className={styles['pricing-grid']}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles['pricing-card']} ${plan.highlight ? styles.highlight : ''}`}
            >
              <div className={styles['pricing-name']}>{plan.name}</div>
              <div className={styles['pricing-price']}>
                ₹{plan.price} <span>one-time</span>
              </div>
              <p className={styles['pricing-desc']}>{plan.description}</p>
              <ul className={styles['pricing-features']}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles['pricing-note']}>
        <div className="container">
          <div className={styles['pricing-note-box']}>
            <h3>Research Topics Are Priced Individually</h3>
            <p>
              Research topics on our <Link to="/topics">Topics page</Link> are priced
              based on their novelty, depth, and complexity — starting from ₹299.
              Each topic is exclusive — once purchased by a student, it's unavailable
              to others. Browse the marketplace to find the perfect topic for your project.
            </p>
          </div>

          <div style={{
            marginTop: 'var(--space-2xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '0.9375rem',
            color: 'var(--color-text-muted)',
          }}>
            <span>✓ No hidden charges</span>
            <span>✓ No recurring fees</span>
            <span>✓ No pressure to upgrade</span>
            <span>✓ UPI payments accepted</span>
          </div>
        </div>
      </section>
    </>
  );
}
