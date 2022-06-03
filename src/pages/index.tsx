import type { NextPage } from 'next';
import Head from 'next/head';
import { useMediaLayout } from 'use-media';
import axios from 'axios';

import { Container, Main } from 'src/styles/Home';
import { Header } from 'src/components/organisms/Header';
import { Footer } from 'src/components/organisms/Footer';
import { Headline } from 'src/components/atoms/Headline';
import Card from 'src/components/common/card/index';
import NewCardList from 'src/components/news/NewsCardList';
import { NewsCardDataType } from 'src/types/type';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const isWide = useMediaLayout({ minWidth: '1000px' });
  const headlineFontSize = isWide ? 'large' : 'middle';

  const [newsCardData, setNewsCardData] = useState<NewsCardDataType[]>();

  useEffect(() => {
    axios.get('http://localhost:3000/informations').then((res) => {
      setNewsCardData(res.data);
    });
  }, []);

  // TODO: API データに置き換えた後に削除する
  const dummyImageUrl = 'https://picsum.photos/300/200';
  const dummyCardName = '文房具セール';

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
          <Card imageUrl={dummyImageUrl} cardName={dummyCardName} />
        </div>
        <div className="headline">
          <Headline label="お知らせ" headlineTypes={headlineFontSize} />
        </div>
        <div className="news-card-top-page">
          <NewCardList newsDataList={newsCardData} />
        </div>
        <div className="headline">
          <Headline label="カテゴリ" headlineTypes={headlineFontSize} />
        </div>
        <div className="common-card-top-page">
          <Card imageUrl={dummyImageUrl} cardName={dummyCardName} />
        </div>
        <Footer />
      </Main>
    </Container>
  );
};

export default Home;
