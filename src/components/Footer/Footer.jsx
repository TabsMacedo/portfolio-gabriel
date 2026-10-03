import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <ul className={styles.contact}>
                <li className={styles.contactItem}>E-MAIL</li>
                <li className={styles.contactItem}>LINKEDIN</li>
                <li className={styles.contactItem}>GITHUB</li>
            </ul>
        </>
    )
}