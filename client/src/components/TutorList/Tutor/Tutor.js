import React from 'react'

import Button from 'react-bootstrap/Button'
import './Tutor.css'

function Tutor({ tutorData }) {

  const onInfo = e => (
    console.log('info')
  )

  const onConnect = e => (
    console.log('connect')
  )

  return (
    <div className='tutor__container'>
      {console.log(tutorData)}
      <div className='tutor__left'>
        <div className='tutor__img'>
          <img src={tutorData.photo} alt='tutor' />       
        </div>
      </div>
      <div className='tutor__right'>
        <div className='tutor__head'>
          <h2>{tutorData.name}</h2>
          <div className='tutor__btn'>
            <Button variant='outline-success' onClick={onInfo}>Tutor info</Button>
            <Button variant='success' className='connect tutor-btn' onClick={onConnect}>Connect</Button>
          </div>
        </div>
        <div className='tutor__desc'>{tutorData.brief}</div>
      </div>
    </div>
  )
}

export default Tutor
