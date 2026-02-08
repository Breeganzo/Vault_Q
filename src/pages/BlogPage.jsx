import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import styles from './BlogPage.module.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      <section className={styles['blog-hero']}>
        <div className="container">
          <h1>Research Tips & Insights</h1>
          <p>
            Practical articles to help you navigate your research journey —
            written in plain language, not academic jargon.
          </p>
        </div>
      </section>

      <section className={`container ${styles['blog-list']}`}>
        <div className={styles['blog-grid']}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles['blog-card']}>
              <div className={styles['blog-card-meta']}>
                <span className="badge badge-category">{post.category}</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`}>Read More →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
