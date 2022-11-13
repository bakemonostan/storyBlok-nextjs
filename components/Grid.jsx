import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import styles from '../styles/Home.module.css';
const Grid = ({ blok }) => {
  return (
    <div className={styles.grid} {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
