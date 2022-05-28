import { Story, Meta } from '@storybook/react'

import { TextInput, Props } from './index'

export default {
  title: 'ui/TextInput',
  component: TextInput,
} as Meta

const Template: Story<Props> = (args) => <TextInput {...args} />

export const Basic = Template.bind({})
Basic.args = {
  value: 'テキストがここに表示されます。',
}
