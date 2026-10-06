import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className={styles.status}>EM CONSTANTE CONSTRUÇÃO</p>
          <p className={styles.hello}>Olá, eu sou Gabriel Takahata.</p>

          <h1>
            Ideias ganham
            <br />
            forma em{' '}
            <span>
              código<span className={styles.dot}>.</span>
            </span>
          </h1>

          <p className={styles.description}>
            Web developer explorando a conexão entre design e tecnologia.
            Crio experiências digitais com atenção aos detalhes e curiosidade
            pelo que vem a seguir.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              Explore meus projetos <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondary} href="#about">
              Um pouco sobre mim <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.stack}>
            <span>FEITO COM CURIOSIDADE &</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <p>Sua imagem aqui</p>

          {/*
            Coloque sua imagem na pasta public.
            Depois, substitua o parágrafo acima por:
            <img
              src="/minha-imagem.png"
              alt="Descrição da sua imagem"
            />
          */}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>DESENVOLVIMENTO COM INTENÇÃO.</span>
        <a href="#projects">
          ROLE PARA EXPLORAR <span aria-hidden="true">↓</span>
        </a>
        <span>PORTFÓLIO / 2026</span>
      </div>
    </section>
  );
}
