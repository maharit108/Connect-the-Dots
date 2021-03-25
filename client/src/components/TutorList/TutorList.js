import React, {useEffect, useState} from 'react'

import './TutorList.css'
import Tutor from './Tutor/Tutor.js'

function TutorList() {
  const [tutorData, setTutorData] = useState([])

  useEffect(() => {
    const data = [
    {
      name:'John Doe', 
      photo:'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      name:'John Doe', 
      photo:'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      name:'John Doe', 
      photo:'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }]
    setTutorData(data)
  }, [])

  return (
    <div className='tutorlist__container'>
      <div className='tutorList__left'>
        <h2>Criteria</h2>
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
