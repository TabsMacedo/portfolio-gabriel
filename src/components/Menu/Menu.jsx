import styles from './Menu.module.css';

export default function Menu({ nome }) {
  return (
    <header className={styles.header}>
      <nav
        className={`container ${styles.nav}`}
        aria-label="Navegação principal"
      >
        <a href="#home" className={styles.logo}>
          <span className={styles.mark} aria-hidden="true">
            g<span>.</span>
          </span>
          {nome}
          <span className={styles.logoSuffix}> / dev</span>
        </a>

        <div className={styles.links}>
          <a href="#home">
            Início
          </a>
          <a href="#about">
            Sobre
          </a>
          <a href="#projects">
            Projetos
          </a>
          <a href="#skills">
            Habilidades
          </a>

          <a href="#contact" className={styles.contact}>
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
