import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import TestTile from './Tiles/TestTile';
import Tile from './Tile';

type LayoutItem = {
  i: string,
  x: number,
  y: number,
  w: number,
  h: number,
  minW?: number,
  maxW?: number,
  minH?: number,
  maxH?: number,
}

export default function TileGrid() {
  // Initial layout configuration
  const layout: LayoutItem[] = [
    { i: 'tile1', x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2 },
    { i: 'tile2', x: 2, y: 0, w: 2, h: 4 },
    { i: 'tile3', x: 4, y: 0, w: 2, h: 3 },
  ];


  // Grid configuration
  const gridProps = {
    className: 'layout',
    //layout: layout,
    cols: 12,              // Total number of grid columns
    rowHeight: 100,        // Height of one grid unit in pixels
    width: 1200,           // Total width of the grid
    compactType: null,     // Prevents automatic repositioning
    preventCollision: true,// Prevents tiles from overlapping
    margin: [10, 10] as [number, number],      // Margin between items [x, y]
    onLayoutChange: (newLayout: LayoutItem[]) => {
      console.log('Layout changed:', newLayout);
    },
    resizeHandles: ['s', 'se', 'e'] as Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'>
  };

  const tileDataGrid = {
    x: 0,
    y: 0,
    ...TestTile.settings
  }

  return (
    <div>
      <GridLayout {...gridProps}>
        {/* <div key="tile2" data-grid={{x: 0, y: 0, w: 2, h:2, minW: 1}}>T1</div> */}
        <Tile key={"tile1"} data-grid={{x: 0, y: 0, w: 2, h:2, minW: 1}}/>
        {/* <TestTile tileId="tile3" title="Custom Tile" key="tile3"/> */}
        <TestTile key="tile3" title="Testing" data-grid={tileDataGrid}/>
      </GridLayout>
    </div>
  );
}
