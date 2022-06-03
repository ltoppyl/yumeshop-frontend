import React from 'react';
import dayjs from 'dayjs';

import { NewsCardDataType } from 'src/types/type';

const NewsCard = ({ date, tagList, newsTitle, mainText }: NewsCardDataType) => (
  <div className="news-card">
    <div className="news-card__data-and-tag">
      <p className="news-card__data-and-tag__date">
        {dayjs(date).format('YYYY/MM/DD')}
      </p>
      {tagList.map((tag) => (
        <p
          key={tag.id}
          className={`news-card__data-and-tag__tag__${tag.color}`}
        >
          {tag.name}
        </p>
      ))}
    </div>
    <p>{newsTitle}</p>
    <p className="news-card__main-text">{mainText}</p>
  </div>
);

export default NewsCard;
