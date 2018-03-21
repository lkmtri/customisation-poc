import axios from 'axios'

const BASE_URL = 'http://localhost:3002'

const GET = (url) => axios.get(url)
  .then(({ data }) => data)
  .catch(({ error, errorCode }) => ({ error, errorCode }))

const POST = (url, data) => axios.post(url, data)
  .then(({ data }) => data)
  .catch(({ error, errorCode }) => ({ error, errorCode }))

export const getPreviewToken = ({ merchantId }) => GET(`${BASE_URL}/preview-token?merchantId=${merchantId}`)

export const loadPreviewTheme = ({ previewToken }) => GET(`${BASE_URL}/theme-preview?previewToken=${previewToken}`)

export const saveChanges = ({ previewToken, themeSettings, sectionSettings }) => POST(`${BASE_URL}/theme-preview`, { previewToken, themeSettings, sectionSettings })
