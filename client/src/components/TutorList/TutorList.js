import React, {useEffect, useState} from 'react'

import './TutorList.css'
import Tutor from './Tutor/Tutor.js'
import Button from 'react-bootstrap/Button'

import { tutorIndex } from '../../api/tutorStudent.js'

function TutorList() {
  const [tutorData, setTutorData] = useState([])
  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')

  const handleGrade = e => {
    const { value } = e.target
    setGrade({grade: value })
  }

  const handleSubject = e => {
    const { value } = e.target
    setSubject({subject: value })
  }

  const findTutor = e => {
    e.preventDefault()
    console.log(grade, subject)
  }


  useEffect(() => {
    // const data = [
    // {
    //   name:'John Doe', 
    //   photo:'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
    //   brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //   grade: '5',
    //   subject: ['maths']
    // },
    // {
    //   name:'Bryan William', 
    //   photo:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 
    //   brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //   grade: '10',
    //   subject: ['science']
    // },
    // {
    //   name:'Anne Smith', 
    //   photo: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 
    //   brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //   grade: '8',
    //   subject: ['science']
    // }]
    tutorIndex()
      .then(res => setTutorData(res.data))
      .catch(console.error)
    
  }, [])

  return (
    <div className='tutorlist__container'>
      <div className='tutorList__left'>
        <h2>Criteria</h2>
        <div className='stdData__wrap'>
          <h3 className='stdPrompt'>Grade</h3>
          <input type='text' className='stdData' placeholder='5' value={grade} onChange={handleGrade}></input>
        </div>
        <div className='stdData__wrap'>
          <h3 className='stdPrompt'>Subject</h3>
          <input type='text' className='stdData' placeholder='Maths' value={subject} onChange={handleSubject}></input>
        </div>
        <Button className="find" onClick={findTutor}>Find a Tutor</Button>
      </div>
      <div className='tutorList__main'>
        <h3>Showing Best {tutorData.length} matches</h3>
        <div className='tutorList__list'>
          {tutorData.map((data, idx) => (
            <Tutor key={idx} tutorData={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TutorList
