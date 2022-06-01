import React from 'react';
import Image from 'next/image';

import 'src/styles/Card.css';

const Card = () => (
  <div className="card">
    <Image
      width={200}
      height={200}
      src="https://picsum.photos/300/200"
      alt="Image"
    />
    <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
  </div>
);

export default Card;
