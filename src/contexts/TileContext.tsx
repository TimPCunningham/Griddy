import { ReactNode, createContext, useContext, useState } from 'react';
import { TileAppData } from '../components/TileGrid/Types';

interface TileContextType {
  draggedTile: TileAppData | undefined;
  setDraggedTile: (tile: TileAppData | undefined) => void;
  isEditMode: boolean;
  setEditMode: (edit: boolean) => void;
}

const TileContext = createContext<TileContextType | undefined>(undefined);

export function TileProvider({ children }: { children: ReactNode }) {
  const [draggedTile, setDraggedTile] = useState<TileAppData | undefined>(undefined);
  const [isEditMode, setEditMode] = useState(false);

  const value = {
    draggedTile,
    setDraggedTile,
    isEditMode,
    setEditMode
  };

  return (
    <TileContext.Provider value={value}>
      {children}
    </TileContext.Provider>
  );
}

export function useTileContext() {
  const context = useContext(TileContext);
  if (context === undefined) {
    throw new Error('useTileContext must be used within a TileProvider');
  }
  return context;
} 