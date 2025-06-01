import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setLoginError('');
    
    try {
      const response = await fetch('http://localhost:3005/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          remember: formData.remember
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Store token if remember me is checked
      if (formData.remember && data.token) {
        localStorage.setItem('authToken', data.token);
      } else if (data.token) {
        sessionStorage.setItem('authToken', data.token);
      }
      
      // Redirect to dashboard or home page
      navigate('/');
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <motion.div 
          className={styles.loginLeft}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.loginIllustration}></div>
          <div className={styles.loginLeftContent}>
            <h2 className={styles.loginLeftTitle}>AI-Powered Security Platform</h2>
            <p className={styles.loginLeftText}>
              Access your secure dashboard with enterprise-grade authentication powered by zero-trust architecture.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.loginRight}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.loginHeader}>
            <div className={styles.loginLogo}>
              <i className="ri-shield-user-line"></i>
            </div>
            <h1 className={styles.loginTitle}>Welcome Back</h1>
            <p className={styles.loginSubtitle}>Sign in to your security dashboard</p>
          </div>

          {loginError && <div className={styles.loginError}>{loginError}</div>}

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <div className={styles.inputContainer}>
                <i className="ri-mail-line"></i>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`} 
                  placeholder="Enter your email" 
                />
              </div>
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.formLabel}>Password</label>
              <div className={styles.inputContainer}>
                <i className="ri-lock-2-line"></i>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.password ? styles.errorInput : ''}`} 
                  placeholder="Enter your password" 
                />
              </div>
              {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
              <div className={styles.forgotPassword}>
                <a href="/forgot-password" className={styles.forgotPasswordLink}>Forgot password?</a>
              </div>
            </div>

            <div className={styles.rememberMe}>
              <input 
                type="checkbox" 
                id="remember" 
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className={styles.checkboxInput} 
              />
              <label htmlFor="remember" className={styles.checkboxLabel}>Remember me</label>
            </div>

            <button 
              type="submit" 
              className={styles.loginButton}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Signing In...' : 'Sign In'}</span>
              <i className="ri-arrow-right-line"></i>
            </button>

            <div className={styles.divider}>
              <span className={styles.dividerText}>or continue with</span>
            </div>

            <div className={styles.socialLogin}>
              <button type="button" className={styles.socialButton}>
                <i className="ri-google-fill"></i>
              </button>
              <button type="button" className={styles.socialButton}>
                <i className="ri-microsoft-fill"></i>
              </button>
              <button type="button" className={styles.socialButton}>
                <i className="ri-github-fill"></i>
              </button>
            </div>

            <div className={styles.signUpLink}>
              Don't have an account? <a href="/sign-up" className={styles.signUpText}>Sign up</a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;