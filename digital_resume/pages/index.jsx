import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.background}>
          <h1>Pré-MSc</h1>
          <h1>Epitech</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Julia Jorge</h1>
            <h6 className={styles.bio}>Développeuse web full-stack</h6>
            <Link 
              href="/Julia_JORGE_CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>Mon CV</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Me contacter</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}