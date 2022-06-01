import React from 'react';
import Image from 'next/image';
import { useMediaLayout } from 'use-media';

import 'src/styles/Card.css';

type Props = {
  imageUrl: string;
  cardName: string;
};

const Card = ({ imageUrl, cardName }: Props) => {
  const isWide = useMediaLayout({ minWidth: '1000px' });
  return isWide === true ? (
    <div className="card__pc">
      <Image width={244} height={244} src={imageUrl} alt="Image" />
      <p>{cardName}</p>
    </div>
  ) : (
    <div className="card__mobile">
      <Image width={200} height={200} src={imageUrl} alt="Image" />
      <p>{cardName}</p>
    </div>
  );
};

export default Card;
