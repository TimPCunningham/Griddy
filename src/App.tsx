import Nav from './components/Nav/Nav';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div>
        <Nav />
      </div>
    </AuthProvider>
  );
}

export default App;
