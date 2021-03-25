import './App.css';

import React, {useState} from 'react'
import { Route } from 'react-router-dom'

import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'
import IntakeForm from './components/IntakeForm/IntakeForm.js'
import TutorList from './components/TutorList/TutorList.js'
import SignOut from './components/SignOut/SignOut.js'
import ChangePwd from './components/ChangePwd/ChangePwd';

function App() {
  const [user, setUser] = useState(null)

  const setNewUser = (userData) => (
    setUser({ userData })
  )
  return (
    <div className="App">
          {console.log(user,'app')}
      <Header user={user}/>
          <Route exact path='/' render={() => (
            <Login setNewUser={setNewUser} />
          )} />
          <Route path='/student-info' render={() => (
            <IntakeForm user={user} />
          )} />
          <Route path='/tutors' render={() => (
            <TutorList user={user} />
          )} />
           <Route path='/sign-out' render={() => (
            <SignOut user={user} setUser={setNewUser} />
          )} />
          <Route path='/change-password' render={() => (
            <ChangePwd user={user} setUser={setNewUser} />
          )} />
      <Footer /> 
    </div>
  );
}

export default App;
