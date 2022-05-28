import { Story, Meta } from '@storybook/react'

import { Select, Props } from './index'

export default {
  title: 'ui/Select',
  component: Select,
} as Meta

const Template: Story<Props> = (args) => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = {
  values: [
    '選択肢1',
    '選択肢2',
    '選択肢3',
    '選択肢4',
    '選択肢5',
    '選択肢6',
    '選択肢7',
    '選択肢8',
    '選択肢9',
  ],
  selected: '選択肢1',
  onChange: (value) => console.log(value),
}
