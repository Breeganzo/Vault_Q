import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopicCard from '../components/TopicCard';
import UPIPaymentModal from '../components/UPIPaymentModal';
import { getTopics, reserveTopic } from '../firebase/helpers';
import demoTopics from '../data/demoTopics';
import toast from 'react-hot-toast';
import styles from './TopicsPage.module.css';

export default function TopicsPage() {
  const { currentUser } = useAuth();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [showPayment, setShowPayment] = useState(null); // { topic, orderId }
  const [reserving, setReserving] = useState(false);

  const isFirebaseConfigured = import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_API_KEY !== 'demo-api-key';

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      try {
        if (isFirebaseConfigured) {
          const data = await getTopics();
          setTopics(data);
        } else {
          // Use demo data
          setTopics(demoTopics);
        }
      } catch (err) {
        console.error('Failed to fetch topics:', err);
        setTopics(demoTopics);
      }
      setLoading(false);
    };
    fetchTopics();
  }, []);

  const categories = ['all', ...new Set(topics.map((t) => t.category))];

  const filteredTopics = topics.filter((t) => {
    const matchCategory = filter === 'all' || t.category === filter;
    const matchSearch =
      search === '' ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleReserve = async (topic) => {
    if (!currentUser) {
      toast.error('Please sign in to reserve a topic');
      return;
    }

    if (!isFirebaseConfigured) {
      toast('This is a demo. Connect Firebase to enable purchases.', { icon: 'ℹ️' });
      return;
    }

    setReserving(true);
    try {
      const orderId = await reserveTopic(topic.id, currentUser.uid, currentUser.email);
      setShowPayment({
        topic,
        order: { id: orderId },
      });
      // Refresh topics
      const data = await getTopics();
      setTopics(data);
      toast.success('Topic reserved! Complete payment to confirm.');
    } catch (err) {
      toast.error(err.message || 'Failed to reserve topic');
    }
    setReserving(false);
  };

  return (
    <>
      <section className={styles['topics-hero']}>
        <div className="container">
          <h1>Research Topics</h1>
          <p>
            Curated, exclusive research topics for your MSc project, internship, or
            thesis. Each topic is sold to only one student — once it's yours, it's yours.
          </p>
        </div>
      </section>

      <section className={`container ${styles['topics-section']}`}>
        {/* Filters */}
        <div className={styles['topics-filters']}>
          <input
            type="text"
            className="form-input"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Topics Grid */}
        {loading ? (
          <div className={`${styles['topics-grid']}`}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card" style={{ minHeight: '250px' }}>
                <div className="skeleton" style={{ height: '20px', width: '40%', marginBottom: '16px' }} />
                <div className="skeleton" style={{ height: '24px', width: '90%', marginBottom: '12px' }} />
                <div className="skeleton" style={{ height: '60px', width: '100%', marginBottom: '16px' }} />
                <div className="skeleton" style={{ height: '36px', width: '50%' }} />
              </div>
            ))}
          </div>
        ) : filteredTopics.length === 0 ? (
          <div className={styles['topics-empty']}>
            <p>No topics found matching your criteria.</p>
            <p className="text-sm text-muted" style={{ marginTop: '8px' }}>
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <div className={styles['topics-grid']}>
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onReserve={handleReserve}
              />
            ))}
          </div>
        )}

        {!isFirebaseConfigured && (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-xl)',
            marginTop: 'var(--space-xl)',
            background: 'var(--color-warning-bg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #FCD34D',
          }}>
            <p style={{ margin: 0, color: 'var(--color-warning)', fontWeight: 600 }}>
              Demo Mode — Firebase not configured. Topics shown are samples.
            </p>
          </div>
        )}
      </section>

      {/* UPI Payment Modal */}
      {showPayment && (
        <UPIPaymentModal
          order={showPayment.order}
          topic={showPayment.topic}
          onClose={() => setShowPayment(null)}
        />
      )}
    </>
  );
}
