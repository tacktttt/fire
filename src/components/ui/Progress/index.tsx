import React from 'react'
import { Progress as CProgress } from '@chakra-ui/react'

import { PRIMARY } from '../../../constants/colors'

export type Props = {
  value: number
}

export const Progress: React.FC<Props> = ({ value }: Props) => {
  return <CProgress value={value} height="8px" colorScheme="brand" />
}
