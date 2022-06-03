import type { Meta, Story } from '@storybook/react/types-6-0';
import NewsCard from './index';

export default {
  component: NewsCard,
  title: 'news/NewsCard',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const Template: Story = ({ id, announcedDate, tags, title, detail }) => (
  <NewsCard
    id={id}
    announcedDate={announcedDate}
    tags={tags}
    title={title}
    detail={detail}
  />
);

export const newsCard = Template.bind({});
newsCard.args = {
  id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
  announcedDate: '2017-07-21T17:32:28',
  tags: [
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
  title: 'メンテナンスのお知らせ',
  detail:
    '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
};
