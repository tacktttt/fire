import React from 'react'

import { sm } from '../../../constants/spaces'
import { GRAY, WHITE } from '../../../constants/colors'

export type Props = {
  value: string
  disabled?: boolean
  onChange: (value: string) => void
}

export const TextInput: React.FC<Props> = ({
  value,
  disabled,
  onChange,
}: Props) => {
  return (
    <div style={{ padding: sm }}>
      <input
        value={value}
        onChange={(value) => onChange(value.target.value)}
        disabled
        style={{
          width: '100%',
          backgroundColor: disabled ? GRAY : WHITE,
          padding: sm,
          borderRadius: sm,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: GRAY,
        }}
      />
    </div>
  )
}
