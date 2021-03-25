import React, {useState} from 'react'

import Button from 'react-bootstrap/Button'
import './Tutor.css'
import MessageSent from './../../../static/MessageSent.png'
import Modal from 'react-bootstrap/Modal'

function Tutor({ tutorData }) {
  const [modalShow, setModalShow] = useState(false)
  const onInfo = e => (
    console.log('info')
  )

  const onConnect = e => (
    setModalShow(true)
  )

  const handleClose = () => setModalShow(false)

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

      <Modal show={modalShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Body>
        <img src={MessageSent} alt='submitted' />
      </Modal.Body>
    </Modal>

    </div>
  )
}

export default Tutor
