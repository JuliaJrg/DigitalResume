import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Me Joindre sur mes réseaux</h3>
        <ContactCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Julia Jorge - Contact'
    }
  }
}
export default ContactPage;