import type { Meta, Story } from '@storybook/react/types-6-0';
import Card from './index';

export default {
  component: Card,
  title: 'common/Card',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const Template: Story = ({ imageUrl, cardName }) => (
  <Card imageUrl={imageUrl} cardName={cardName} />
);

export const dummyCommonCardList = {
  image: 'https://picsum.photos/300/200',
  cardName: '文房具セール',
};

export const card = Template.bind({});
card.args = {
  imageUrl: dummyCommonCardList.image,
  cardName: dummyCommonCardList.cardName,
};
