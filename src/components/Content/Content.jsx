import { projects, skills } from '../../data/portfolio';
import styles from './Content.module.css';

export default function Content() {
  return (
    <>
      <section id="projects" className={`container ${styles.projects}`}>
        <div className={styles.sectionTop}>
          <div>
            <p className="eyebrow">01 / PROJETOS SELECIONADOS</p>
            <h2 className="section-heading">
              Ideias fora da caixa<span className={styles.titleDot}>.</span>
            </h2>
          </div>
          <p>Conheça meus projetos e o que aprendi com cada um.</p>
        </div>

        <div className={styles.grid}>
          {/* O map cria um cartão para cada projeto da lista. */}
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <p className="eyebrow">PROJETO / {project.id}</p>
              <h3>{project.name}</h3>
              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.tags}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* O próprio HTML abre e fecha os detalhes. */}
              <details className={styles.details}>
                <summary>Mais sobre o projeto</summary>
                <p>{project.objective}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </details>

              <div className={styles.projectLinks}>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver projeto ↗
                  </a>
                )}
                {project.repository && (
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    Repositório ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className={styles.collectionNote}>
          Projetos demonstrativos. Substitua os exemplos pelos seus projetos reais.
        </p>
      </section>

      <section id="about" className={styles.about}>
        <div className={`container ${styles.aboutLayout}`}>
          <div>
            <p className="eyebrow">02 / SOBRE MIM</p>
            <h2 className="section-heading">
              Curioso por natureza.
              <br />
              <span>Developer por escolha.</span>
            </h2>
          </div>

          <div className={styles.aboutText}>
            <p>
              Sou Gabriel, um desenvolvedor web em formação que gosta de entender
              como as coisas funcionam — e de descobrir como fazê-las funcionar melhor.
            </p>
            <p>
              Entre uma ideia e uma experiência real, encontro espaço para experimentar,
              aprender e cuidar dos detalhes. Este portfólio é parte desse processo:
              um lugar onde design e código se encontram.
            </p>
            <div className={styles.aboutNote}>
              <span aria-hidden="true">↗</span>
              <span>
                Aprender. Construir. Refinar.
                <br />
                <small>E então, fazer de novo.</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`container ${styles.skills}`}>
        <div className={styles.sectionTop}>
          <div>
            <p className="eyebrow">03 / FERRAMENTAS & HABILIDADES</p>
            <h2 className="section-heading">Meu kit de construção.</h2>
          </div>
          <p>Tecnologias que acompanham meus estudos e experimentos.</p>
        </div>

        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <article className={styles.skill} key={skill.name}>
              <p className={styles.skillLabel}>{skill.label}</p>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
