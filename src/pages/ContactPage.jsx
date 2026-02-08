import { useState } from 'react';
import { HiOutlineMail, HiOutlineClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { submitInquiry } from '../firebase/helpers';
import toast from 'react-hot-toast';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseYear: '',
    helpType: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isFirebaseConfigured = import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_API_KEY !== 'demo-api-key';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    try {
      if (isFirebaseConfigured) {
        await submitInquiry(formData);
      }
      setSubmitted(true);
      toast.success('Message sent! We\'ll get back to you soon.');
    } catch (err) {
      toast.error('Failed to send message. Please try WhatsApp instead.');
    }
    setSubmitting(false);
  };

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@vaultq.in';

  return (
    <>
      <section className={styles['contact-hero']}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Have a question? Need guidance? Want to book a session?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className={`container ${styles['contact-section']}`}>
        <div className={styles['contact-grid']}>
          {/* Contact Form */}
          <div className={styles['contact-form']}>
            <h2>Send Us a Message</h2>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: 'var(--space-2xl)',
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--space-md)',
                }}>
                  ✉️
                </div>
                <h3>Message Sent!</h3>
                <p>
                  We've received your message and will get back to you within
                  4–6 hours during business hours. For faster responses,
                  try WhatsApp.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', courseYear: '', helpType: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Course & Year</label>
                  <input
                    type="text"
                    name="courseYear"
                    className="form-input"
                    placeholder="e.g., MSc Microbiology, 2nd Year"
                    value={formData.courseYear}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>What do you need help with?</label>
                  <select
                    name="helpType"
                    className="form-select"
                    value={formData.helpType}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="topic-selection">Topic Selection</option>
                    <option value="proposal-help">Proposal / Synopsis Help</option>
                    <option value="experimental-design">Experimental Design</option>
                    <option value="literature-review">Literature Review</option>
                    <option value="career-guidance">Career Guidance</option>
                    <option value="general-query">General Query</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your situation, what you're struggling with, or what kind of help you're looking for..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={styles['contact-info']}>
            <div>
              <h2>Other Ways to Reach Us</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Pick the method that's most convenient for you.
                We're responsive on all channels.
              </p>
            </div>

            <div className={styles['contact-method']}>
              <div className={styles['contact-method-icon']}>
                <FaWhatsapp />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>Usually the fastest way to reach us</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I need research guidance. My name is ')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className={styles['contact-method']}>
              <div className={styles['contact-method-icon']}>
                <HiOutlineMail />
              </div>
              <div>
                <h4>Email</h4>
                <p>For detailed queries or formal communication</p>
                <a href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className={styles['response-time']}>
              <HiOutlineClock style={{ fontSize: '1.5rem', marginBottom: '8px' }} />
              <p>We typically respond within 4–6 hours during business hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
