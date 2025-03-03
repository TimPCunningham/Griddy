import { DragEvent } from 'react';
import { getTileData, TILES } from '../Tiles';

import styles from './TileDrawer.module.scss';
import { useTileContext } from '../../../contexts/TileContext';


export default function TileDrawer() {
  const { setDraggedTile } = useTileContext();

  function onDragStart(evt: DragEvent, id: string) {
    console.log('id', id);
    setDraggedTile(getTileData(id));
    evt.dataTransfer.setData('plain/text', id);
  }

  return (
    <aside className={styles.container}>
      {TILES.map((tileData) => (
        <div key={tileData.id} className={styles.card} draggable={true} onDragStart={(evt) => onDragStart(evt, tileData.id)}>
          <div>
            {tileData.icon}
          </div>
          <div>
            <h3>{tileData.title}</h3>
            <p>{tileData.description}</p>
          </div>
        </div>
      ))}
    </aside>
  )
}
