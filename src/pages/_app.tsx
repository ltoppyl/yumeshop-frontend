import type { AppProps } from 'next/app';
import GlobalStyle from 'src/styles/Globals';
import 'src/styles/TopPage.css';
import 'src/styles/Card.css';
import 'src/styles/NewsCard.css';
import 'src/styles/NewsCardList.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
