import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopicButton } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
} as ComponentMeta<typeof TopicButton>;

const Template: ComponentStory<typeof TopicButton> = (args) => (
  <TopicButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
