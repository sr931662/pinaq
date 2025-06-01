import React, { useState, useEffect } from 'react';
import styles from './career.module.css';
import { RiMoonLine, RiSunLine, RiMenuLine, RiMessage3Line, RiUserLine, RiStarFill, RiStarHalfFill, RiCheckLine, RiUpload2Line, RiMailLine, RiPhoneLine, RiLinkedinFill, RiTwitterXFill, RiInstagramFill, RiMapPinLine, RiShieldCheckLine, RiLightbulbLine, RiTeamLine, RiBookOpenLine, RiGlobalLine, RiCustomerService2Line, RiHeartPulseLine, RiTimeLine, RiMoneyDollarCircleLine, RiCommunityLine, RiBuilding4Line, RiPlayFill } from 'react-icons/ri';

const Careers = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleDepartmentChange = (department) => {
    setActiveDepartment(department);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={styles.body}>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Join Our <span className={styles.primaryText}>Team</span></h1>
              <p className={styles.heroDescription}>Build your career at PinaqTech, where innovation meets security. We're looking for talented individuals who are passionate about creating a safer digital world.</p>
              <div className={styles.heroButtons}>
                <a href="#openings" className={styles.primaryButton}>View Openings</a>
                <a href="#culture" className={styles.secondaryButton}>Our Culture</a>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={`${styles.statNumber} ${styles.primaryText}`}>150+</div>
                <p className={styles.statLabel}>Employees Worldwide</p>
              </div>
              <div className={styles.statItem}>
                <div className={`${styles.statNumber} ${styles.primaryText}`}>12</div>
                <p className={styles.statLabel}>Countries</p>
              </div>
              <div className={styles.statItem}>
                <div className={`${styles.statNumber} ${styles.primaryText}`}>96%</div>
                <p className={styles.statLabel}>Employee Satisfaction</p>
              </div>
              <div className={styles.statItem}>
                <div className={`${styles.statNumber} ${styles.primaryText}`}>4.8/5</div>
                <p className={styles.statLabel}>Glassdoor Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section id="culture" className={styles.cultureSection}>
          <div className={styles.cultureContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Culture</h2>
              <p className={styles.sectionDescription}>At PinaqTech, we foster an environment of innovation, collaboration, and continuous learning. Our culture is built on these core values:</p>
            </div>
            
            <div className={styles.cultureGrid}>
              <div className={styles.cultureCard}>
                <div className={styles.cultureIconContainer}>
                  <RiShieldCheckLine className={styles.cultureIcon} />
                </div>
                <h3 className={styles.cultureCardTitle}>Security First</h3>
                <p className={styles.cultureCardText}>We prioritize security in everything we do, from our products to our internal practices. We believe in creating a safer digital world for everyone.</p>
              </div>
              
              <div className={styles.cultureCard}>
                <div className={styles.cultureIconContainer}>
                  <RiLightbulbLine className={styles.cultureIcon} />
                </div>
                <h3 className={styles.cultureCardTitle}>Innovation</h3>
                <p className={styles.cultureCardText}>We encourage creative thinking and embrace new ideas. Our team is constantly pushing boundaries to develop cutting-edge security solutions.</p>
              </div>
              
              <div className={styles.cultureCard}>
                <div className={styles.cultureIconContainer}>
                  <RiTeamLine className={styles.cultureIcon} />
                </div>
                <h3 className={styles.cultureCardTitle}>Collaboration</h3>
                <p className={styles.cultureCardText}>We believe in the power of teamwork. By combining our diverse skills and perspectives, we create better solutions for our clients.</p>
              </div>
              
              <div className={styles.cultureCard}>
                <div className={styles.cultureIconContainer}>
                  <RiBookOpenLine className={styles.cultureIcon} />
                </div>
                <h3 className={styles.cultureCardTitle}>Continuous Learning</h3>
                <p className={styles.cultureCardText}>We invest in our team's growth through training, certifications, and knowledge sharing. We're committed to staying at the forefront of security expertise.</p>
              </div>
              
              <div className={styles.cultureCard}>
                <div className={styles.cultureIconContainer}>
                  <RiGlobalLine className={styles.cultureIcon} />
                </div>
                <h3 className={styles.cultureCardTitle}>Diversity & Inclusion</h3>
                <p className={styles.cultureCardText}>We celebrate diverse backgrounds, experiences, and perspectives. We believe that an inclusive workplace leads to better innovation and stronger solutions.</p>
              </div>
              
              <div className={styles.cultureCard}>
                <div className={styles.cultureIconContainer}>
                  <RiCustomerService2Line className={styles.cultureIcon} />
                </div>
                <h3 className={styles.cultureCardTitle}>Client Focus</h3>
                <p className={styles.cultureCardText}>We're dedicated to understanding our clients' needs and delivering exceptional value. Their success is our success.</p>
              </div>
            </div>
            
            {/* Employee Testimonials */}
            <div className={styles.testimonialsSection}>
              <h3 className={styles.testimonialsTitle}>What Our Team Says</h3>
              
              <div className={styles.testimonialSliderContainer}>
                <div className={styles.testimonialSlider}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialHeader}>
                      <div className={styles.testimonialAvatar}>
                        <RiUserLine className={styles.userIcon} />
                      </div>
                      <div>
                        <h4 className={styles.testimonialName}>Emily Richardson</h4>
                        <p className={styles.testimonialRole}>Security Engineer, 3 years</p>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>"Working at PinaqTech has been the highlight of my career. I've had the opportunity to work on cutting-edge security solutions while being supported by an amazing team. The company truly invests in our growth and well-being."</p>
                    <div className={styles.testimonialStars}>
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                    </div>
                  </div>
                  
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialHeader}>
                      <div className={styles.testimonialAvatar}>
                        <RiUserLine className={styles.userIcon} />
                      </div>
                      <div>
                        <h4 className={styles.testimonialName}>Michael Patel</h4>
                        <p className={styles.testimonialRole}>Security Consultant, 2 years</p>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>"The culture at PinaqTech is unlike any other company I've worked for. There's a perfect balance of challenging work and supportive environment. I've grown more in my two years here than in my entire previous career."</p>
                    <div className={styles.testimonialStars}>
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                    </div>
                  </div>
                  
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialHeader}>
                      <div className={styles.testimonialAvatar}>
                        <RiUserLine className={styles.userIcon} />
                      </div>
                      <div>
                        <h4 className={styles.testimonialName}>Sophia Chen</h4>
                        <p className={styles.testimonialRole}>Research Analyst, 4 years</p>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>"As a researcher, I appreciate how PinaqTech values innovation and gives us the freedom to explore new ideas. The collaborative environment allows us to tackle complex security challenges together, making our work both impactful and fulfilling."</p>
                    <div className={styles.testimonialStars}>
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarHalfFill className={styles.starIcon} />
                    </div>
                  </div>
                  
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialHeader}>
                      <div className={styles.testimonialAvatar}>
                        <RiUserLine className={styles.userIcon} />
                      </div>
                      <div>
                        <h4 className={styles.testimonialName}>Daniel Okonkwo</h4>
                        <p className={styles.testimonialRole}>Product Manager, 3 years</p>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>"The leadership at PinaqTech truly cares about both our clients and employees. We're encouraged to maintain a healthy work-life balance while still delivering exceptional results. It's refreshing to work for a company with such strong values."</p>
                    <div className={styles.testimonialStars}>
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                      <RiStarFill className={styles.starIcon} />
                    </div>
                  </div>
                </div>
                
                <div className={styles.testimonialDots}>
                  <button className={`${styles.testimonialDot} ${styles.activeDot}`}></button>
                  <button className={styles.testimonialDot}></button>
                  <button className={styles.testimonialDot}></button>
                  <button className={styles.testimonialDot}></button>
                </div>
              </div>
            </div>
            
            {/* Company Video */}
            <div className={styles.videoContainer}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.videoPlayButton}>
                  <RiPlayFill className={styles.playIcon} />
                </div>
                <p className={styles.videoText}>Watch our company culture video</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Employee Benefits</h2>
              <p className={styles.sectionDescription}>We believe in taking care of our team. Here's what you can expect when you join PinaqTech:</p>
            </div>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <RiHeartPulseLine className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Health & Wellness</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Comprehensive health insurance</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Dental and vision coverage</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Mental health support</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Wellness program with fitness stipend</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <RiBookOpenLine className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Professional Development</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Training and certification budget</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Conference attendance opportunities</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Mentorship program</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Career advancement paths</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <RiTimeLine className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Work-Life Balance</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Flexible work arrangements</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Generous paid time off</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Parental leave</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Company-wide wellness days</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <RiMoneyDollarCircleLine className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Financial Benefits</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Competitive salary</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>401(k) matching</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Performance bonuses</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Employee stock options</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <RiCommunityLine className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Company Culture</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Team building events</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Volunteer opportunities</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Diversity and inclusion initiatives</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Recognition programs</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <RiBuilding4Line className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>Office Perks</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Modern workspaces</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Catered lunches</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Snacks and beverages</span>
                  </li>
                  <li className={styles.benefitListItem}>
                    <RiCheckLine className={styles.checkIcon} />
                    <span>Remote work equipment stipend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section id="openings" className={styles.openingsSection}>
          <div className={styles.openingsContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Current Openings</h2>
              <p className={styles.sectionDescription}>Explore our available positions and find the perfect role for your skills and career goals.</p>
            </div>
            
            {/* Department Tabs */}
            <div className={styles.departmentTabs}>
              <button 
                className={`${styles.departmentTab} ${activeDepartment === 'all' ? styles.activeDepartmentTab : ''}`}
                onClick={() => handleDepartmentChange('all')}
              >
                All Departments
              </button>
              <button 
                className={`${styles.departmentTab} ${activeDepartment === 'security' ? styles.activeDepartmentTab : ''}`}
                onClick={() => handleDepartmentChange('security')}
              >
                Security Engineering
              </button>
              <button 
                className={`${styles.departmentTab} ${activeDepartment === 'consulting' ? styles.activeDepartmentTab : ''}`}
                onClick={() => handleDepartmentChange('consulting')}
              >
                Consulting
              </button>
              <button 
                className={`${styles.departmentTab} ${activeDepartment === 'research' ? styles.activeDepartmentTab : ''}`}
                onClick={() => handleDepartmentChange('research')}
              >
                Research
              </button>
              <button 
                className={`${styles.departmentTab} ${activeDepartment === 'product' ? styles.activeDepartmentTab : ''}`}
                onClick={() => handleDepartmentChange('product')}
              >
                Product
              </button>
              <button 
                className={`${styles.departmentTab} ${activeDepartment === 'operations' ? styles.activeDepartmentTab : ''}`}
                onClick={() => handleDepartmentChange('operations')}
              >
                Operations
              </button>
            </div>
            
            {/* Job Listings */}
            <div className={`${styles.departmentContent} ${activeDepartment === 'all' ? styles.activeDepartmentContent : ''}`}>
              <div className={styles.jobsGrid}>
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>Senior Security Engineer</h3>
                      <p className={styles.jobMeta}>Security Engineering | Remote (US)</p>
                    </div>
                    <span className={styles.fullTimeBadge}>Full-time</span>
                  </div>
                  <p className={styles.jobDescription}>Design and implement security solutions to protect our clients' critical infrastructure. Lead vulnerability assessments and develop mitigation strategies.</p>
                  <div className={styles.jobRequirements}>
                    <h4 className={styles.requirementsTitle}>Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>5+ years of security engineering experience</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>CISSP, CEH, or equivalent certification</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Experience with cloud security (AWS, Azure)</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#apply" className={styles.applyButton}>Apply Now</a>
                </div>
                
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>Security Consultant</h3>
                      <p className={styles.jobMeta}>Consulting | New York, NY</p>
                    </div>
                    <span className={styles.fullTimeBadge}>Full-time</span>
                  </div>
                  <p className={styles.jobDescription}>Work with clients to assess their security posture, identify vulnerabilities, and develop comprehensive security strategies tailored to their needs.</p>
                  <div className={styles.jobRequirements}>
                    <h4 className={styles.requirementsTitle}>Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>3+ years in security consulting</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Strong communication and client management skills</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Experience with risk assessment frameworks</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#apply" className={styles.applyButton}>Apply Now</a>
                </div>
                
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>Security Researcher</h3>
                      <p className={styles.jobMeta}>Research | Remote (Global)</p>
                    </div>
                    <span className={styles.fullTimeBadge}>Full-time</span>
                  </div>
                  <p className={styles.jobDescription}>Conduct cutting-edge research on emerging security threats and vulnerabilities. Develop new methodologies for detecting and mitigating security risks.</p>
                  <div className={styles.jobRequirements}>
                    <h4 className={styles.requirementsTitle}>Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Advanced degree in Computer Science or related field</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Experience with vulnerability research</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Strong analytical and problem-solving skills</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#apply" className={styles.applyButton}>Apply Now</a>
                </div>
                
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>Product Manager, Security Solutions</h3>
                      <p className={styles.jobMeta}>Product | San Francisco, CA</p>
                    </div>
                    <span className={styles.fullTimeBadge}>Full-time</span>
                  </div>
                  <p className={styles.jobDescription}>Lead the development and strategy for our security product portfolio. Work with engineering, design, and marketing teams to deliver innovative security solutions.</p>
                  <div className={styles.jobRequirements}>
                    <h4 className={styles.requirementsTitle}>Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>4+ years of product management experience</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Background in cybersecurity or related field</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Experience with agile development methodologies</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#apply" className={styles.applyButton}>Apply Now</a>
                </div>
                
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>Security Operations Analyst</h3>
                      <p className={styles.jobMeta}>Operations | London, UK</p>
                    </div>
                    <span className={styles.fullTimeBadge}>Full-time</span>
                  </div>
                  <p className={styles.jobDescription}>Monitor and analyze security alerts, incidents, and threats. Respond to security events and implement remediation measures to protect client environments.</p>
                  <div className={styles.jobRequirements}>
                    <h4 className={styles.requirementsTitle}>Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>2+ years in security operations</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Experience with SIEM tools and incident response</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Strong analytical and troubleshooting skills</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#apply" className={styles.applyButton}>Apply Now</a>
                </div>
                
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>Technical Writer, Security</h3>
                      <p className={styles.jobMeta}>Operations | Remote (US)</p>
                    </div>
                    <span className={styles.partTimeBadge}>Part-time</span>
                  </div>
                  <p className={styles.jobDescription}>Create clear, concise, and comprehensive documentation for our security products and services. Translate complex technical concepts into accessible content.</p>
                  <div className={styles.jobRequirements}>
                    <h4 className={styles.requirementsTitle}>Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>3+ years of technical writing experience</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Understanding of cybersecurity concepts</span>
                      </li>
                      <li className={styles.requirementItem}>
                        <RiCheckLine className={styles.smallCheckIcon} />
                        <span>Experience with documentation tools and systems</span>
                      </li>
                    </ul>
                  </div>
                  <a href="#apply" className={styles.applyButton}>Apply Now</a>
                </div>
              </div>
            </div>
            
            <div className={styles.generalApplication}>
              <p className={styles.generalApplicationText}>Don't see the perfect role? We're always looking for talented individuals to join our team.</p>
              <a href="#apply" className={styles.secondaryButton}>Submit General Application</a>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section id="apply" className={styles.applicationSection}>
          <div className={styles.applicationContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Application Process</h2>
              <p className={styles.sectionDescription}>Our hiring process is designed to be transparent, efficient, and respectful of your time. Here's what to expect:</p>
            </div>
            
            <div className={styles.processContainer}>
              <div className={styles.processSteps}>
                {/* Step 1 */}
                <div 
                  className={`${styles.applicationStep} ${activeStep === 1 ? styles.activeStep : ''}`}
                  onClick={() => handleStepChange(1)}
                >
                  <div className={styles.stepNumberContainer}>
                    <div className={`${styles.stepNumber} ${activeStep === 1 ? styles.activeStepNumber : ''}`}>1</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Application Submission</h3>
                    <div className={`${styles.stepDetails} ${activeStep === 1 ? styles.activeStepDetails : ''}`}>
                      <p className={styles.stepDescription}>Submit your application through our careers portal. Include your resume, cover letter, and any relevant portfolio items or work samples.</p>
                      <div className={styles.applicationForm}>
                        <h4 className={styles.formTitle}>Application Form</h4>
                        <form>
                          <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                              <label className={styles.formLabel}>First Name</label>
                              <input type="text" className={styles.formInput} />
                            </div>
                            <div className={styles.formGroup}>
                              <label className={styles.formLabel}>Last Name</label>
                              <input type="text" className={styles.formInput} />
                            </div>
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Email</label>
                            <input type="email" className={styles.formInput} />
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Phone</label>
                            <input type="tel" className={styles.formInput} />
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Position</label>
                            <select className={styles.formSelect}>
                              <option>Select a position</option>
                              <option>Senior Security Engineer</option>
                              <option>Security Consultant</option>
                              <option>Security Researcher</option>
                              <option>Product Manager, Security Solutions</option>
                              <option>Security Operations Analyst</option>
                              <option>Technical Writer, Security</option>
                              <option>General Application</option>
                            </select>
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Resume/CV</label>
                            <div className={styles.fileUpload}>
                              <label className={styles.fileUploadLabel}>
                                <div className={styles.fileUploadContent}>
                                  <RiUpload2Line className={styles.uploadIcon} />
                                  <p className={styles.uploadText}>Drag and drop or click to upload</p>
                                  <p className={styles.uploadHint}>PDF, DOC, DOCX (Max 5MB)</p>
                                </div>
                                <input type="file" className={styles.fileInput} />
                              </label>
                            </div>
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Cover Letter (Optional)</label>
                            <textarea className={styles.formTextarea}></textarea>
                          </div>
                          <div className={styles.formCheckbox}>
                            <label className={styles.checkboxLabel}>
                              <input type="checkbox" className={styles.checkboxInput} />
                              <span>I consent to PinaqTech processing my personal data for recruitment purposes. I understand that my data will be stored securely and will not be shared with third parties without my consent.</span>
                            </label>
                          </div>
                          <button type="submit" className={styles.submitButton}>Submit Application</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div 
                  className={`${styles.applicationStep} ${activeStep === 2 ? styles.activeStep : ''}`}
                  onClick={() => handleStepChange(2)}
                >
                  <div className={styles.stepNumberContainer}>
                    <div className={`${styles.stepNumber} ${activeStep === 2 ? styles.activeStepNumber : ''}`}>2</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Initial Screening</h3>
                    <div className={`${styles.stepDetails} ${activeStep === 2 ? styles.activeStepDetails : ''}`}>
                      <p className={styles.stepDescription}>Our recruitment team will review your application and assess your qualifications against the role requirements. If there's a good match, we'll reach out to schedule an initial phone or video interview.</p>
                      <p className={styles.stepTimeframe}>Timeframe: 1-2 weeks after application</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div 
                  className={`${styles.applicationStep} ${activeStep === 3 ? styles.activeStep : ''}`}
                  onClick={() => handleStepChange(3)}
                >
                  <div className={styles.stepNumberContainer}>
                    <div className={`${styles.stepNumber} ${activeStep === 3 ? styles.activeStepNumber : ''}`}>3</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Technical Assessment</h3>
                    <div className={`${styles.stepDetails} ${activeStep === 3 ? styles.activeStepDetails : ''}`}>
                      <p className={styles.stepDescription}>Depending on the role, you may be asked to complete a technical assessment, case study, or practical exercise to demonstrate your skills and problem-solving abilities.</p>
                      <p className={styles.stepTimeframe}>Timeframe: 1 week after initial screening</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div 
                  className={`${styles.applicationStep} ${activeStep === 4 ? styles.activeStep : ''}`}
                  onClick={() => handleStepChange(4)}
                >
                  <div className={styles.stepNumberContainer}>
                    <div className={`${styles.stepNumber} ${activeStep === 4 ? styles.activeStepNumber : ''}`}>4</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Team Interviews</h3>
                    <div className={`${styles.stepDetails} ${activeStep === 4 ? styles.activeStepDetails : ''}`}>
                      <p className={styles.stepDescription}>Meet with potential team members, managers, and cross-functional colleagues. These interviews will assess your technical expertise, cultural fit, and alignment with our values.</p>
                      <p className={styles.stepTimeframe}>Timeframe: 1-2 weeks after technical assessment</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div 
                  className={`${styles.applicationStep} ${activeStep === 5 ? styles.activeStep : ''}`}
                  onClick={() => handleStepChange(5)}
                >
                  <div className={styles.stepNumberContainer}>
                    <div className={`${styles.stepNumber} ${activeStep === 5 ? styles.activeStepNumber : ''}`}>5</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Final Decision & Offer</h3>
                    <div className={`${styles.stepDetails} ${activeStep === 5 ? styles.activeStepDetails : ''}`}>
                      <p className={styles.stepDescription}>After completing all interviews, we'll make a decision and extend an offer to the selected candidate. We'll discuss compensation, benefits, start date, and answer any questions you may have.</p>
                      <p className={styles.stepTimeframe}>Timeframe: 1 week after final interview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.faqContainer}>
              <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
              <div className={styles.faqList}>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>How long does the hiring process typically take?</h4>
                  <p className={styles.faqAnswer}>Our hiring process typically takes 3-5 weeks from application to offer, though this may vary depending on the position and number of applicants.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>Do you offer relocation assistance?</h4>
                  <p className={styles.faqAnswer}>Yes, we offer relocation assistance for certain roles. This will be discussed during the interview process if applicable.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>What is your remote work policy?</h4>
                  <p className={styles.faqAnswer}>We offer flexible work arrangements, including fully remote positions for many roles. Some positions may require occasional office presence or be location-specific.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>How can I prepare for interviews at PinaqTech?</h4>
                  <p className={styles.faqAnswer}>Research our company, products, and services. Be prepared to discuss your experience and how it relates to the role. For technical positions, review relevant security concepts and be ready to demonstrate your problem-solving skills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
              <h2 className={styles.contactTitle}>Have Questions?</h2>
              <p className={styles.contactDescription}>Our recruitment team is here to help you with any questions about our open positions or application process.</p>
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.contactIconContainer}>
                    <RiMailLine className={styles.contactIcon} />
                  </div>
                  <span className={styles.contactText}>careers@pinaqtech.com</span>
                </div>
                <div className={styles.contactMethod}>
                  <div className={styles.contactIconContainer}>
                    <RiPhoneLine className={styles.contactIcon} />
                  </div>
                  <span className={styles.contactText}>+1 (888) 123-4567 ext. 2</span>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/company/pinaqtech" className={styles.socialLink}>
                  <RiLinkedinFill className={`${styles.socialIcon} ${styles.linkedinIcon}`} />
                  <span>Follow us on LinkedIn</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <RiTwitterXFill className={`${styles.socialIcon} ${styles.twitterIcon}`} />
                  <span>Follow us on X</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <RiInstagramFill className={`${styles.socialIcon} ${styles.instagramIcon}`} />
                  <span>Follow us on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Stay Updated on New Opportunities</h2>
              <p className={styles.newsletterDescription}>Subscribe to our careers newsletter to receive updates on new job openings and company news.</p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
                <button className={styles.newsletterButton}>Subscribe</button>
              </div>
              <p className={styles.newsletterDisclaimer}>We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Join Our Team?</h2>
              <p className={styles.ctaDescription}>Explore our current openings and take the first step toward an exciting career at PinaqTech.</p>
              <div className={styles.ctaButtons}>
                <a href="#openings" className={styles.primaryButton}>View Openings</a>
                <a href="#apply" className={styles.secondaryButton}>Apply Now</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Live Chat Widget */}
      <div className={styles.liveChat}>
        <button className={styles.liveChatButton}>
          <RiMessage3Line className={styles.liveChatIcon} />
        </button>
      </div>
    </div>
  );
};

export default Careers;