import {
  HiOutlineHeart,
  HiOutlineCurrencyRupee,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <>
      <section className={styles['about-hero']}>
        <div className="container">
          <h1>About Vault Q</h1>
          <p>
            Built by a fellow researcher who understands the struggle — because
            every student deserves affordable, honest guidance.
          </p>
        </div>
      </section>

      <section className={styles['about-story']}>
        <div className={`container ${styles['about-story-inner']}`}>
          <div className={styles['about-avatar']}>VQ</div>
          <h2>The Story Behind Vault Q</h2>

          <p>
            I'm an MSc Microbiology graduate with a passion for translating
            complex science into practical, actionable solutions. After spending
            years navigating the confusing, often overwhelming world of academic
            research — the jargon, the expensive "guidance" courses that promised
            the moon, the lack of genuine mentorship — I realized something needed
            to change.
          </p>

          <p>
            Too many students, especially from middle-class backgrounds, feel lost
            when it comes to choosing a research topic, writing a proposal, or
            planning experiments. The existing options are either too expensive, too
            vague, or too corporate to actually help a student sitting in a college
            hostel trying to figure out their MSc project.
          </p>

          <p>
            <strong>Vault Q was built to be the mentor I wished I had.</strong>
          </p>

          <p>
            There's no team of 50 people behind this. No fancy office. No venture
            capital. Just real experience, genuine care for students, and a
            commitment to keeping things affordable. I curate every research topic,
            review every guidance session personally, and make sure every student
            who reaches out gets honest, practical help — not empty promises.
          </p>

          <p>
            If you're a student reading this — I get it. Research can feel
            intimidating, and everyone seems to have it figured out except you.
            They don't. Everyone was confused at some point. You just need the
            right push in the right direction. That's what Vault Q is here for.
          </p>
        </div>
      </section>

      <section className={styles['about-values']}>
        <div className="container">
          <div className="section-header">
            <h2>What We Stand For</h2>
          </div>
          <div className={styles['values-grid']}>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}><HiOutlineHeart /></div>
              <h3>Honesty First</h3>
              <p>We tell you exactly what we can do and what we can't. No vague promises.</p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}><HiOutlineCurrencyRupee /></div>
              <h3>Affordability</h3>
              <p>Quality guidance shouldn't cost a fortune. Our pricing reflects that belief.</p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}><HiOutlineAcademicCap /></div>
              <h3>Mentorship Mindset</h3>
              <p>We don't do your work. We teach you how to think, plan, and execute independently.</p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}><HiOutlineShieldCheck /></div>
              <h3>No Shortcuts</h3>
              <p>Ethical guidance only. Your academic integrity matters more than a quick fix.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['about-disclaimer']}>
        <div className="container">
          <div className={styles['disclaimer-box']}>
            <h3>A Transparent Note</h3>
            <p>
              I'm not a PhD supervisor or an institution. I'm a working professional
              who helps students find clarity in their research journey. I bring real
              experience, not inflated credentials. Vault Q is a guidance platform,
              not an academic ghostwriting service. Every piece of work you submit
              to your institution must be your own.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
