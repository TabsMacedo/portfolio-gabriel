import styles from './Skills.module.css';

export default function Skills() {
  // Edite as habilidades nesta lista.
  const skills = [
    {
      name: 'HTML / CSS',
      label: 'Estrutura & estilo',
      description: 'Semântica, layouts responsivos e atenção à experiência em cada tamanho de tela.',
    },
    {
      name: 'JavaScript',
      label: 'Lógica & interação',
      description: 'Transformando páginas estáticas em experiências com comportamento e propósito.',
    },
    {
      name: 'React',
      label: 'Interfaces & componentes',
      description: 'Interfaces organizadas em componentes, com estados e responsabilidades claras.',
    },
    {
      name: 'Git / GitHub',
      label: 'Processo & evolução',
      description: 'Versionamento e organização para construir, experimentar e evoluir o código.',
    },
  ];

  return (
    <section id="skills" className={`container ${styles['skills']}`}>
      <div className={styles['skills__header']}>
        <div>
          <p className="eyebrow">02 / FERRAMENTAS & HABILIDADES</p>
          <h2 className="section-heading">Meu kit de construção.</h2>
        </div>
        <p className={styles['skills__introduction']}>Tecnologias que acompanham meus estudos e experimentos.</p>
      </div>

      <div className={styles['skills__grid']}>
        {skills.map((skill) => (
          <article className={styles['skills__card']} key={skill.name}>
            <p className={styles['skills__category']}>{skill.label}</p>
            <h3 className={styles['skills__name']}>{skill.name}</h3>
            <p className={styles['skills__description']}>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
