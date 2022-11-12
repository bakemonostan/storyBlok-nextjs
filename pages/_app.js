import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';

storyblokInit({
  accessToken: 'your-preview-token',
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

