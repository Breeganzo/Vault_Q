import { Link } from 'react-router-dom';
import {
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineBan,
  HiOutlineCurrencyRupee,
  HiOutlineCheckCircle,
  HiOutlineHeart,
} from 'react-icons/hi';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ───────────────────────────────── */}
      <section className={styles.hero}>
        <div className={`container ${styles['hero-content']}`}>
          <span className={styles['hero-tag']}>For students, by a fellow researcher</span>
          <h1>
            Research Guidance You Can <span>Actually Afford</span>
          </h1>
          <p className={styles['hero-subtitle']}>
            Curated topics, practical mentorship, and honest support for students
            who want to do real research — without burning a hole in their pocket.
          </p>
          <div className={styles['hero-buttons']}>
            <Link to="/topics" className="btn btn-primary btn-lg">
              Explore Research Topics
            </Link>
            <Link to="/how-it-works" className="btn btn-secondary btn-lg">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Benefits ───────────────────────────── */}
      <section className={styles.benefits}>
        <div className="container">
          <div className="section-header">
            <h2>What You Get with Vault Q</h2>
            <p>Simple, practical help at every stage of your research journey.</p>
          </div>
          <div className={styles['benefits-grid']}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <HiOutlineLightBulb />
              </div>
              <h3>Clarity</h3>
              <p>Stop guessing your topic. Get curated, feasible research ideas that actually work.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <HiOutlineAcademicCap />
              </div>
              <h3>Guidance</h3>
              <p>Step-by-step mentorship from proposal writing to experimental design.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <HiOutlineShieldCheck />
              </div>
              <h3>Confidence</h3>
              <p>Walk into your viva or lab knowing exactly what you're doing and why.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <HiOutlineClock />
              </div>
              <h3>Time-Saving</h3>
              <p>Skip weeks of confusion. Get actionable direction in a single session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Differentiator Strip ────────────────── */}
      <section className={styles.differentiator}>
        <div className="container">
          <div className={styles['diff-grid']}>
            <div className={styles['diff-item']}>
              <div className={styles.icon}><HiOutlineBan /></div>
              <h4>No False Promises</h4>
              <p>We tell you exactly what we can and cannot do. No exaggerations.</p>
            </div>
            <div className={styles['diff-item']}>
              <div className={styles.icon}><HiOutlineCurrencyRupee /></div>
              <h4>No Overpriced Courses</h4>
              <p>Pay only for what you need. Starting at just ₹299 per session.</p>
            </div>
            <div className={styles['diff-item']}>
              <div className={styles.icon}><HiOutlineCheckCircle /></div>
              <h4>Clear Outcomes</h4>
              <p>Every service lists exactly what you get — and what you don't.</p>
            </div>
            <div className={styles['diff-item']}>
              <div className={styles.icon}><HiOutlineHeart /></div>
              <h4>Made for Students</h4>
              <p>Built by someone who's been through the same struggles you're facing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────── */}
      <section className={styles['cta-banner']}>
        <div className="container">
          <h2>Ready to Start Your Research Journey?</h2>
          <p>
            Whether you need a topic, a plan, or just some clarity — we're here to help.
            No pressure, no commitments.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/topics" className="btn btn-primary btn-lg">
              Browse Research Topics
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
