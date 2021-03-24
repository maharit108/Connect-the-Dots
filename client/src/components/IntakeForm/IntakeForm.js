import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './IntakeForm.css'

function IntakeForm() {
  const [intakePayload, setIntakePayload] = useState({
    studentName: "",
    gradeLevel: "",
    subjects: [],
    parentsName: "",
    parentsEmail: "",
      rel: "10",
      respons: "10",
      effort: "10",
      atten: "10",
      conf: "10",
      list: "10",
      org: "10",
      resp: "10",
      comments: ""
  })


  const resetState = () => {
    setIntakePayload({
      studentName: "",
      gradeLevel: "",
      subjects: [],
      parentsName: "",
      parentsEmail: "",
        rel: "10",
        respons: "10",
        effort: "10",
        atten: "10",
        conf: "10",
        list: "10",
        org: "10",
        resp: "10",
        comments: ""
    })
  }


  const handleChange = e => {
    const {name, value} = e.target
    setIntakePayload(prevState => ({...prevState, [name] : value}))
  }

  const handleSubjectChange = e => {
    const { name, value} = e.target
    setIntakePayload(prevState => { 
      if (!prevState.subjects.includes(value)) {
       return {...prevState, [name] : [...prevState.subjects, value]}
      } else {
        return {...prevState}
      }
    })   
  }

  const removeSubject = e => {
    const id = e.target.id
    console.log(e.target.id)
    setIntakePayload(prevState => { 
      let subjectsCopy = [...prevState.subjects]
      const idx = subjectsCopy.indexOf(id)
      subjectsCopy.splice(idx, 1)
      return {...prevState, subjects: [...subjectsCopy]}
    })  
  }

  const onIntakeSubmit = e => {
    e.preventDefault()
    console.log(intakePayload)
    resetState()
  }

  return (
    <div className='intake__container'>
      <div className='intake__wrapper'>
        <Form onSubmit={onIntakeSubmit}>
          <div className='intake__top'>
            <div className='intake__topWrapper'>
            <h2>Let's Get You Started</h2>
            <Form.Group controlId="studentName">
              <Form.Label>Student's Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="studentName"
                value={intakePayload.studentName}
                placeholder="Enter student's Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="gradeLevel">
              <Form.Label>Student's Grade Level</Form.Label>
              <Form.Control
                required
                as="select"
                name="gradeLevel"
                value={intakePayload.gradeLevel}
                onChange={handleChange}>
                  <option>K</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="subjects">
              <Form.Label>Subjects interested in</Form.Label>
              <Form.Control
                required
                multiple
                as="select"
                name="subjects"
                value={intakePayload.subjects}
                onChange={handleSubjectChange}>
                  <option>Science</option>
                  <option>Maths</option>
                  <option>Social Studies</option>
                  <option>History</option>
                  <option>Economics</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Form.Control>
            </Form.Group>
            <div className='subjects__wrapper'>{intakePayload.subjects.map((sub,idx) => (<div key={sub} className='subjectDiv'><span>{sub}</span><span className='removeSub' onClick={removeSubject} id={sub}>X</span></div>))}</div>
            <br />
            <Form.Group controlId="parentsName">
              <Form.Label>Parent's Name</Form.Label>
              <Form.Control
                required
                name="parentsName"
                value={intakePayload.parentsName}
                type="text"
                placeholder="Enter Parent's Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="parentsEmail">
              <Form.Label>Parent's Email</Form.Label>
              <Form.Control
                required
                name="parentsEmail"
                value={intakePayload.parentsEmail}
                type="email"
                placeholder="Enter Parent's Email"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
          </div>
          </div>
          <div className='intake__mid'>
            <div className='intake__midWrapper'>
            <h2>General Assessment</h2>
            <p>On a scale of 0-10, 0 being a lot to 10 being well-adjusted, How would you describe/rate their:</p>
              <Form.Group contolId="studentFeat__rel">
                <Form.Label>Relationship Building<span className='rangeData'>{intakePayload.rel}</span></Form.Label>
                <Form.Control
                  name="rel"
                  value={intakePayload.rel}
                  type="range"
                  min="0"
                  max="10"
                  onChange={handleChange}
                />
              </Form.Group>
  
            <Form.Group controlId="studentFeat__response">
              <Form.Label>Sense of Responsibility<span className='rangeData'>{intakePayload.respons}</span></Form.Label>
              <Form.Control
                name="respons"
                value={intakePayload.respons}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentFeat__effort">
              <Form.Label>Effort put in Work<span className='rangeData'>{intakePayload.effort}</span></Form.Label>
              <Form.Control
                name="effort"
                value={intakePayload.effort}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentFeat__atten">
              <Form.Label>Attentive to lesson<span className='rangeData'>{intakePayload.atten}</span></Form.Label>
              <Form.Control
                name="atten"
                value={intakePayload.atten}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentFeat__conf">
              <Form.Label>Self Confidence<span className='rangeData'>{intakePayload.conf}</span></Form.Label>
              <Form.Control
                name="conf"
                value={intakePayload.conf}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentFeat__list">
              <Form.Label>Good Listener<span className='rangeData'>{intakePayload.list}</span></Form.Label>
              <Form.Control
                name="list"
                value={intakePayload.list}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentFeat__org">
              <Form.Label>Organizational Skills<span className='rangeData'>{intakePayload.org}</span></Form.Label>
              <Form.Control
                name="org"
                value={intakePayload.org}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentFeat__resp">
              <Form.Label>Sense of Respect<span className='rangeData'>{intakePayload.resp}</span></Form.Label>
              <Form.Control
                name="resp"
                value={intakePayload.resp}
                type="range"
                min="0"
                max="10"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          </div>
          <div className='intake__bottom'>
            <Form.Group controlId="studentComment">
              <Form.Label>Please share anything else you think is relevant to the student's life/personality</Form.Label>
              <Form.Control
                as="textarea"
                name="comments"
                value={intakePayload.comments}
                onChange={handleChange}
              />
            </Form.Group>
            <div className='emptyLine'></div>
            <Button variant='light' type="submit"> Submit </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default IntakeForm
