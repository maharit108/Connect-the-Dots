import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'


import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'
import LeftForm from './components/TutorProfile/LeftForm'

function App () {
  const [user, setUser] = [null]

  return (
    <div className="App">
      <Header />
      {!user ? <Login setUser={setUser} /> : ''}
      <Route path='/tutors' user={user} render={() => (
        <LeftForm />
      )} />
    </div>
  )
}

export default App
