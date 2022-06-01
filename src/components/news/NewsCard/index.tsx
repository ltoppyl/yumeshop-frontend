import React from 'react';
import 'src/styles/NewsCard.css';

type tagProps = {
  id: string;
  color: 'red' | 'yellow' | 'orange';
  name: string;
};

type Props = {
  date: string;
  tagList: tagProps[];
  newsTitle: string;
  mainText: string;
};

const NewsCard = ({ date, tagList, newsTitle, mainText }: Props) => (
  <div className="news-card">
    <div className="news-card__data-and-tag">
      <p className="news-card__data-and-tag__date">{date.slice(0, 10)}</p>
      {tagList.map((tag) => (
        <>
          {tag.color === 'red' && (
            <p key={tag.id} className="news-card__data-and-tag__tag__red ">
              {tag.name}
            </p>
          )}
          {tag.color === 'yellow' && (
            <p key={tag.id} className="news-card__data-and-tag__tag__yellow ">
              {tag.name}
            </p>
          )}
          {tag.color === 'orange' && (
            <p key={tag.id} className="news-card__data-and-tag__tag__orange ">
              {tag.name}
            </p>
          )}
        </>
      ))}
    </div>
    <p>{newsTitle}</p>
    <p>{mainText}</p>
  </div>
);

export default NewsCard;
