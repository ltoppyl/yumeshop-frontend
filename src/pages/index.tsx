import type { NextPage } from 'next';
import Head from 'next/head';
import { useMediaLayout } from 'use-media';

import { Container, Main } from 'src/styles/Home';
import { Header } from 'src/components/organisms/Header';
import { Footer } from 'src/components/organisms/Footer';
import { Headline } from 'src/components/atoms/Headline';
import Card from 'src/components/common/card/index';
import NewCardList from 'src/components/news/NewsCardList';
import { dummyCardList } from 'src/components/news/NewsCardList/index.stories';
import { dummyCommonCardList } from 'src/components/common/card/index.stories';

const Home: NextPage = () => {
  const isWide = useMediaLayout({ minWidth: '1000px' });
  const headlineFontSize = isWide ? 'large' : 'middle';

  return (
    <Container>
      <Head>
        <title>Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <div className="headline">
          <Headline label="キャンペーン" headlineTypes={headlineFontSize} />
        </div>
        <div className="common-card-top-page">
          <Card
            imageUrl={dummyCommonCardList.image}
            cardName={dummyCommonCardList.cardName}
          />
        </div>
        <div className="headline">
          <Headline label="お知らせ" headlineTypes={headlineFontSize} />
        </div>
        <div className="news-card-top-page">
          <NewCardList newsDataList={dummyCardList} />
        </div>
        <div className="headline">
          <Headline label="カテゴリ" headlineTypes={headlineFontSize} />
        </div>
        <div className="common-card-top-page">
          <Card
            imageUrl={dummyCommonCardList.image}
            cardName={dummyCommonCardList.cardName}
          />
        </div>
        <Footer />
      </Main>
    </Container>
  );
};

export default Home;
