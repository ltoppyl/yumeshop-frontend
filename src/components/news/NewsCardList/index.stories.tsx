import type { Meta, Story } from '@storybook/react/types-6-0';
import { NewsCardDataType } from 'src/types/type';
import NewsCardList, { NewsCardListProps } from './index';

export default {
  component: NewsCardList,
  title: 'news/NewsCardList',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const dummyCardList: NewsCardDataType[] = [
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    date: '2017-07-21T17:32:28',
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
    newsTitle: 'メンテナンスのお知らせ!!!!!',
    mainText:
      '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
  },
  {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
    date: '2017-07-21T17:32:28',
    tagList: [
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
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
    newsTitle: 'メンテナンスのお知らせ',
    mainText:
      '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
  },
];

const Template: Story<NewsCardListProps> = (args) => <NewsCardList {...args} />;

export const newsCardList = Template.bind({});
newsCardList.args = {
  newsDataList: dummyCardList,
};
