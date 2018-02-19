import axios from 'axios'


const isAuthenticated = () => {
  axios({
    method: 'GET',
    url: 'http://localhost:3500/auth/whoami',
    withCredentials: true
  })
  .then(res => {
    if (res.data.auth) {
      return false
    } else 
    return true
  })
  .catch(err => {
    return false
  })
}

export default isAuthenticated