import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import styles from './contact.module.css';
import { useTheme } from '../../context/ThemeContext';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
  const { darkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className={`${styles.contactContainer} ${darkMode ? styles.dark : ''}`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className={styles.heroTitle} variants={slideUp}>
              Get in <span className={styles.highlight}>Touch</span>
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={slideUp}>
              Have a project in mind or want to discuss how we can help your business? 
              We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div 
              className={styles.contactFormContainer}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                  <div className={styles.inputContainer}>
                    <FiUser className={styles.inputIcon} />
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className={styles.formInput}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                  <div className={styles.inputContainer}>
                    <FiMail className={styles.inputIcon} />
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className={styles.formInput}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                  <div className={styles.inputContainer}>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className={styles.formInput}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                  <div className={styles.inputContainer}>
                    <FiMessageSquare className={styles.inputIcon} />
                    <textarea 
                      id="message" 
                      name="message" 
                      className={`${styles.formInput} ${styles.textarea}`}
                      placeholder="Tell us about your project..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  <FiSend className={styles.buttonIcon} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className={styles.contactInfo}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: 0.2 }}
            >
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.contactDescription}>
                Feel free to reach out to us through any of these channels. We're here to help!
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FiMail />
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>Email Us</h3>
                    <a href="mailto:info@pinaqtech.com" className={styles.methodLink}>
                      info@pinaqtech.com
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FiPhone />
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>Call Us</h3>
                    <a href="tel:+1234567890" className={styles.methodLink}>
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FiMapPin />
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>Visit Us</h3>
                    <p className={styles.methodText}>
                      123 Tech Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.businessHours}>
                <h3 className={styles.hoursTitle}>Business Hours</h3>
                <ul className={styles.hoursList}>
                  <li className={styles.hoursItem}>
                    <span className={styles.hoursDay}>Monday - Friday:</span>
                    <span className={styles.hoursTime}>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className={styles.hoursItem}>
                    <span className={styles.hoursDay}>Saturday - Sunday:</span>
                    <span className={styles.hoursTime}>Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.102370616533!2d-122.419415584682!3d37.77492997975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph" 
            className={styles.mapIframe}
            allowFullScreen="" 
            loading="lazy"
            title="PinaqTech Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;