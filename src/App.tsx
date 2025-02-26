import Nav from './components/Nav/Nav';
import TileGrid from './components/TileGrid/TileGrid';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Hello World</h1>
        <p>Welcome</p>
        <TileGrid />
      </main>
    </AuthProvider>
  );
}

export default App;
