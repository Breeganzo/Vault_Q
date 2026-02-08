import { Link } from 'react-router-dom';
import faqItems from '../data/faqItems';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQPage() {
  return (
    <>
      <section style={{
        padding: 'var(--space-3xl) 0',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--color-primary-bg) 0%, var(--color-bg) 100%)',
      }}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Honest answers to common student questions. If your doubt isn't here, just reach out.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FAQAccordion items={faqItems} />

          <div style={{
            textAlign: 'center',
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-xl)',
            background: 'var(--color-primary-bg)',
            borderRadius: 'var(--radius-xl)',
          }}>
            <h3>Still Have Questions?</h3>
            <p>We're happy to help. No question is too small.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
