import { storyblokEditable } from '@storyblok/react';
import styles from '../styles/Home.module.css';

const Contact = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className={styles.contact}>
      <div>
        <p>{blok.name}</p>
        <p>{blok.phone}</p>
        <p>{blok.address}</p>
      </div>
    </section>
  );
};
export default Contact;
