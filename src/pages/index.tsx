import type { NextPage } from 'next';
import Head from 'next/head';
import { useMediaLayout } from 'use-media';

import { Container, Main } from 'src/styles/Home';
import { Header } from 'src/components/organisms/Header';
import { Footer } from 'src/components/organisms/Footer';
import { Headline } from 'src/components/atoms/Headline';
import Card from 'src/components/common/card/index';
import NewCardList from 'src/components/news/NewsCardList';
import { NewsCardDataType } from 'src/types/type';

const Home: NextPage = () => {
  const isWide = useMediaLayout({ minWidth: '1000px' });
  const headlineFontSize = isWide ? 'large' : 'middle';

  // TODO: API データに置き換えた後に削除する
  const dummyImageUrl = 'https://picsum.photos/300/200';
  const dummyCardName = '文房具セール';
  const dummyCardList: NewsCardDataType[] = [
    {
      id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
      date: '2017-07-21T17:32:28',
      tagList: [
        {
          id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
          name: '重要',
          color: 'red',
          tag_group: 'information',
        },
        {
          id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
          name: 'メンテナンス',
          color: 'yellow',
          tag_group: 'information',
        },
      ],
      newsTitle: 'メンテナンスのお知らせ!!!!!',
      mainText:
        '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
    },
    {
      id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
      date: '2017-07-21T17:32:28',
      tagList: [
        {
          id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
          name: '重要',
          color: 'red',
          tag_group: 'information',
        },
        {
          id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
          name: 'メンテナンス',
          color: 'yellow',
          tag_group: 'information',
        },
      ],
      newsTitle: 'メンテナンスのお知らせ',
      mainText:
        '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
    },
  ];
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
          <NewCardList newsDataList={dummyCardList} />
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
