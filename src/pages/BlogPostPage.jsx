import { useParams, Link, Navigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import blogPosts from '../data/blogPosts';
import styles from './BlogPage.module.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Simple markdown-like renderer for the blog content
function renderContent(content) {
  // Split content into lines and process
  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={key++}>
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </Tag>
      );
      currentList = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={key++}>{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={key++}>{line.slice(4)}</h3>);
    } else if (line.startsWith('- ')) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(processInline(line.slice(2)));
    } else if (/^\d+\.\s/.test(line)) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(processInline(line.replace(/^\d+\.\s/, '')));
    } else {
      flushList();
      elements.push(
        <p key={key++} dangerouslySetInnerHTML={{ __html: processInline(line) }} />
      );
    }
  }

  flushList();
  return elements;
}

function processInline(text) {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return text;
}

export default function BlogPostPage() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <section className={`container ${styles['blog-post']}`}>
      <div className={styles['blog-post-inner']}>
        <Link to="/blog" className={styles['blog-back']}>
          <HiArrowLeft /> Back to Blog
        </Link>

        <div className={styles['blog-post-header']}>
          <h1>{post.title}</h1>
          <div className={styles['blog-post-meta']}>
            <span className="badge badge-category">{post.category}</span>
            <span>{formatDate(post.date)}</span>
            <span>by {post.author}</span>
          </div>
        </div>

        <div className={styles['blog-post-content']}>
          {renderContent(post.content)}
        </div>

        <div style={{
          marginTop: 'var(--space-3xl)',
          padding: 'var(--space-xl)',
          background: 'var(--color-primary-bg)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
        }}>
          <h3>Need Help with Your Research?</h3>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            If this article resonated with you, we can help you take the next step.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
