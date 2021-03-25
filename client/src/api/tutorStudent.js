import apiUrl from '../apiConfig'
import axios from 'axios'

export const tutorIndex = user => {
  return axios({
    url: apiUrl + '/api/tutors',
    method: 'GET'
  })
}

// get a single tutor
export const tutorShow = id => {
  return axios({
    url: apiUrl + '/tutors/' + id,
    method: 'GET'
  })
}

export const studentIndex = user => {
  return axios({
    url: apiUrl + '/students',
    method: 'GET'
  })
}

// get a single student
export const studentShow = id => {
  return axios({
    url: apiUrl + '/students/' + id,
    method: 'GET'
  })
}

export const studentCreate = s => {
  return axios({
    url: apiUrl + '/api/students',
    method: 'POST',
    // send the student object as our data for creating a student
    data: { 
      studentName: s.studentName,
      gradeLevel: s.gradeLevel,
      subject: s.subjects,
      parentName: s.parentsName,
      parentEmail: s.parentsEmail,
      rel: s.rel, 
      respons: s.respons,
      effort: s.effort,
      atten: s.atten,
      conf: s.conf,
      list: s.list,
      org: s.org,
      resp: s.resp,
      comments: s.comments 
  }
  })
}

export const studentUpdate = (id, s) => {
  console.log(id, s, 'api')
  return axios({
    url: apiUrl + '/students/' + id,
    method: 'PATCH',
    data: { 
        studentName: s.studentName,
        gradeLevel: s.gradeLevel,
        subject: s.subjects,
        parentName: s.parentsName,
        parentEmail: s.parentsEmail,
        rel: s.rel, 
        respons: s.respons,
        effort: s.effort,
        atten: s.atten,
        conf: s.conf,
        list: s.list,
        org: s.org,
        resp: s.resp,
        comments: s.comments 
    }
  })
}

export const studentDelete = id => {
  return axios({
    url: apiUrl + '/students/' + id,
    method: 'DELETE'
  })
}



