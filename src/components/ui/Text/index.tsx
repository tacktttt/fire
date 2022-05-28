import React from 'react'

import { PRIMARY, BLACK, GRAY, WHITE } from '../../../constants/colors'

export type Props = {
  value: string
  size?: '14' | '16' | '18' | '24' | '36'
  color?: typeof PRIMARY | typeof BLACK | typeof GRAY | typeof WHITE
}

export const Text: React.FC<Props> = ({
  value,
  size = '16',
  color = BLACK,
}: Props) => {
  return <div style={{ fontSize: `${size}px`, color: color }}>{value}</div>
}
