import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image
        src={project.image}
        height={200}
        width={250}
        alt={project.name}
      />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className={styles.languages}>
          {project.languages && project.languages.length > 0 ? (
            project.languages.map((language) => (
              <div
                key={language.name}
                className={`${styles.languageItem} ${styles[`language-${language.name.toLowerCase().replace("#", "sharp").replace("++", "plusplus")}`]}`}
              >
                <span>{language.name}</span>
              </div>
            ))
          ) : (
            <p>No languages data available</p>
          )}
        </div>

        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
