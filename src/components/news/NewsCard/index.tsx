import React from 'react';
import 'src/styles/NewsCard.css';

type Props = {
  date: string;
  tagList: string[];
  mainText: string;
};

const NewsCard = ({ date, tagList, mainText }: Props) => (
  <div className="newsCard">
    <div className="dateAndTag">
      <p className="date">{date.slice(0, 10)}</p>
      {tagList.map((tag) => (
        // XXX: tag.### に対して警告が出ている (Property '###' does not exist on type 'string'.)
        <p
          key={tag.id}
          // FIXME: NewsCard.css に書き出したい (変数の扱いが分からなかった)
          style={{
            color: 'white',
            background: tag.color,
          }}
        >
          {tag.name}
        </p>
      ))}
    </div>
    <p>{mainText}</p>
  </div>
);

export default NewsCard;
