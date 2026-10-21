import styles from './Projects.module.css';

export default function Projects() {
  // Cada objeto representa um projeto. Substitua os exemplos abaixo.
  // Preencha image com a URL da imagem ou um caminho como /images/projeto.png.
  const projects = [
    {
      id: '01',
      name: 'Interface Lab',
      description: 'Um espaço para explorar interfaces que equilibram forma, função e pequenos detalhes.',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: '',
      demo: '',
      repository: '',
    },
    {
      id: '02',
      name: 'Organizador',
      description: 'Uma ideia de aplicação para organizar tarefas do dia a dia.',
      technologies: ['React', 'JavaScript', 'CSS'],
      image: '',
      demo: '',
      repository: '',
    },
    {
      id: '03',
      name: 'Página de estudos',
      description: 'Um projeto para praticar a construção de páginas no navegador.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '',
      demo: '',
      repository: '',
    },
  ];

  return (
    <section id="projects" className={`container ${styles['projects']}`}>
      <div className={styles['projects__header']}>
        <div>
          <p className="eyebrow">01 / PROJETOS SELECIONADOS</p>
          <h2 className="section-heading">
            Ideias fora da caixa<span className={styles['projects__title-dot']}>.</span>
          </h2>
        </div>
        <p className={styles['projects__introduction']}>Conheça meus projetos e o que aprendi com cada um.</p>
      </div>

      <div className={styles['projects__grid']}>
        {/* O map cria um cartão para cada projeto da lista. */}
        {projects.map((project) => (
          <article key={project.id} className={styles['projects__card']}>
            {project.image ? (
              <a
                className={styles['projects__image-link']}
                href={project.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver imagem de ${project.name}`}
              >
                <img
                  className={styles['projects__image']}
                  src={project.image}
                  alt={`Prévia do projeto ${project.name}`}
                  loading="lazy"
                />
              </a>
            ) : (
              <div className={styles['projects__image-placeholder']}>
                Imagem do projeto
              </div>
            )}
            <p className="eyebrow">PROJETO / {project.id}</p>
            <h3 className={styles['projects__card-title']}>{project.name}</h3>
            <p className={styles['projects__description']}>{project.description}</p>

            <div className={styles['projects__technologies']}>
              {project.technologies.map((technology) => (
                <span className={styles['projects__technology']} key={technology}>{technology}</span>
              ))}
            </div>

            <div className={styles['projects__links']}>
              {project.image && (
                <a className={styles['projects__link']} href={project.image} target="_blank" rel="noreferrer">
                  Ver imagem ↗
                </a>
              )}
              {project.demo && (
                <a className={styles['projects__link']} href={project.demo} target="_blank" rel="noreferrer">
                  Ver projeto ↗
                </a>
              )}
              {project.repository && (
                <a className={styles['projects__link']} href={project.repository} target="_blank" rel="noreferrer">
                  Repositório ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
