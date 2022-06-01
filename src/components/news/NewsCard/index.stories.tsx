import type { Meta, Story } from '@storybook/react/types-6-0';
import NewsCard from './index';

export default {
  component: NewsCard,
  title: 'news/NewsCard',
} as Meta;

const Template: Story = () => <NewsCard />;

export const footer = Template.bind({});
