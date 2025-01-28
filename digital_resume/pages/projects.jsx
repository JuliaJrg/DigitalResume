import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Mes projets</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const reposRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );

  if (!reposRes.ok) {
    console.error("Failed to fetch repos", reposRes.status);
    return {
      props: { projects: [] },
    };
  }

  const repos = await reposRes.json();

  const projects = await Promise.all(
    repos.map(async (repo) => {
      // Récupérer l'image du projet depuis le README
      const image = await getImageFromReadme(repo.name);
      
      // Récupérer les langages du projet depuis GitHub
      const languagesRes = await fetch(
        `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/languages`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_API_KEY}`,
          },
        }
      );
      const languages = await languagesRes.json();

      // Formater les langages et leurs pourcentages
      const languageData = Object.entries(languages).map(([name, value]) => ({
        name,
        percentage: ((value / Object.values(languages).reduce((a, b) => a + b)) * 100).toFixed(1),
      }));

      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        image: image || repo.owner.avatar_url,
        tags: repo.topics || [],
        source_code: repo.html_url,
        languages: languageData,
      };
    })
  );

  return {
    props: { projects },
  };
}

async function getImageFromReadme(repoName) {
  try {
    const readmeRes = await fetch(
      `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repoName}/readme`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const readmeData = await readmeRes.json();
    const readmeContent = atob(readmeData.content);
    const imgMatch = readmeContent.match(/<img[^>]+src="([^"]+)"/);
    return imgMatch ? imgMatch[1] : null;
  } catch (error) {
    console.error("Error fetching README for image", error);
    return null;
  }
}

export async function getStaticProps() {
  return {
      props: {
          title: "Julia Jorge - Projets"
      }
  }
}

export default ProjectsPage;