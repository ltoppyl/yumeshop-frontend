import React from 'react';

import { NewsCardDataType } from 'src/types/type';
import NewsCard from '../NewsCard';
import 'src/styles/NewsCardList.css';

export type NewsCardListProps = {
  newsDataList: NewsCardDataType[];
};

const NewCardList = ({ newsDataList }: NewsCardListProps) => (
  <div className="news-card-list">
    {newsDataList.map((newsData: NewsCardDataType) => (
      <NewsCard {...newsData} />
    ))}
  </div>
);
export default NewCardList;
