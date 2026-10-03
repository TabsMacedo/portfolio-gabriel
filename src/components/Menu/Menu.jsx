import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu({ nome }) {
    const [closed, setClosed] = useState(0);
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
                    <div><p>{closed}</p></div>
                </ul>
                <div className={styles.button}>
                    <button className={styles.buttonItem}></button>
                    <button className={styles.buttonItem}></button>
                </div>
            </nav>

        </>
    )
}