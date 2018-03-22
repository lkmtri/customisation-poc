import axios from 'axios'

export const BASE_URL = 'http://oms.localhost/api'

export const GET = (url) =>
  axios({
    method: 'get',
    url,
    headers: {
      credentials: 'include'
    }
  })
    .then(({ data }) => data)
    .catch(({ error, errorCode }) => ({ error, errorCode }))

export const POST = (url, data) => axios.post(url, data)
  .then(({ data }) => data)
  .catch(({ error, errorCode }) => ({ error, errorCode }))
