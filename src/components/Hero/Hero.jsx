import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <>
            <div className={styles.heroAbout}>
                <h1 className={styles.heroName}>Gabriel Takahata</h1>
                <h3 className={styles.heroJob}>Web Developer</h3>
                <p className={styles.heroParag}>Estudando web development etc</p>
            </div>

            <div className={styles.heroElement}></div>
            <button className={styles.heroButton}></button>
        </>
    )
}