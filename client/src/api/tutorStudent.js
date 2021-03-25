import apiUrl from '../apiConfig'
import axios from 'axios'

export const tutorIndex = user => {
  return axios({
    url: apiUrl + '/tutors',
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

export const studentCreate = student => {
  return axios({
    url: apiUrl + '/students',
    method: 'POST',
    // send the student object as our data for creating a student
    data: { student }
  })
}

export const studentUpdate = (id, student) => {
  return axios({
    url: apiUrl + '/students/' + id,
    method: 'PATCH',
    data: { student }
  })
}

export const studentDelete = id => {
  return axios({
    url: apiUrl + '/students/' + id,
    method: 'DELETE'
  })
}



