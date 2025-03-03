import React, { forwardRef } from 'react';
import styles from './Tile.module.scss';

export type TileProps = React.PropsWithChildren
  & React.HTMLAttributes<HTMLDivElement>;

const Tile: React.FC<TileProps> = forwardRef<HTMLDivElement, TileProps>(({children, className, ...props }, ref) => {
  return (
    <div className={`${className} ${styles.tile}`} ref={ref} {...props}>
      {children}
    </div>
  );
})

export default Tile;