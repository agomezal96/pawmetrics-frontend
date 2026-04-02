import styles from './Footer.module.css'

export default function Footer() {

    return (
    <footer className={styles.footer}>
        <p>Created by <a href="https://github.com/agomezal96" className={styles.link}>Andrea Gomez</a> with 💚</p>
        <p>April 2026</p>
    </footer>
    )
}