'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Supam Roy</h1>
              <p className={styles.role}>Software Engineer </p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Kolkata, India
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/SUPAM07" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I am a Computer Science & Engineering undergraduate at the National Institute of Technology Durgapur (Class of 2026), 
                passionate about full-stack development, distributed systems, and security research.
              </p>
              
              <p className={styles.paragraph}>
                Through internships at IISc Bangalore and Tailored AI, I have architected real-time network penetration engines and built 
                production-grade AI search copilots. I am an active LeetCode competitor with Knight status (Top 5.72% globally) and love 
                solving complex algorithmic and optimization challenges.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>JAN, 2026 - APR, 2026</span>
                </div>
                <h3 className={styles.expRole}>Research Intern</h3>
                <p className={styles.expCompany}>IISc Bangalore</p>
                <ul className={styles.expList}>
                  <li>Led a 4-member team in architecting a real-time MITM engine using ARP poisoning and Linux NetfilterQueue to
                  intercept and forge live IEC 61850 traffic, preserving stateful TCP sessions while processing 1,000 packets/sec.</li>
                  <li>Designed a multithreaded packet-processing pipeline with Redis TimeSeries for live stream buffering and historical
                  payload retrieval, enabling stateful out-of-band packet manipulation with less than 0.5ms lookup latency.</li>
                  <li>Developed a memory-efficient PyQt5 packet analysis application with streaming PCAP processing, enabling analysis and
                  manipulation of 300+ MB network captures without GUI freezes or excessive memory consumption.</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>MAY, 2025 - JUL, 2025</span>
                </div>
                <h3 className={styles.expRole}>Software Engineer Intern</h3>
                <p className={styles.expCompany}>Tailored AI</p>
                <ul className={styles.expList}>
                  <li>Engineered an end-to-end Document Copilot using FastAPI, React, and PostgreSQL, automating SEC 10-K/10-Q
                  research workflows and saving analysts an estimated 3+ hours per week.</li>
                  <li>Optimized SEC filing ingestion by eliminating I/O bottlenecks with asyncio-driven concurrent batching, reducing
                  embedding latency by 30%.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>Python</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>REST APIs</span>
                    <span className={styles.skillTag}>WebSockets</span>
                    <span className={styles.skillTag}>gRPC</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Data & Messaging</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>Redis</span>
                    <span className={styles.skillTag}>RabbitMQ</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Cloud & DevOps</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>AWS (EC2, S3)</span>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>CI/CD</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Core CS</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>DSA</span>
                    <span className={styles.skillTag}>System Design</span>
                    <span className={styles.skillTag}>DBMS</span>
                    <span className={styles.skillTag}>Computer Networks</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications 
                as a freelance technical author:
              </p>
              
              <div className={styles.writingLinks}>
                <a 
                  href="https://medium.com/@supamroy8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>Medium</span>
                  <VscLinkExternal size={14} />
                </a>    

                 <a 
                  href="https://dev.to/supam07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>   
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
              Outside of coding, I’m a fitness enthusiast,
              marathon runner, and Inter-District Cricket Championship winner.
              I also enjoy music as a way to unwind and recharge.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
