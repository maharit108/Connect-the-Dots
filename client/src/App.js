import './App.css';

import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'

function App() {
  const [user, setUser] = [null]

  return (
    <div className="App">
      <Header />
      {!user ? <Login setUser={setUser} /> : ''}
      <Footer />
    </div>
  );
}

export default App;
