import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import styles from '../styles/Home.module.css';
const Page = ({ blok }) => (
  <main className={styles.main} {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
