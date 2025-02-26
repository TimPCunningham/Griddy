import React, { forwardRef } from 'react'

export type TileProps = React.PropsWithChildren
  & React.HTMLAttributes<HTMLDivElement>;

const Tile: React.FC<TileProps> = forwardRef<HTMLDivElement, TileProps>(({children, ...props }, ref) => {
  return (
    <div key="tile1" ref={ref} {...props}>
      <h1>Test</h1>
      {children}
    </div>
  );
})

export default Tile;