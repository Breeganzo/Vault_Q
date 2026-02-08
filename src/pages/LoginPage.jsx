import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const { currentUser, login, signup, loginWithGoogle } = useAuth();
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (currentUser) {
    const from = location.state?.from || '/';
    return <Navigate to={from} replace />;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signup(formData.email, formData.password, formData.name);
      } else {
        await login(formData.email, formData.password);
      }
    } catch (err) {
      const code = err.code || '';
      if (code.includes('user-not-found') || code.includes('wrong-password') || code.includes('invalid-credential')) {
        setError('Invalid email or password.');
      } else if (code.includes('email-already-in-use')) {
        setError('An account with this email already exists.');
      } else if (code.includes('weak-password')) {
        setError('Password should be at least 6 characters.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err) {
      if (!err.code?.includes('popup-closed')) {
        setError('Google sign-in failed. Please try again.');
      }
    }
  };

  return (
    <div className={styles['auth-page']}>
      <div className={styles['auth-card']}>
        <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
        <p className={styles.subtitle}>
          {isSignUp
            ? 'Sign up to reserve exclusive research topics'
            : 'Sign in to access your reserved topics'}
        </p>

        {error && <div className={styles['auth-error']}>{error}</div>}

        {/* Google Sign-In */}
        <button className={styles['google-btn']} onClick={handleGoogle}>
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <div className={styles['auth-divider']}>
          <span>or use email</span>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
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
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className={styles['auth-switch']}>
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(false); setError(''); }}>
                Sign In
              </a>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(true); setError(''); }}>
                Sign Up
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
