import './App.css';

import Login from './components/Login/Login.js'

function App() {
  const [user, setUser] = [null]
  
  return (
    <div className="App">
      {!user ? <Login setUser={setUser} /> : ''}
    </div>
  );
}

export default App;
