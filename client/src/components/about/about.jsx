import React, { useEffect } from 'react';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faArrowRight, 
faLightbulb,
faUser
} from "@fortawesome/free-solid-svg-icons"
import { 
  FiArrowRight, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiPenTool,
  FiAward,
  FiShield
} from 'react-icons/fi';

const About = () => {
  useEffect(() => {
    // Animation for value cards
    const valueCards = document.querySelectorAll(`.${styles.valueCard}`);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.show);
          }, index * 200);
        }
      });
    }, { threshold: 0.1 });
    
    valueCards.forEach(card => {
      observer.observe(card);
    });
  }, []);

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
            Pioneering AI-driven security solutions to protect businesses from evolving digital threats since 2018.
          </p>
          <a href="#contact" className={styles.primaryButton}>
            <span>Get to Know Us</span>
            <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={styles.sectionWhite}>
        <div className={styles.sectionContainer}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>Who We Are</h2>
              <p className={styles.sectionText}>
                Founded in 2018, <span className={styles.highlight}>PinaqTech</span> has rapidly established itself as a leader in AI-driven security solutions. We combine cutting-edge artificial intelligence with deep cybersecurity expertise to protect businesses of all sizes from increasingly sophisticated digital threats.
              </p>
              <p className={styles.sectionText}>
                Our team of security experts, data scientists, and software engineers work together to develop innovative solutions that stay ahead of emerging threats. We believe that security should be both powerful and accessible, which is why we design our products to be effective yet user-friendly.
              </p>
              <p className={styles.sectionText}>
                With headquarters in San Francisco and offices across North America, Europe, and Asia, we serve clients globally across various industries including finance, healthcare, retail, and technology.
              </p>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%2520tech%2520office%2520with%2520yellow%2520accent%2520wall%252C%2520team%2520of%2520diverse%2520professionals%2520collaborating%2520at%2520a%2520meeting%2520table%2520with%2520laptops%2520and%2520digital%2520displays%2520showing%2520security%2520analytics%252C%2520bright%2520open%2520workspace%2520with%2520glass%2520partitions%252C%2520professional%2520atmosphere%2520with%2520subtle%2520technology%2520elements&width=800&height=600&seq=12&orientation=landscape" 
                  alt="PinaqTech Team" 
                  className={styles.aboutImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionDescription}>The principles that guide everything we do at PinaqTech</p>
          </div>
          <div className={styles.valuesGrid}>
            {/* Value 1 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiAward className={styles.featureIcon} />
              </div>
              <h3 className={styles.valueTitle}>Quality</h3>
              <p className={styles.valueDescription}>
                We are committed to excellence in everything we create. Our solutions undergo rigorous testing to ensure they meet the highest standards of performance and reliability.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiShield className={styles.featureIcon} />
              </div>
              <h3 className={styles.valueTitle}>Reliability</h3>
              <p className={styles.valueDescription}>
                Security demands dependability. Our customers trust us with their most valuable assets, and we take that responsibility seriously by delivering solutions they can count on.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FontAwesomeIcon icon={faLightbulb} className={styles.featureIcon} />
              </div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                We continuously push the boundaries of what's possible in cybersecurity. By leveraging the latest advances in AI and machine learning, we stay ahead of evolving threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={styles.sectionWhite}>
        <div className={styles.sectionContainer}>
          <div className={styles.twoColumnLayoutReverse}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img 
                  src="https://readdy.ai/api/search-image?query=futuristic%2520security%2520operations%2520center%2520with%2520multiple%2520screens%2520displaying%2520data%2520analytics%2520and%2520security%2520monitoring%2520dashboards%252C%2520professional%2520team%2520working%2520with%2520advanced%2520technology%252C%2520subtle%2520yellow%2520lighting%2520accents%252C%2520clean%2520modern%2520workspace%2520with%2520glass%2520partitions%252C%2520high-tech%2520atmosphere&width=800&height=600&seq=13&orientation=landscape" 
                  alt="PinaqTech Mission" 
                  className={styles.aboutImage}
                />
              </div>
            </div>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>Turn Ideas into Reality</h2>
              <p className={styles.sectionText}>
                Our mission is to democratize advanced security technology, making enterprise-grade protection accessible to organizations of all sizes. We believe that every business deserves the best security, regardless of their resources or technical expertise.
              </p>
              <p className={styles.sectionText}>
                By combining artificial intelligence with human expertise, we create security solutions that are both powerful and intuitive. Our goal is to give our customers peace of mind, knowing their digital assets are protected by technology that evolves as quickly as the threats do.
              </p>
              <a href="#" className={styles.primaryButton}>
                <span>More Details</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Leadership Team</h2>
            <p className={styles.sectionDescription}>Meet the experts behind PinaqTech's innovative security solutions</p>
          </div>
          <div className={styles.teamGrid}>
            {/* Team Member 1 */}
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520Asian%2520male%2520CEO%2520in%2520his%252040s%252C%2520wearing%2520business%2520casual%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520corporate%2520portrait%252C%2520tech%2520executive&width=400&height=500&seq=14&orientation=portrait" 
                  alt="Michael Chen" 
                  className={styles.teamMemberImage}
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Michael Chen</h3>
                <p className={styles.teamPosition}>Chief Executive Officer</p>
                <p className={styles.teamBio}>
                  Former security executive at Oracle with 15+ years of experience in cybersecurity leadership. Michael founded PinaqTech with a vision to make AI-driven security accessible to all businesses.
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520African%2520American%2520female%2520CTO%2520in%2520her%252030s%252C%2520wearing%2520business%2520casual%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520corporate%2520portrait%252C%2520tech%2520executive&width=400&height=500&seq=15&orientation=portrait" 
                  alt="Dr. Amara Johnson" 
                  className={styles.teamMemberImage}
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Dr. Amara Johnson</h3>
                <p className={styles.teamPosition}>Chief Technology Officer</p>
                <p className={styles.teamBio}>
                  PhD in Computer Science with specialization in AI and machine learning. Previously led security research at Google. Passionate about applying AI to solve complex security challenges.
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520Hispanic%2520male%2520CSO%2520in%2520his%252040s%252C%2520wearing%2520business%2520casual%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520corporate%2520portrait%252C%2520tech%2520executive&width=400&height=500&seq=16&orientation=portrait" 
                  alt="Carlos Rodriguez" 
                  className={styles.teamMemberImage}
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Carlos Rodriguez</h3>
                <p className={styles.teamPosition}>Chief Security Officer</p>
                <p className={styles.teamBio}>
                  Former CISO at a Fortune 500 financial institution. Carlos brings extensive experience in enterprise security architecture and threat intelligence to lead our security strategy.
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520Caucasian%2520female%2520COO%2520in%2520her%252040s%252C%2520wearing%2520business%2520casual%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520corporate%2520portrait%252C%2520tech%2520executive&width=400&height=500&seq=17&orientation=portrait" 
                  alt="Sarah Thompson" 
                  className={styles.teamMemberImage}
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Sarah Thompson</h3>
                <p className={styles.teamPosition}>Chief Operating Officer</p>
                <p className={styles.teamBio}>
                  MBA with 12+ years in operations and strategy at leading tech companies. Sarah oversees PinaqTech's global operations and ensures we deliver exceptional value to customers.
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Client Testimonials Section */}
      <section className={styles.sectionWhite}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionDescription}>Hear from organizations that trust PinaqTech with their security needs</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {/* Testimonial 1 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className={styles.testimonialText}>
                "PinaqTech's cloud security solution has transformed our approach to protecting our multi-cloud environment. The implementation was seamless, and their team provided exceptional support throughout the process."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorIcon}>
                  <i className="ri-building-4-line"></i>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Jennifer Winters</h4>
                  <p className={styles.authorPosition}>CIO, Global Financial Services</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className={styles.testimonialText}>
                "As a healthcare provider, data security is paramount. PinaqTech's solutions not only helped us achieve HIPAA compliance but also significantly reduced our security incidents through their proactive threat detection."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorIcon}>
                  <i className="ri-hospital-line"></i>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Dr. Robert Anderson</h4>
                  <p className={styles.authorPosition}>CISO, MedTech Innovations</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className={styles.testimonialText}>
                "As a rapidly growing e-commerce platform, we needed a scalable security solution. PinaqTech delivered exactly what we needed, with their AI-driven approach adapting to our changing requirements."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorIcon}>
                  <i className="ri-shopping-cart-line"></i>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Marcus Chen</h4>
                  <p className={styles.authorPosition}>CTO, ShopStream</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className={styles.joinTeamSection}>
        <div className={styles.joinTeamContainer}>
          <div className={styles.joinTeamContent}>
            <h2 className={styles.joinTeamTitle}>Join Our Awesome Team</h2>
            <p className={styles.joinTeamDescription}>
              We're always looking for talented individuals passionate about security and innovation. Explore opportunities to make an impact with us.
            </p>
          </div>
          <a href="#" className={styles.joinTeamButton}>
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <span><FontAwesomeIcon icon={faUser} />   Send us your CV</span>
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter for the latest security insights and company updates
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
            <p className={styles.newsletterPrivacy}>
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;