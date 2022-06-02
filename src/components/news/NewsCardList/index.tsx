import React from 'react';

import { NewsCardDataType } from 'src/types/type';
import NewsCard from '../NewsCard';

export type NewsCardListProps = {
  newsDataList: NewsCardDataType[];
};

const NewCardList = ({ newsDataList }: NewsCardListProps) => (
  <>
    {newsDataList.map((newsData: NewsCardDataType) => (
      <NewsCard {...newsData} />
    ))}
  </>
);
export default NewCardList;
