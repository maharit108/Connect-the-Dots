import React, {useEffect, useState} from 'react'

import './TutorList.css'
import Tutor from './Tutor/Tutor.js'
import Button from 'react-bootstrap/Button'

import { tutorIndex } from '../../api/tutorStudent.js'

function TutorList() {
  const [tutorData, setTutorData] = useState([])
  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [sendData, setSendData] = useState([])

  const handleGrade = e => {
    const { value } = e.target
    setGrade(value)
  }

  const handleSubject = e => {
    const { value } = e.target
    setSubject(value)
  }

  const findTutor = e => {
    e.preventDefault()
    let dataGrade
    console.log('sub', subject, grade)
    if (tutorData  && grade && !subject ) {
      dataGrade = tutorData.filter(tutor => tutor.grade === grade)
      setSendData([...dataGrade])
    } else if (tutorData && !grade && subject) {
      dataGrade = tutorData.filter(tutor => tutor.subject.toUpperCase() === subject.toUpperCase())
      setSendData([...dataGrade])
    } else if (tutorData && grade && subject ) {
      dataGrade = tutorData.filter(tutor => tutor.grade === grade && tutor.subject.toUpperCase() === subject.toUpperCase())
      setSendData([...dataGrade])
    } else {
      setSendData([])
    }
  }


  useEffect(() => {
    tutorIndex()
      .then(res => setTutorData(res.data))
      .catch(console.error)
    
      console.log(tutorData)
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
        <h3>Showing Best {sendData.length ? sendData.length : tutorData.length} matches</h3>
        <div className='tutorList__list'>
          {sendData.length ? (sendData.map((data, idx) => (
            <Tutor key={idx} tutorData={data} />
          ))) : (
            tutorData.map((data, idx) => (
            <Tutor key={idx} tutorData={data} />
          )))}
        </div>
      </div>
    </div>
  )
}

export default TutorList
