import styles from './Hero.module.css';
import HeroSphere from './HeroSphere.jsx';

export default function Hero() {
  return (
    <section id="home" className={styles['hero']}>
      <div className={`container ${styles['hero__layout']}`}>
        <div className={styles['hero__introduction']}>
          <p className={styles['hero__greeting']}>Olá, eu sou Gabriel Takahata.</p>

          <h1 className={styles['hero__title']}>
            Ideias ganham
            <br />
            forma em{' '}
            <span className={styles['hero__title-highlight']}>
              código<span className={styles['hero__title-dot']}>.</span>
            </span>
          </h1>

          <p className={styles['hero__description']}>
            Web developer explorando a conexão entre design e tecnologia.
            Crio experiências digitais com atenção aos detalhes e curiosidade
            pelo que vem a seguir.
          </p>

          <div className={styles['hero__actions']}>
            <a className={`${styles['hero__action']} ${styles['hero__action--primary']}`} href="#projects">
              Explore meus projetos <span className={styles['hero__action-icon']} aria-hidden="true">↗</span>
            </a>
            <a className={`${styles['hero__action']} ${styles['hero__action--secondary']}`} href="#skills">
              Minhas habilidades <span className={styles['hero__action-icon']} aria-hidden="true">→</span>
            </a>
          </div>
        </div>
    // exemplo
        <div className={styles['hero__sphere-container']}>
          <HeroSphere />
        </div>
      </div>
    </section>
  );
}
