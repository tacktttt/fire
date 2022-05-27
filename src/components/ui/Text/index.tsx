import React from 'react'

import { PRIMARY, BASE, SHADOW, BACKGROUND } from '../../../constants/colors'

export type Props = {
  value: string
  size?: '14' | '16' | '18' | '24' | '36'
  color?: typeof PRIMARY | typeof BASE | typeof SHADOW | typeof BACKGROUND
}

export const Text: React.FC<Props> = ({
  value,
  size = '16',
  color = BASE,
}: Props) => {
  return <div style={{ fontSize: `${size}px`, color: color }}>{value}</div>
}
