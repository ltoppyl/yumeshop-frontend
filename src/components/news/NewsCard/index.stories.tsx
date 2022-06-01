import type { Meta, Story } from '@storybook/react/types-6-0';
import NewsCard from './index';

export default {
  component: NewsCard,
  title: 'news/NewsCard',
} as Meta;

const Template: Story = ({ date, tagList, mainText }) => (
  <NewsCard date={date} tagList={tagList} mainText={mainText} />
);

export const newsCard = Template.bind({});
newsCard.args = {
  date: '2017-07-21T17:32:28Z',
  mainText: 'テキスト入力の初期値 (StoreBook から上書き可能)',
  tagList: [
    {
      id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
      name: '重要',
      color: 'red',
      tag_group: 'information',
    },
    {
      id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
      name: 'メンテナンス',
      color: 'yellow',
      tag_group: 'information',
    },
  ],
};
