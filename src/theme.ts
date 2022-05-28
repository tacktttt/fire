import { extendTheme } from '@chakra-ui/react'

import { PRIMARY } from './constants/colors'

const colors = {
  brand: {
    50: PRIMARY,
    100: PRIMARY,
    200: PRIMARY,
    300: PRIMARY,
    400: PRIMARY,
    500: PRIMARY,
    600: PRIMARY,
    700: PRIMARY,
    800: PRIMARY,
    900: PRIMARY,
  },
}

export const theme = extendTheme({ colors })
