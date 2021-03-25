import './App.css';

import React, {useState} from 'react'
import { Route } from 'react-router-dom'

import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'
import IntakeForm from './components/IntakeForm/IntakeForm.js'
import TutorList from './components/TutorList/TutorList.js'

function App() {
  const [user, setUser] = useState(null)

  const setNewUser = (userData) => (
    setUser({ userData })
  )
  return (
    <div className="App">
      <Header />
          <Route exact path='/' render={() => (
            <Login setNewUser={setNewUser} />
          )} />
          <Route path='/student-info' render={() => (
            <IntakeForm />
          )} />
          <Route path='/tutors' render={() => (
            <TutorList />
          )} />
      <Footer /> 
    </div>
  );
}

export default App;
