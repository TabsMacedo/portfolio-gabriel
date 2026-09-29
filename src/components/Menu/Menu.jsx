import styles from "./Menu.module.css";

export default function Menu ({nome}){
    return(
        <>
        <nav>
            <p className={styles.logo}>{nome}</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
        </>
    )
}