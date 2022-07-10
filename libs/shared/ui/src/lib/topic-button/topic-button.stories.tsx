import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopicButton } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
} as ComponentMeta<typeof TopicButton>;

const Template: ComponentStory<typeof TopicButton> = (args) => (
  <div className="bg-slate-400 p-20">
    <TopicButton {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Next.js',
};
