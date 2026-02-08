import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { HiX } from 'react-icons/hi';
import { updateOrder } from '../firebase/helpers';
import toast from 'react-hot-toast';

export default function UPIPaymentModal({ order, topic, onClose }) {
  const [utrNumber, setUtrNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const upiId = import.meta.env.VITE_UPI_ID || 'vaultq@upi';
  const upiName = import.meta.env.VITE_UPI_NAME || 'Vault Q';
  const amount = topic.price;

  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`VaultQ-${order?.id?.slice(0, 8) || 'ORDER'}`)}`;

  const handleSubmitUTR = async () => {
    if (!utrNumber.trim()) {
      toast.error('Please enter your UTR / transaction ID');
      return;
    }
    if (!order?.id) {
      toast.error('Order not found');
      return;
    }

    setSubmitting(true);
    try {
      await updateOrder(order.id, { utrNumber: utrNumber.trim() });
      toast.success('Payment details submitted! We\'ll verify within 2-4 hours.');
      onClose();
    } catch (err) {
      toast.error('Failed to submit. Please try again or contact us on WhatsApp.');
    }
    setSubmitting(false);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Complete Payment</h3>
          <button className="modal-close" onClick={onClose}><HiX /></button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            margin: '0 0 8px',
          }}>
            ₹{amount}
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
            for: {topic.title}
          </p>
        </div>

        {/* QR Code */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '24px',
          padding: '24px',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <QRCodeSVG
            value={upiLink}
            size={200}
            bgColor="#FAFAF5"
            fgColor="#1B1B1B"
            level="M"
          />
        </div>

        {/* UPI Deep Link */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a
            href={upiLink}
            className="btn btn-primary"
            style={{ width: '100%', display: 'flex' }}
          >
            Pay via UPI App
          </a>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
            Scan QR or tap the button to pay via any UPI app
          </p>
        </div>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          margin: '24px 0',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>After payment</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
        </div>

        {/* UTR Input */}
        <div className="form-group">
          <label>Enter UTR / Transaction ID</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., 412345678901"
            value={utrNumber}
            onChange={(e) => setUtrNumber(e.target.value)}
          />
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
            Find this in your UPI app's transaction details
          </p>
        </div>

        <button
          className="btn btn-accent"
          style={{ width: '100%' }}
          onClick={handleSubmitUTR}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit Payment Details'}
        </button>

        <p style={{
          fontSize: '0.8125rem',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
          marginTop: '16px',
          marginBottom: 0,
        }}>
          Your topic is reserved for you. Payment will be verified within 2–4 hours
          during business hours. If any issue, contact us on WhatsApp.
        </p>
      </div>
    </div>
  );
}
