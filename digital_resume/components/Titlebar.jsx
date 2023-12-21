import Image from 'next/image';
import styles from '../styles/Titlebar.module.css'

const Titlebar = () => {
    return (
        <section className={styles.titlebar}>
            <Image
                src="/vscode_icon.svg"
                alt="VSCode Icon"
                height={15}
                width={15}
                className={styles.icon}
            />
            <div className={styles.items}>
                <p>Fichier</p>
                <p>Edition</p>
                <p>Affichage</p>
                <p>Executer</p>
                <p>Terminal</p>
                <p>Aide</p>
            </div>
            <p className={styles.title}>Julia Jorge - Visual Studio Code</p>
            <div className={styles.windowButtons}>
                <div className={styles.minimize}></div>
                <div className={styles.maximize}></div>
                <div className={styles.close}></div>
            </div>
        </section>
    )
}

export default Titlebar;