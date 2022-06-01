import React from 'react';
import 'src/styles/NewsCard.css';

const NewsCard = () => (
  <div className="newsCard">
    <div className="dateAndLabel">
      <p className="date">2020/12/23</p>
      <p className="labelImportant">重要</p>
      <p className="labelNewItem">新商品</p>
    </div>
    <p>
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </p>
  </div>
);

export default NewsCard;
