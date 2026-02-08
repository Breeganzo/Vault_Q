import styles from './TopicCard.module.css';

export default function TopicCard({ topic, onReserve }) {
  const isAvailable = topic.status === 'available';

  return (
    <div className={styles['topic-card']}>
      <div className={styles['topic-card-header']}>
        <div className={styles['topic-card-badges']}>
          <span className="badge badge-category">{topic.category}</span>
          <span className={`badge badge-${topic.status}`}>
            {topic.status === 'available' ? 'Available' : topic.status === 'reserved' ? 'Reserved' : 'Sold'}
          </span>
        </div>
        {topic.difficulty && (
          <span className={styles['difficulty-tag']}>{topic.difficulty}</span>
        )}
      </div>

      <h3>{topic.title}</h3>
      <p>{topic.description}</p>

      <div className={styles['topic-card-footer']}>
        <div className={styles['topic-price']}>
          ₹{topic.price} <span>one-time</span>
        </div>
        <button
          className={`btn btn-primary btn-sm`}
          onClick={() => onReserve && onReserve(topic)}
          disabled={!isAvailable}
        >
          {isAvailable ? 'Reserve Topic' : topic.status === 'reserved' ? 'Reserved' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}
