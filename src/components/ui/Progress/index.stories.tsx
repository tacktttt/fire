import { Story, Meta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Progress, Props } from './index'
import { theme } from '../../../theme'

export default {
  title: 'ui/Progress',
  component: Progress,
} as Meta

const Template: Story<Props> = (args) => (
  <ChakraProvider theme={theme}>
    <Progress {...args} />
  </ChakraProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  value: 80,
}
