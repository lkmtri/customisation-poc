import axios from 'axios'

const BASE_URL = 'http://localhost:3002'

const GET = (url) => axios.get(url)
  .then(({ data }) => data)
  .catch(({ error, errorCode }) => ({ error, errorCode }))

const getPreviewToken = ({ merchantId }) => GET(`${BASE_URL}/preview-token?merchantId=${merchantId}`)

export {
  getPreviewToken
}
