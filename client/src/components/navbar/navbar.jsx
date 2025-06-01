import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import ProfileCard from '../profile/profile';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(`.${styles.navContent}`)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close profile card when clicking outside
  useEffect(() => {
    const handleProfileClickOutside = (event) => {
      if (showProfileCard && !event.target.closest(`.${styles.profileSection}`)) {
        setShowProfileCard(false);
      }
    };

    document.addEventListener('mousedown', handleProfileClickOutside);
    return () => document.removeEventListener('mousedown', handleProfileClickOutside);
  }, [showProfileCard]);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    setShowProfileCard(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowProfileCard(false);
  };

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={`${styles.navContent} ${mobileMenuOpen ? styles.mobileMenuActive : ''}`}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
              <img src="https://pinaqtech.com/wp-content/uploads/2024/09/cropped-pinaqtech-32x32.png" alt="Pinaqtech Logo" />
              Pinaqtech
            </Link>
          </div>
          
          <nav className={styles.navLinks}>
            <Link to="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about-us" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/blog" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact-us" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
          
          <div className={styles.navActions}>
            <div className={styles.darkModeToggle}>
              <button 
                onClick={toggleDarkMode}
                className={styles.toggleButton}
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                <div className={styles.toggleContainer}>
                  <div className={`${styles.toggleHandle} ${darkMode ? styles.dark : styles.light}`}>
                    {darkMode ? (
                      <i className={`ri-moon-line ${styles.themeIcon}`}></i>
                    ) : (
                      <i className={`ri-sun-line ${styles.themeIcon}`}></i>
                    )}
                  </div>
                </div>
                <span className={styles.toggleText}>
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>
            </div>
            
            {isAuthenticated ? (
              <div className={styles.profileSection}>
                <div 
                  className={styles.profileLink}
                  onClick={toggleProfileCard}
                  aria-expanded={showProfileCard}
                  aria-label="User profile"
                >
                  <i className={`ri-user-line ${styles.profileIcon}`}></i>
                  <span className={styles.profileName}>
                    {user?.fullName?.split(' ')[0] || 'Profile'}
                  </span>
                </div>
                
                {showProfileCard && (
                  <div className={styles.profileCardContainer}>
                    <ProfileCard 
                      onLogout={handleLogout}
                      onClose={() => setShowProfileCard(false)}
                    />
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={styles.loginButton}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/sign-up" 
                  className={styles.ctaButton}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
            
            <button 
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <i className={`ri-menu-line ${styles.menuIcon}`}></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;