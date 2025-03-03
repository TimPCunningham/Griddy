import React, { PropsWithChildren } from 'react'

export default function TileApp({ children, ...props }: PropsWithChildren) {
  return (
    <article {...props}>
      {children}
    </article>
  )
}
