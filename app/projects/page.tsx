import { Metadata } from 'next';
import { VscGithub, VscLinkExternal } from 'react-icons/vsc';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>MAJOR PROJECT&apos;S 😃</h1>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
            />
          ))}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerLine} />
          <a 
            href="https://github.com/itsnitinr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <VscGithub size={18} />
            <span>Explore more on GitHub</span>
            <VscLinkExternal size={14} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectsPage;
