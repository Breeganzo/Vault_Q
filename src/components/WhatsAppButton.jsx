import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
  const message = encodeURIComponent('Hi, I need research guidance. My name is ');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        zIndex: 80,
        transition: 'transform 250ms ease, box-shadow 250ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
