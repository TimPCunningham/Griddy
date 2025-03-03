import Nav from './components/Nav/Nav';
import TileDrawer from './components/TileGrid/TileDrawer/TileDrawer';
import TileGrid from './components/TileGrid/TileGrid';
import { AuthProvider } from './contexts/AuthContext';
import { TileProvider } from './contexts/TileContext';

function App() {
  return (
    <AuthProvider>
        <header>
          <Nav />
        </header>
        <main>
          <h1>Hello World</h1>
          <p>Welcome</p>
          <TileProvider>
            <TileDrawer />
            <TileGrid />
          </TileProvider>
        </main>
    </AuthProvider>
  );
}

export default App;
