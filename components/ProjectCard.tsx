import Image from 'next/image';
import { Project } from '@/types';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={`${project.title} cover`}
          fill
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        {project.sourceCode && (
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Source Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Live Demo
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Video Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
