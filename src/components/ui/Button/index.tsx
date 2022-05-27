import React from 'react'

import { Text } from '../Text'
import { sm } from '../../../constants/spaces'
import { PRIMARY, BACKGROUND, SHADOW } from '../../../constants/colors'

export type Props = {
  value: string
  disabled?: boolean
  onClick: () => void
}

export const Button: React.FC<Props> = ({
  value,
  disabled,
  onClick,
}: Props) => {
  const color = disabled ? SHADOW : PRIMARY

  return (
    <button
      disabled
      style={{
        width: '100%',
        backgroundColor: color,
        padding: sm,
        borderRadius: sm,
        borderStyle: 'none',
        textAlign: 'center',
        cursor: disabled ? undefined : 'pointer',
      }}
      onClick={onClick}
    >
      <Text value={value} color={BACKGROUND} />
    </button>
  )
}
