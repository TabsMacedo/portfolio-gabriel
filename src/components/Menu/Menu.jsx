import styles from "./Menu.module.css";

export default function Menu({ nome }) {
    return (
        <>
            <nav className={styles.navbar}>
                <img className={styles.navbarImg} src="" alt="" />
                <p className={styles.navbarLogo}>{nome}</p>
                <ul className={styles.navbarMenu}>
                    <li className={styles.menuItem}>Sobre</li>
                    <li className={styles.menuItem}>Projetos</li>
                    <li className={styles.menuItem}>Habilidades</li>
                    <li className={styles.menuItem}>Contato</li>
                </ul>
                <div className={styles.button}>
                <button className={styles.buttonItem}></button>
                <button className={styles.buttonItem}></button>
                </div>
            </nav>
        </>
    )
}