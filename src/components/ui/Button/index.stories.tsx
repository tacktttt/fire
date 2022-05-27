import { Story, Meta } from '@storybook/react'

import { Button, Props } from './index'

export default {
  title: 'ui/Button',
  component: Button,
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  value: 'テキストがここに表示されます。',
}
