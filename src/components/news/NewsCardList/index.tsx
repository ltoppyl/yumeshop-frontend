import React from 'react';

import { NewsCardDataType } from 'src/types/type';
import NewsCard from '../NewsCard';

export type NewsCardListProps = {
  newsDataList: NewsCardDataType[];
};

const NewCardList = ({ newsDataList }: NewsCardListProps) => (
  <div className="news-card-list">
    {newsDataList.map((newsData: NewsCardDataType) => (
      <NewsCard key={newsData.id} {...newsData} />
    ))}
  </div>
);
export default NewCardList;
