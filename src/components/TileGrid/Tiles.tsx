import CounterTileApp, { CounterTileAppConfig } from "../Apps/CounterTileApp";
import { TileAppData } from "./Types";

export const TILES: TileAppData[] = [
  {
    id: 'counter-app',
    app: <CounterTileApp />,
    ...CounterTileAppConfig
  }
]
export const getTileData = (id: string) => {
  console.log('id', id);
  const tileData = TILES.find(tile => tile.id === id);
  console.log('found', tileData);

  return tileData;
}