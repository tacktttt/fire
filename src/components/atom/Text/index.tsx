import React from 'react'

export type Props = {
  value: string
  size?: '14' | '16' | '18' | '24' | '36'
  color?: string
}

export const Text: React.FC<Props> = ({
  value,
  size = '16',
  color = 'black',
}: Props) => {
  return <div style={{ fontSize: `${size}px`, color: color }}>{value}</div>
}
