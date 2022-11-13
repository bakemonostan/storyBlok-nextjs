import { storyblokEditable } from '@storyblok/react';
import styles from '../styles/Home.module.css';

const Feature = ({ blok }) => (
  <div className={styles.features} {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
