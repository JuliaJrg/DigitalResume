import { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_asc70xi', // Remplacez par votre ID de service EmailJS
        'template_gc0mcma', // Remplacez par l'ID de votre modèle EmailJS
        e.target,
        '-WRBwf3C2tmJn3Sfy' // Remplacez par votre ID d'utilisateur EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Votre message a été envoyé avec succès.');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
          alert('Il y a eu une erreur lors de l\'envoi de votre message.');
        }
      );
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Me Joindre sur mes réseaux</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Ou avec ce formulaire</h3>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Sujet</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;