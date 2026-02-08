import { useState, useEffect } from 'react';
import {
  getTopics,
  addTopic,
  updateTopic,
  deleteTopic,
  getOrders,
  confirmOrder,
  rejectOrder,
  getInquiries,
  markInquiryRead,
} from '../firebase/helpers';
import toast from 'react-hot-toast';
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('stats');
  const [topics, setTopics] = useState([]);
  const [orders, setOrders] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFirebaseConfigured = import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_API_KEY !== 'demo-api-key';

  // Add topic form
  const [newTopic, setNewTopic] = useState({
    title: '',
    description: '',
    price: '',
    category: 'Microbiology',
    difficulty: 'Intermediate',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (isFirebaseConfigured) {
        const [t, o, i] = await Promise.all([
          getTopics(),
          getOrders(),
          getInquiries(),
        ]);
        setTopics(t);
        setOrders(o);
        setInquiries(i);
      }
    } catch (err) {
      console.error('Failed to fetch admin data:', err);
      toast.error('Failed to load data');
    }
    setLoading(false);
  };

  // Stats
  const totalTopics = topics.length;
  const availableTopics = topics.filter((t) => t.status === 'available').length;
  const soldTopics = topics.filter((t) => t.status === 'sold').length;
  const pendingOrders = orders.filter((o) => o.paymentStatus === 'pending').length;
  const revenue = orders
    .filter((o) => o.paymentStatus === 'confirmed')
    .reduce((sum, o) => sum + (o.amount || 0), 0);

  // Handlers
  const handleAddTopic = async (e) => {
    e.preventDefault();
    if (!newTopic.title || !newTopic.description || !newTopic.price) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      await addTopic({
        ...newTopic,
        price: Number(newTopic.price),
      });
      setNewTopic({ title: '', description: '', price: '', category: 'Microbiology', difficulty: 'Intermediate' });
      toast.success('Topic added!');
      fetchData();
    } catch (err) {
      toast.error('Failed to add topic');
    }
  };

  const handleDeleteTopic = async (id) => {
    if (!window.confirm('Delete this topic?')) return;
    try {
      await deleteTopic(id);
      toast.success('Topic deleted');
      fetchData();
    } catch (err) {
      toast.error('Failed to delete topic');
    }
  };

  const handleConfirmOrder = async (orderId, topicId) => {
    if (!window.confirm('Confirm payment for this order?')) return;
    try {
      await confirmOrder(orderId, topicId);
      toast.success('Order confirmed!');
      fetchData();
    } catch (err) {
      toast.error('Failed to confirm order');
    }
  };

  const handleRejectOrder = async (orderId, topicId) => {
    if (!window.confirm('Reject payment? Topic will be made available again.')) return;
    try {
      await rejectOrder(orderId, topicId);
      toast.success('Order rejected. Topic is available again.');
      fetchData();
    } catch (err) {
      toast.error('Failed to reject order');
    }
  };

  const handleMarkRead = async (id) => {
    try {
      await markInquiryRead(id);
      fetchData();
    } catch (err) {
      toast.error('Failed to update');
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '—';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isFirebaseConfigured) {
    return (
      <div className={`container ${styles.admin}`}>
        <div className={styles['admin-header']}>
          <h1>Admin Dashboard</h1>
        </div>
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-4xl)',
          background: 'var(--color-warning-bg)',
          borderRadius: 'var(--radius-xl)',
        }}>
          <h2>Firebase Not Configured</h2>
          <p style={{ maxWidth: '500px', margin: '16px auto' }}>
            To use the admin dashboard, connect your Firebase project by updating
            the environment variables in your <code>.env</code> file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.admin}`}>
      <div className={styles['admin-header']}>
        <h1>Admin Dashboard</h1>
        <p>Manage topics, orders, and inquiries</p>
      </div>

      {/* Tabs */}
      <div className={styles['admin-tabs']}>
        {['stats', 'topics', 'orders', 'inquiries'].map((tab) => (
          <button
            key={tab}
            className={`${styles['admin-tab']} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'stats' && 'Overview'}
            {tab === 'topics' && `Topics (${totalTopics})`}
            {tab === 'orders' && `Orders (${orders.length})`}
            {tab === 'inquiries' && `Inquiries (${inquiries.length})`}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 'var(--space-4xl)', color: 'var(--color-text-muted)' }}>
          Loading...
        </div>
      ) : (
        <>
          {/* ─── Stats Tab ─── */}
          {activeTab === 'stats' && (
            <div className={styles['stats-grid']}>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>{totalTopics}</div>
                <div className={styles['stat-label']}>Total Topics</div>
              </div>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>{availableTopics}</div>
                <div className={styles['stat-label']}>Available</div>
              </div>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>{pendingOrders}</div>
                <div className={styles['stat-label']}>Pending Orders</div>
              </div>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>₹{revenue}</div>
                <div className={styles['stat-label']}>Confirmed Revenue</div>
              </div>
            </div>
          )}

          {/* ─── Topics Tab ─── */}
          {activeTab === 'topics' && (
            <>
              <div className={styles['add-form']}>
                <h3>Add New Topic</h3>
                <form onSubmit={handleAddTopic}>
                  <div className={styles['add-form-grid']}>
                    <div className="form-group">
                      <label>Title *</label>
                      <input
                        type="text"
                        className="form-input"
                        value={newTopic.title}
                        onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price (₹) *</label>
                      <input
                        type="number"
                        className="form-input"
                        value={newTopic.price}
                        onChange={(e) => setNewTopic({ ...newTopic, price: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        className="form-select"
                        value={newTopic.category}
                        onChange={(e) => setNewTopic({ ...newTopic, category: e.target.value })}
                      >
                        <option>Microbiology</option>
                        <option>Biotechnology</option>
                        <option>Bioinformatics</option>
                        <option>Life Sciences</option>
                        <option>Biochemistry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Difficulty</label>
                      <select
                        className="form-select"
                        value={newTopic.difficulty}
                        onChange={(e) => setNewTopic({ ...newTopic, difficulty: e.target.value })}
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description *</label>
                    <textarea
                      className="form-textarea"
                      value={newTopic.description}
                      onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Add Topic</button>
                </form>
              </div>

              <div className={styles['admin-table-wrapper']}>
                <table className={styles['admin-table']}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topics.map((topic) => (
                      <tr key={topic.id}>
                        <td style={{ maxWidth: '300px' }}>{topic.title}</td>
                        <td><span className="badge badge-category">{topic.category}</span></td>
                        <td>₹{topic.price}</td>
                        <td><span className={`badge badge-${topic.status}`}>{topic.status}</span></td>
                        <td>
                          <div className={styles['admin-actions']}>
                            {topic.status !== 'available' && (
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => updateTopic(topic.id, {
                                  status: 'available',
                                  purchasedBy: null,
                                  purchasedAt: null,
                                  orderId: null,
                                }).then(fetchData)}
                              >
                                Reset
                              </button>
                            )}
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDeleteTopic(topic.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {topics.length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                          No topics yet. Add one above.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ─── Orders Tab ─── */}
          {activeTab === 'orders' && (
            <div className={styles['admin-table-wrapper']}>
              <table className={styles['admin-table']}>
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Student</th>
                    <th>Amount</th>
                    <th>UTR</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td style={{ maxWidth: '200px' }}>{order.topicTitle}</td>
                      <td>{order.studentEmail}</td>
                      <td>₹{order.amount}</td>
                      <td>{order.utrNumber || '—'}</td>
                      <td>
                        <span className={`badge ${
                          order.paymentStatus === 'pending' ? 'badge-reserved' :
                          order.paymentStatus === 'confirmed' ? 'badge-available' :
                          'badge-sold'
                        }`}>
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="text-sm">{formatDate(order.createdAt)}</td>
                      <td>
                        {order.paymentStatus === 'pending' && (
                          <div className={styles['admin-actions']}>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleConfirmOrder(order.id, order.topicId)}
                            >
                              Confirm
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleRejectOrder(order.id, order.topicId)}
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr>
                      <td colSpan={7} style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                        No orders yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* ─── Inquiries Tab ─── */}
          {activeTab === 'inquiries' && (
            <div>
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className={`${styles['inquiry-card']} ${!inq.read ? styles.unread : ''}`}
                >
                  <div className={styles['inquiry-meta']}>
                    <strong>{inq.name}</strong>
                    <span>{inq.email}</span>
                    <span>{inq.courseYear || '—'}</span>
                    <span>{inq.helpType || '—'}</span>
                    <span>{formatDate(inq.createdAt)}</span>
                    {!inq.read && (
                      <span className="badge badge-available">New</span>
                    )}
                  </div>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>{inq.message}</p>
                  {!inq.read && (
                    <button
                      className="btn btn-secondary btn-sm"
                      style={{ marginTop: '12px' }}
                      onClick={() => handleMarkRead(inq.id)}
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              ))}
              {inquiries.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: 'var(--space-4xl)',
                  color: 'var(--color-text-muted)',
                }}>
                  No inquiries yet.
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
