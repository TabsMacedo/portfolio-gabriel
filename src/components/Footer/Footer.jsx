import { contact } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div>
          <div>
            <p className="eyebrow">04 / PRÓXIMA CONEXÃO</p>
            <h2>
              Uma boa ideia começa
              <br />
              com uma <span>conversa.</span>
            </h2>
            <p className={styles.description}>
              Projetos, oportunidades ou uma troca de ideias.
              <br />
              Vamos construir algo interessante juntos.
            </p>
          </div>
        </div>

        {/* Se o contato estiver vazio, mostramos "Em breve". */}
        <div className={styles.channels}>
          {contact.email ? (
            <a href={`mailto:${contact.email}`}>
              <span>01 /</span>
              E-mail
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className={styles.pending}>
              <span>01 /</span>
              E-mail
              <small>EM BREVE</small>
            </div>
          )}

          {contact.github ? (
            <a href={contact.github} target="_blank" rel="noreferrer">
              <span>02 /</span>
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className={styles.pending}>
              <span>02 /</span>
              GitHub
              <small>EM BREVE</small>
            </div>
          )}

          {contact.linkedin ? (
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>03 /</span>
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className={styles.pending}>
              <span>03 /</span>
              LinkedIn
              <small>EM BREVE</small>
            </div>
          )}
        </div>

        <div className={styles.bottom}>
          <a href="#home" className={styles.signature}>
            gabriel<span>.</span>
            <small>TAKAHATA</small>
          </a>
          <p>© 2026 · Feito com código e intenção.</p>
          <a className={styles.back} href="#home">
            DE VOLTA AO TOPO <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
