import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './Grid.module.scss';

// Define the layout type
interface LayoutItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const Grid: React.FC = () => {
  // Initial layout configuration
  const layout: LayoutItem[] = [
    { i: 'tile1', x: 0, y: 0, w: 2, h: 2 },
    { i: 'tile2', x: 2, y: 0, w: 2, h: 4 },
    { i: 'tile3', x: 4, y: 0, w: 2, h: 3 },
  ];

  // Grid configuration
  const gridProps = {
    className: 'layout',
    layout: layout,
    cols: 12,              // Total number of grid columns
    rowHeight: 100,        // Height of one grid unit in pixels
    width: 1200,           // Total width of the grid
    compactType: null as const,     // Prevents automatic repositioning
    preventCollision: true,// Prevents tiles from overlapping
    margin: [10, 10] as [number, number],      // Margin between items [x, y]
    onLayoutChange: (newLayout: LayoutItem[]) => {
      console.log('Layout changed:', newLayout);
    }
  };

  return (
    <div className={styles.gridContainer}>
      <GridLayout {...gridProps}>
        <div key="tile1" className={styles['grid-tile']}>
          <h3>Welcome</h3>
          <p>This is a draggable and resizable tile. Try moving it around!</p>
        </div>
        <div key="tile2" className={styles['grid-tile']}>
          <h3>Features</h3>
          <p>• Drag to move<br/>• Resize from corners<br/>• Snaps to grid</p>
        </div>
        <div key="tile3" className={styles['grid-tile']}>
          <h3>Getting Started</h3>
          <p>Add more tiles by updating the layout configuration.</p>
        </div>
      </GridLayout>
    </div>
  );
};

export default Grid; 