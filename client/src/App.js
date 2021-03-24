import './App.css';

import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'

function App() {
  const [user, setUser] = [null]

  return (
    <div className="App">
      <Header />
      {!user ? <Login setUser={setUser} /> : ''}
    </div>
  );
}

export default App;
