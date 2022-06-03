import React from 'react';
import dayjs from 'dayjs';

import { NewsCardDataType } from 'src/types/type';

// ano
const NewsCard = ({ announcedDate, tags, title, detail }: NewsCardDataType) => (
  <div className="news-card">
    <div className="news-card__data-and-tag">
      <p className="news-card__data-and-tag__date">
        {dayjs(announcedDate).format('YYYY/MM/DD')}
      </p>
      {tags.map((tag) => (
        <p
          key={tag.id}
          className={`news-card__data-and-tag__tag__${tag.color}`}
        >
          {tag.name}
        </p>
      ))}
    </div>
    <p>{title}</p>
    <p className="news-card__main-text">{detail}</p>
  </div>
);

export default NewsCard;
