import { contact } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles['footer']}>
      <div className="container">
        <div>
          <div>
            <p className="eyebrow">03 / PRÓXIMA CONEXÃO</p>
            <h2 className={styles['footer__title']}>
              Uma boa ideia começa
              <br />
              com uma <span className={styles['footer__title-highlight']}>conversa.</span>
            </h2>
            <p className={styles['footer__description']}>
              Projetos, oportunidades ou uma troca de ideias.
              <br />
              Vamos construir algo interessante juntos.
            </p>
          </div>
        </div>

        {/* Se o contato estiver vazio, mostramos "Em breve". */}
        <div className={styles['footer__channels']}>
          {contact.email ? (
            <a className={styles['footer__channel']} href={`mailto:${contact.email}`}>
              <span>01 /</span>
              E-mail
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className={`${styles['footer__channel']} ${styles['footer__channel--pending']}`}>
              <span>01 /</span>
              E-mail
              <small className={styles['footer__channel-status']}>EM BREVE</small>
            </div>
          )}

          {contact.github ? (
            <a className={styles['footer__channel']} href={contact.github} target="_blank" rel="noreferrer">
              <span>02 /</span>
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className={`${styles['footer__channel']} ${styles['footer__channel--pending']}`}>
              <span>02 /</span>
              GitHub
              <small className={styles['footer__channel-status']}>EM BREVE</small>
            </div>
          )}

          {contact.linkedin ? (
            <a className={styles['footer__channel']} href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>03 /</span>
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className={`${styles['footer__channel']} ${styles['footer__channel--pending']}`}>
              <span>03 /</span>
              LinkedIn
              <small className={styles['footer__channel-status']}>EM BREVE</small>
            </div>
          )}
        </div>

        <div className={styles['footer__bottom']}>
          <a href="#home" className={styles['footer__signature']}>
            gabriel<span>.</span>
            <small>TAKAHATA</small>
          </a>
          <p>© 2026 · Feito com código e intenção.</p>
          <a className={styles['footer__back-to-top']} href="#home">
            DE VOLTA AO TOPO <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
