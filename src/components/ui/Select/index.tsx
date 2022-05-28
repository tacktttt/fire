import React from 'react'

import { Text } from '../Text'
import { sm } from '../../../constants/spaces'
import { PRIMARY, BLACK, GRAY, WHITE } from '../../../constants/colors'

export type Props = {
  values: Array<string>
  selected?: string
  onChange: (value: string) => void
}

export const Select: React.FC<Props> = ({
  values,
  selected,
  onChange,
}: Props) => {
  return (
    <div>
      {values.map((value) => (
        <div style={{ padding: sm }}>
          <button
            key={value}
            style={{
              width: '100%',
              padding: sm,
              borderRadius: sm,
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: value === selected ? PRIMARY : GRAY,
              textAlign: 'left',
              background: WHITE,
            }}
            onClick={() => onChange(value)}
          >
            <Text value={value} color={BLACK} />
          </button>
        </div>
      ))}
    </div>
  )
}
