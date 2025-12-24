import { useState } from 'react';
import '../styles/Auth.css';

function Auth({ onLogin, onClose, show = false }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      if (formData.email && formData.password) {
        onLogin({
          name: 'User',
          email: formData.email,
          phone: ''
        });
        onClose();
      }
    } else {
      if (formData.name && formData.email && formData.password && formData.phone) {
        onLogin({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        });
        onClose();
      }
    }
    
    setFormData({ email: '', password: '', name: '', phone: '' });
  };

  return (
    <div className="auth-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>
      <div className="auth-container">
        <button className="auth-close-btn" onClick={onClose}>✕</button>

        <div className="auth-header">
          <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
          <p>{isLogin ? 'Welcome back!' : 'Join us today!'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required={!isLogin}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {isLogin && (
            <div className="form-group checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="toggle-text">
          <p>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({ email: '', password: '', name: '', phone: '' });
              }}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        <div className="divider">
          <span className="divider-text">OR</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social-btn">
            🔵 Google
          </button>
          <button type="button" className="social-btn">
            ⓕ Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
