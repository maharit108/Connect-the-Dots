<<<<<<< HEAD
import "./App.css";

import React, { useState } from "react";
import { Route } from "react-router-dom";

import Footer from "./components/Footer/Footer.js";
import Login from "./components/Login/Login.js";
import Header from "./components/Header/Header.js";
import IntakeForm from "./components/IntakeForm/IntakeForm.js";
import TutorList from "./components/TutorList/TutorList.js";
import SignOut from "./components/SignOut/SignOut.js";
import ChangePwd from "./components/ChangePwd/ChangePwd";
import Home from "./components/Home/Home.js";

function App() {
  const [user, setUser] = useState(null);
=======
import './App.css'

import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'
import IntakeForm from './components/IntakeForm/IntakeForm.js'
import TutorList from './components/TutorList/TutorList.js'
import SignOut from './components/SignOut/SignOut.js'
import ChangePwd from './components/ChangePwd/ChangePwd'
import Home from './components/Home/Home.js'

function App () {
  const [user, setUser] = useState(null)
>>>>>>> 3165d83f0d52daa4e9aa05166a275f77efe28b42

  const setNewUser = (userData) => setUser({ userData });
  return (
    <div className="App">
<<<<<<< HEAD
      {console.log(user, "app")}
      <Header user={user} />
      <Route exact path="/" render={() => <Home user={user} />} />
      <Route path="/student-info" render={() => <IntakeForm user={user} />} />
      <Route path="/tutors" render={() => <TutorList user={user} />} />
      <Route
        path="/sign-out"
        render={() => <SignOut user={user} setUser={setNewUser} />}
      />
      <Route
        path="/change-password"
        render={() => <ChangePwd user={user} setUser={setNewUser} />}
      />
      <Route path="/sign-in" render={() => <Login setNewUser={setNewUser} />} />
=======
      {console.log(user, 'app')}
      <Header user={user} />
      <Route user={user} exact path='/' render={() => (
        <Home user={user} />
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
      <Route path='/sign-in' render={() => (
        <Login setNewUser={setNewUser} />
      )} />
>>>>>>> 3165d83f0d52daa4e9aa05166a275f77efe28b42
      <Footer />
    </div>
  )
}

export default App
