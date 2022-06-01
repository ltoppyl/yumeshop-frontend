import React from 'react';
import 'src/styles/NewsCard.css';

type tagProps = {
  id: string;
  color: string;
  name: string;
};

type Props = {
  date: string;
  tagList: tagProps[];
  newsTitle: string;
  mainText: string;
};

const NewsCard = ({ date, tagList, newsTitle, mainText }: Props) => (
  <div className="newsCard">
    <div className="dateAndTag">
      <p className="date">{date.slice(0, 10)}</p>
      {tagList.map((tag) => (
        <p
          key={tag.id}
          // TODO: NewsCard.css に書き出したい (変数の扱いが分からなかった)
          style={{
            color: 'white',
            background: tag.color,
          }}
        >
          {tag.name}
        </p>
      ))}
    </div>
    <p>{newsTitle}</p>
    <p>{mainText}</p>
  </div>
);

export default NewsCard;
