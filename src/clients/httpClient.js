import axios from 'axios'

// HTTP Client wrapper
const httpClient = {
  get: options =>
    axios({
      method: 'get',
      ...options
    }),
}

export default httpClient