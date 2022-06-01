import type { Meta, Story } from '@storybook/react/types-6-0';
import Card from './index';

export default {
  component: Card,
  title: 'common/Card',
} as Meta;

const Template: Story = () => <Card />;

export const card = Template.bind({});
