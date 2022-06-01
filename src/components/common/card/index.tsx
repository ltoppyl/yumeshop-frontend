import React from 'react';
import Image from 'next/image';

import 'src/styles/Card.css';

type Props = {
  imageUrl: string;
  cardName: string;
};
const Card = ({ imageUrl, cardName }: Props) => (
  <div className="card">
    <Image width={200} height={200} src={imageUrl} alt="Image" />
    <p>{cardName}</p>
  </div>
);

export default Card;
