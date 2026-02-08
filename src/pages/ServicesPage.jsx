import {
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineBeaker,
  HiOutlineBookOpen,
  HiOutlineDesktopComputer,
  HiOutlineMap,
} from 'react-icons/hi';
import services from '../data/services';
import styles from './ServicesPage.module.css';

const iconMap = {
  HiOutlineAcademicCap: HiOutlineAcademicCap,
  HiOutlineDocumentText: HiOutlineDocumentText,
  HiOutlineBeaker: HiOutlineBeaker,
  HiOutlineBookOpen: HiOutlineBookOpen,
  HiOutlineDesktopComputer: HiOutlineDesktopComputer,
  HiOutlineMap: HiOutlineMap,
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles['services-hero']}>
        <div className="container">
          <h1>What We Can Help You With</h1>
          <p>
            Practical, honest guidance at every stage of your research journey.
            Each service clearly states what you get — and what we don't promise.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles['services-grid']}>
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className={styles['service-card']}>
                <div className={styles['service-card-header']}>
                  <div className={styles['service-icon']}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.shortDesc}</p>
                  </div>
                </div>

                <div className={styles['service-details']}>
                  <div className={`${styles['service-details-column']} ${styles['for-whom']}`}>
                    <h4>Who It's For</h4>
                    <p>{service.forWhom}</p>
                  </div>

                  <div className={`${styles['service-details-column']} ${styles['what-you-get']}`}>
                    <h4>What You Get</h4>
                    <ul>
                      {service.whatYouGet.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${styles['service-details-column']} ${styles['not-promised']}`}>
                    <h4>What We Don't Promise</h4>
                    <ul>
                      {service.notPromised.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{
        padding: 'var(--space-2xl) 0',
        background: 'var(--color-border-light)',
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            <strong>Academic Honesty Note:</strong> Vault Q provides research guidance
            and mentorship only. We do not write assignments, theses, or papers on
            behalf of students. All academic work must be your own. We encourage
            ethical research practices and integrity at every step.
          </p>
        </div>
      </section>
    </>
  );
}
