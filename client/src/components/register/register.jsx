import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'viewer',
    newsletter: false,
    notifyOnThreat: true,
    demoRequested: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (formData.phone && !/^\+?[0-9\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://pinaq.onrender.com/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
          preferences: {
            newsletter: formData.newsletter,
            notifyOnThreat: formData.notifyOnThreat
          },
          demoRequested: formData.demoRequested
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.msg || 'Registration failed');
      }
      
      setRegistrationSuccess(true);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (registrationSuccess) {
    return (
      <div className={styles.successContainer}>
        <h2>Registration Successful!</h2>
        <p>Thank you for registering. You can now log in to your account.</p>
        <button 
          className={styles.loginButton}
          onClick={() => navigate('/login')}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create an Account</h1>
        
        {errors.submit && <div className={styles.error}>{errors.submit}</div>}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.errorInput : ''}
            />
            {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="company">Company*</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={errors.company ? styles.errorInput : ''}
            />
            {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1234567890"
              className={errors.phone ? styles.errorInput : ''}
            />
            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? styles.errorInput : ''}
            />
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? styles.errorInput : ''}
            />
            {errors.confirmPassword && (
              <span className={styles.errorMessage}>{errors.confirmPassword}</span>
            )}
          </div>
          
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">Subscribe to newsletter</label>
          </div>
          
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="notifyOnThreat"
              name="notifyOnThreat"
              checked={formData.notifyOnThreat}
              onChange={handleChange}
            />
            <label htmlFor="notifyOnThreat">Receive threat notifications</label>
          </div>
          
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="demoRequested"
              name="demoRequested"
              checked={formData.demoRequested}
              onChange={handleChange}
            />
            <label htmlFor="demoRequested">Request a product demo</label>
          </div>
          
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
        
        <div className={styles.loginLink}>
          Already have an account?{' '}
          <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Register;