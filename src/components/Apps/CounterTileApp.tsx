import { useState } from "react";
import TileApp from "../TileGrid/Tile/TileApp";

import type { TileAppConfig } from "../TileGrid/Types";

function CounterTileApp() {
  const [ count, setCount ] = useState(0);

  const increment = () => setCount((curr) => curr + 1);
  const decrement = () => setCount((curr) => curr - 1);
  
  return (
    <TileApp>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    </TileApp>
  )
}

export default CounterTileApp;
export const CounterTileAppConfig: TileAppConfig = {
  title: 'Counter',
  description: 'A simple counting app.',
  icon: null,
  settings: {
    maxW: 2,
    minH: 1,
    maxH: 2,
    w: 2,
    h: 2
  }
}