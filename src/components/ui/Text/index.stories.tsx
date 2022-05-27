import { Story, Meta } from '@storybook/react'

import { Text, Props } from './index'

export default {
  title: 'ui/Text',
  component: Text,
} as Meta

const Template: Story<Props> = (args) => <Text {...args} />

export const Basic = Template.bind({})
Basic.args = {
  value: 'テキストがここに表示されます。',
}
