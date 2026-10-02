import styles from "./Hero.module.css";

export default function Hero({ nome }) {
    return (
        <>
            <div className={styles.heroAbout}>
                <h1>Gabriel Takahata</h1>
                <h3>Web Developer</h3>
                <p>Estudando web development etc</p>
            </div>

            <div className="styles.heroElement"></div>
            <button className="Styles.heroButton"></button>
        </>
    )
}