import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  FiArrowRight, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiPenTool
} from 'react-icons/fi';
import styles from './Home.module.css';

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

const Home = () => {
  const { darkMode } = useTheme();

  const handleContactClick = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(
      "Hello Pinagtech team,\n\n" +
      "I'm interested in discussing a potential project with you.\n\n" +
      "Project details:\n- Type: [Web/Mobile/Design/etc.]\n" +
      "- Budget: [Range or flexible]\n- Timeline: [Urgent/3-6 months/etc.]\n\n" +
      "Please contact me to discuss further.\n\nBest regards,\n[Your Name]"
    );
    window.location.href = `mailto:contact@pinagtech.com?subject=${subject}&body=${body}`;
  };

  const features = [
    {
      icon: <FiPenTool className={styles.featureIcon} />,
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces that delight users and drive engagement."
    },
    {
      icon: <FiLayers className={styles.featureIcon} />,
      title: "Brand Identity",
      desc: "Crafting memorable brand experiences across all touchpoints."
    },
    {
      icon: <FiTrendingUp className={styles.featureIcon} />,
      title: "Marketing & SEO",
      desc: "Data-driven strategies to grow your online presence and visibility."
    },
    {
      icon: <FiCode className={styles.featureIcon} />,
      title: "Web Development",
      desc: "High-performance websites built with modern technologies."
    }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Transformation",
      desc: "Increased online sales by 240% through custom platform development and SEO optimization.",
      category: "Web Development"
    },
    {
      title: "Digital Marketing Success",
      desc: "Generated 500+ qualified leads in 3 months through targeted campaigns.",
      category: "Marketing"
    }
  ];

  return (
    <div className={`${styles.homeContainer} ${darkMode ? styles.dark : ''}`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className={styles.heroBadge} variants={slideUp}>
              Digital Transformation Experts
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={slideUp}>
              We Build <span className={styles.highlight}>Digital Experiences</span> That Matter
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={slideUp}>
              Helping businesses thrive in the digital landscape through innovative 
              solutions and strategic thinking.
            </motion.p>
            <motion.div className={styles.heroButtons} variants={slideUp}>
              <button 
                className={styles.primaryButton}
                onClick={handleContactClick}
              >
                Start Your Project
              </button>
              <a href="#solutions" className={styles.secondaryButton}>
                Explore Solutions
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.gradientOverlay}></div>
          </motion.div>
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section className={styles.clients}>
        <div className={styles.clientsContainer}>
          <p className={styles.clientText}>Trusted by innovative companies worldwide</p>
          <div className={styles.clientLogos}>
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, i) => (
              <div key={i} className={styles.clientLogo}>{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="solutions">
        <div className={styles.sectionContainer}>
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <span className={styles.sectionSubtitle}>WHAT WE OFFER</span>
            <h2 className={styles.sectionTitle}>Comprehensive Digital Solutions</h2>
            <p className={styles.sectionDescription}>
              End-to-end services designed to solve your business challenges and drive growth
            </p>
          </motion.div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.featureIconContainer}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.desc}</p>
                <a href="#contact" className={styles.featureLink}>
                  Learn more <FiArrowRight className={styles.linkArrow} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudies}>
        <div className={styles.sectionContainer}>
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <span className={styles.sectionSubtitle}>OUR WORK</span>
            <h2 className={styles.sectionTitle}>Success Stories</h2>
            <p className={styles.sectionDescription}>
              Real-world results that demonstrate our approach and capabilities
            </p>
          </motion.div>

          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                className={styles.caseStudyCard}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={styles.caseStudyImage}></div>
                <div className={styles.caseStudyContent}>
                  <span className={styles.caseStudyCategory}>{caseStudy.category}</span>
                  <h3 className={styles.caseStudyTitle}>{caseStudy.title}</h3>
                  <p className={styles.caseStudyDescription}>{caseStudy.desc}</p>
                  <a href="#" className={styles.caseStudyLink}>
                    View Case Study <FiArrowRight className={styles.linkArrow} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaContainer}>
          <motion.div 
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help you achieve your digital goals. 
              Schedule a free consultation today.
            </p>
            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryButton}
                onClick={handleContactClick}
              >
                Get in Touch
              </button>
              <a href="tel:+15551234567" className={styles.secondaryButton}>
                <FiPhone /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;