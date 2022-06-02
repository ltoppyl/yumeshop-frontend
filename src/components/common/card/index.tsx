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
  const width = isWide ? 244 : 200;
  const height = isWide ? 244 : 200;
  const deviceType = isWide ? 'pc' : 'sp';

  return (
    <div className={`card ${deviceType}`}>
      <Image width={width} height={height} src={imageUrl} alt="cardName" />
      <p>{cardName}</p>
    </div>
  );
};

export default Card;
