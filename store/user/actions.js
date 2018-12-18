import axios from 'axios'

const login = (context, params) => {
  axios.post('/api/auth/login', params)
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
}

export default {
  login,
}