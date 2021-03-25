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
