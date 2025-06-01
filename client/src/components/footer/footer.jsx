import React from 'react';
import styles from './footer.module.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <div className={styles.brandContainer}>
              <a href="#" className={styles.footerLogo}>PinaqTech</a>
              <span className={styles.tagline}>Security Solutions</span>
            </div>
            <p className={styles.footerDescription}>
              Protecting businesses with AI-driven security solutions since 2018.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Products</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Threat Detection</a></li>
              <li><a href="#" className={styles.footerLink}>Cloud Security</a></li>
              <li><a href="#" className={styles.footerLink}>Identity Management</a></li>
              <li><a href="#" className={styles.footerLink}>Data Protection</a></li>
              <li><a href="#" className={styles.footerLink}>Compliance Tools</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/blog" className={styles.footerLink}>Blog</a></li>
              <li><a href="/careers" className={styles.footerLink}>Careers</a></li>
              <li><a href="#" className={styles.footerLink}>Case Studies</a></li>
              <li><a href="#" className={styles.footerLink}>Documentation</a></li>
              <li><a href="#" className={styles.footerLink}>Webinars</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FiMapPin className={styles.contactIcon} />
                <span>123 Security Ave, San Francisco, CA 94103</span>
              </li>
              <li className={styles.contactItem}>
                <FiPhone className={styles.contactIcon} />
                <a href="tel:+15551234567" className={styles.contactLink}>+1 (555) 123-4567</a>
              </li>
              <li className={styles.contactItem}>
                <FiMail className={styles.contactIcon} />
                <a href="mailto:info@pinaqtech.com" className={styles.contactLink}>info@pinaqtech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} PinaqTech. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;