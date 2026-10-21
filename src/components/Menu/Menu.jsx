import styles from './Menu.module.css';

export default function Menu({ nome }) {
  return (
    <header className={styles['menu']}>
      <nav
        className={`container ${styles['menu__navigation']}`}
        aria-label="Navegação principal"
      >
        <a href="#home" className={styles['menu__logo']}>
          <span className={styles['menu__logo-mark']} aria-hidden="true">
            g<span>.</span>
          </span>
          {nome}
          <span className={styles['menu__logo-suffix']}> / dev</span>
        </a>

        <div className={styles['menu__links']}>
          <a className={styles['menu__link']} href="#home">
            Início
          </a>
          <a className={styles['menu__link']} href="#projects">
            Projetos
          </a>
          <a className={styles['menu__link']} href="#skills">
            Habilidades
          </a>

          <a href="#contact" className={`${styles['menu__link']} ${styles['menu__link--contact']}`}>
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
