import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            transition: 'all 250ms ease',
          }}
        >
          <button
            onClick={() => toggle(index)}
            style={{
              width: '100%',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--color-text)',
              lineHeight: 1.4,
            }}
          >
            {item.question}
            <HiChevronDown
              style={{
                flexShrink: 0,
                fontSize: '1.25rem',
                color: 'var(--color-primary)',
                transition: 'transform 250ms ease',
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
              }}
            />
          </button>
          <div
            style={{
              maxHeight: openIndex === index ? '500px' : '0',
              overflow: 'hidden',
              transition: 'max-height 350ms ease',
            }}
          >
            <p
              style={{
                padding: '0 24px 20px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                fontSize: '0.9375rem',
                margin: 0,
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
