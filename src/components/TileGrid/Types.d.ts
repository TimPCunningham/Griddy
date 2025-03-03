import { Layout } from "react-grid-layout";

export type GridProps = ReactGridLayoutProps & React.HTMLAttributes<HTMLElement>;

export type TileAppConfig = {
  title: string,
  description: string,
  icon: null,
  settings: Partial<Layout>
};

export type TileAppData = {
  id: string,
  title: string,
  description: string,
  icon: null,
  app: React.ReactNode,
  settings: Partial<Layout>
}

export type TileShape = {
  app: React.ReactNode,
  id: string,
  settings: Partial<Layout>
}