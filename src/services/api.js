import axios from 'axios'

export const predictMessage = (message) => {
  return axios.post('/predict', { message })
}
