import React from 'react'
import Button from 'react-bootstrap/Button'

const LeftForm = ({ tutor, handleSubmit, handleChange }) => (
  <div className='row display-section'>
    <div className='col-6 offset-3'>
      <h3>Criteria</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Grade</label>
          <input className='form-control'
            required
            placeholder=""
            // This name should line up with the state we want to change
            name='grade'
            // value={tutor.grade}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Subject</label>
          <input className='form-control'
            required
            placeholder=""
            // This name should line up with the state we want to change
            name='subject'
            // value={tutor.subject}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Language</label>
          <input className='form-control'
            required
            placeholder=""
            // This name should line up with the state we want to change
            name='language'
            // value={tutor.language}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>City</label>
          <textarea className='form-control'
            required
            placeholder=""
            // This name should line up with the state we want to change
            name='city'
            // value={tutor.city}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <Button variant="outline-info" type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  </div>
)
export default LeftForm
