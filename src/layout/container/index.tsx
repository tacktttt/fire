import React, { ReactNode } from 'react'

export const Container: React.FC<{ children: ReactNode }> = (props: {
  children: ReactNode
}) => {
  return <div>{props.children}</div>
}
