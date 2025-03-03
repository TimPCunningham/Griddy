import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Tile from './Tile/Tile';
import { GridProps, TileAppData, TileShape } from './Types';

import styles from './TileGrid.module.scss';
import { DragEvent, useState } from 'react';
import { randomBase64 } from '../../utils/random';
import { getTileData } from './Tiles';
import { useTileContext } from '../../contexts/TileContext';


export default function TileGrid() {
  const [tiles, setTiles] = useState<TileShape[]>([])
  const { draggedTile, setDraggedTile, isEditMode } = useTileContext();

  function onDropTile(layout: Layout[], layoutItem: Layout, evt: DragEvent) {
    let tileData = draggedTile;
    console.log('drop');

    if(!tileData) {
      const tileId = evt.dataTransfer.getData('plain/text');
      tileData = getTileData(tileId);
    }

    if(!tileData) { 
      // Throw toast message with error eventually.
      console.log('Could not find tile!');
      setDraggedTile(undefined);
      return;
    }

    const id = randomBase64();
    const newTile: TileShape = {
      id,
      app: tileData.app,
      settings: {
        i: id,
        x: layoutItem.x,
        y: layoutItem.y,
        ...tileData.settings
      }
    }

    setDraggedTile(undefined);
    setTiles(currentTiles => (
      [
        ...currentTiles,
        newTile
      ]
    ));
  }

  // Grid configuration
  const gridProps: GridProps = {
    className: styles.grid,
    cols: 12,              // Total number of grid columns
    rowHeight: 100,        // Height of one grid unit in pixels
    width: 1200,           // Total width of the grid
    compactType: null,     // Prevents automatic repositioning
    preventCollision: true,// Prevents tiles from overlapping
    isDroppable: true,
    isDraggable: isEditMode,
    isResizable: isEditMode,
    margin: [10, 10] as [number, number],      // Margin between items [x, y]
    onLayoutChange: (newLayout: Layout[]) => {
      console.log('Layout changed:', newLayout);
    },
    onDrop: onDropTile,
    onDropDragOver: () => {
      return { w: draggedTile?.settings.w ?? 1, h: draggedTile?.settings.h ?? 1 }
    },
    resizeHandles: ['s', 'se', 'e'] as Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'>
  };

  return (
    <div>
      <GridLayout {...gridProps}>
        {tiles.map((tileData) => (
          <Tile key={tileData.id} data-grid={tileData.settings}>
            {tileData.app}
          </Tile>
        ))}
      </GridLayout>
    </div>
  );
}