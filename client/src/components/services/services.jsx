import React from 'react';
import styles from './services.module.css';
import { 
  FiAlertCircle,
  FiArrowRight,
  FiBook,
  FiClock,
  FiFileText,
  FiLock,
  FiMonitor,
  FiServer,
  FiShield,
  FiStar
} from 'react-icons/fi';


const Services = () => {
  const toggleFaq = (e) => {
    const faqItem = e.currentTarget.closest(`.${styles.faqItem}`);
    faqItem.classList.toggle(styles.faqActive);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Comprehensive <span className={styles.primaryText}>Security Services</span>
            </h1>
            <p className={styles.heroDescription}>
              PinaqTech offers end-to-end security solutions to protect your digital assets and infrastructure. 
              Our expert team delivers cutting-edge security services tailored to your organization's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Security Services</h2>
            <p className={styles.sectionDescription}>
              We provide a full spectrum of security services to protect your business at every level.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Security Assessment */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <FiShield className={styles.featureIcon} />
              </div>
              <h3 className={styles.cardTitle}>Security Assessment</h3>
              <p className={styles.cardDescription}>
                Comprehensive evaluation of your security posture to identify vulnerabilities and risks.
              </p>
              <ul className={styles.cardFeatures}>
                <li>Vulnerability scanning</li>
                <li>Penetration testing</li>
                <li>Risk assessment</li>
                <li>Compliance audit</li>
              </ul>
              <a href="#" className={styles.cardLink}>Learn more →</a>
            </div>

            {/* Managed Security */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <FiMonitor className={styles.featureIcon} />
              </div>
              <h3 className={styles.cardTitle}>Managed Security</h3>
              <p className={styles.cardDescription}>
                24/7 monitoring and management of your security infrastructure by our experts.
              </p>
              <ul className={styles.cardFeatures}>
                <li>SIEM monitoring</li>
                <li>Threat detection</li>
                <li>Incident response</li>
                <li>Security operations</li>
              </ul>
              <a href="#" className={styles.cardLink}>Learn more →</a>
            </div>

            {/* Cloud Security */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <FiServer className={styles.featureIcon} />
              </div>
              <h3 className={styles.cardTitle}>Cloud Security</h3>
              <p className={styles.cardDescription}>
                Protection for your cloud environments across AWS, Azure, and Google Cloud.
              </p>
              <ul className={styles.cardFeatures}>
                <li>CSPM implementation</li>
                <li>Cloud workload protection</li>
                <li>Identity and access management</li>
                <li>Data protection</li>
              </ul>
              <a href="#" className={styles.cardLink}>Learn more →</a>
            </div>

            {/* Compliance */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <FiFileText className={styles.featureIcon} />
              </div>
              <h3 className={styles.cardTitle}>Compliance</h3>
              <p className={styles.cardDescription}>
                Achieve and maintain compliance with industry standards and regulations.
              </p>
              <ul className={styles.cardFeatures}>
                <li>ISO 27001</li>
                <li>SOC 2</li>
                <li>GDPR</li>
                <li>HIPAA</li>
              </ul>
              <a href="#" className={styles.cardLink}>Learn more →</a>
            </div>

            {/* Security Training */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <FiBook className={styles.featureIcon} />
              </div>
              <h3 className={styles.cardTitle}>Security Training</h3>
              <p className={styles.cardDescription}>
                Educate your team on security best practices and threat awareness.
              </p>
              <ul className={styles.cardFeatures}>
                <li>Phishing simulations</li>
                <li>Security awareness</li>
                <li>Technical training</li>
                <li>Tabletop exercises</li>
              </ul>
              <a href="#" className={styles.cardLink}>Learn more →</a>
            </div>

            {/* Incident Response */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <FiAlertCircle className={styles.featureIcon} />
              </div>
              <h3 className={styles.cardTitle}>Incident Response</h3>
              <p className={styles.cardDescription}>
                Rapid response and recovery from security incidents and breaches.
              </p>
              <ul className={styles.cardFeatures}>
                <li>Forensic analysis</li>
                <li>Containment</li>
                <li>Remediation</li>
                <li>Post-incident review</li>
              </ul>
              <a href="#" className={styles.cardLink}>Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose PinaqTech</h2>
            <p className={styles.sectionDescription}>
              Our approach to security combines expertise, innovation, and proven methodologies.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiStar className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Expert Team</h3>
              <p className={styles.featureDescription}>
                Certified security professionals with extensive industry experience.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiLock className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Proven Methodologies</h3>
              <p className={styles.featureDescription}>
                Established frameworks and best practices for maximum protection.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiClock className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>24/7 Monitoring</h3>
              <p className={styles.featureDescription}>
                Continuous protection with round-the-clock security operations.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiShield className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>Custom Solutions</h3>
              <p className={styles.featureDescription}>
                Tailored security programs designed for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Advanced FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionDescription}>
              Find answers to common questions about our security services.
            </p>
          </div>
          
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={toggleFaq}>
                <h3 className={styles.faqQuestionText}>What's included in your security assessments?</h3>
                <div className={styles.faqIcon}>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>
              <div className={styles.faqAnswer}>
                <p className={styles.faqAnswerText}>
                  Our comprehensive security assessments include vulnerability scanning, penetration testing, configuration reviews, compliance checks, and risk analysis. We provide detailed reports with prioritized recommendations and remediation guidance.
                </p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={toggleFaq}>
                <h3 className={styles.faqQuestionText}>How quickly can you respond to security incidents?</h3>
                <div className={styles.faqIcon}>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>
              <div className={styles.faqAnswer}>
                <p className={styles.faqAnswerText}>
                  Our 24/7 security operations center provides immediate response to critical incidents, typically within 15 minutes. For enterprise clients with premium support, we guarantee response times as fast as 5 minutes for critical threats.
                </p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={toggleFaq}>
                <h3 className={styles.faqQuestionText}>Do you offer compliance certification assistance?</h3>
                <div className={styles.faqIcon}>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>
              <div className={styles.faqAnswer}>
                <p className={styles.faqAnswerText}>
                  Yes, we provide full-service compliance support for standards including ISO 27001, SOC 2, GDPR, HIPAA, and PCI DSS. Our experts guide you through the entire process from gap analysis to audit preparation and certification.
                </p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={toggleFaq}>
                <h3 className={styles.faqQuestionText}>How do you handle cloud security for multi-cloud environments?</h3>
                <div className={styles.faqIcon}>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>
              <div className={styles.faqAnswer}>
                <p className={styles.faqAnswerText}>
                  Our cloud security approach uses a unified platform that provides consistent protection across AWS, Azure, and Google Cloud. We implement cloud security posture management (CSPM), workload protection, and identity security across all your cloud environments.
                </p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={toggleFaq}>
                <h3 className={styles.faqQuestionText}>What makes your security training different?</h3>
                <div className={styles.faqIcon}>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>
              <div className={styles.faqAnswer}>
                <p className={styles.faqAnswerText}>
                  Our training combines AI-powered personalized learning paths with real-world attack simulations. We go beyond basic awareness to provide practical, role-specific security skills for technical and non-technical staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to strengthen your security?</h2>
            <p className={styles.ctaDescription}>
              Contact us today to discuss how we can help protect your organization.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>Get in Touch</a>
              <a href="/pricing" className={styles.secondaryButton}>View Pricing</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Services;