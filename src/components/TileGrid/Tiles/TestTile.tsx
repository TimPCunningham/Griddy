import React from 'react'
import Tile, { TileProps } from '../Tile'

type TestTileProps = {
  title: string,
} & TileProps;

function TestTile({ title, children, ...props }: TestTileProps) {
  return (
    <Tile {...props}>
      <h1>{title}</h1>
      {children}
    </Tile>
  )
}

TestTile.settings = {
  maxW: 2,
  minH: 1,
  maxH: 2,
  w: 2,
  h: 2
}

export default TestTile;