import './App.css'
import { Route } from 'react-router-dom'

import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'
import LeftForm from './components/TutorProfile/LeftForm.js'

function App () {
  const [user, setUser] = [null]

  return (
    <div className="App">
      <Header />
      {!user ? <Login setUser={setUser} /> : ''}
      <Route path='/tutors' user={user} render={() => (
        <LeftForm />
      )} />
      <Footer />
    </div>
  )
}

export default App
