import { BASE_URL, GET, POST } from 'tools/fetch'

export const getPreviewToken = () => GET(`${BASE_URL}/preview-token`)

export const loadPreviewTheme = ({ previewToken }) => GET(`${BASE_URL}/theme-preview?previewToken=${previewToken}`)

export const saveChanges = ({ previewToken, themeSettings, sectionSettings }) => POST(`${BASE_URL}/theme-preview`, { previewToken, themeSettings, sectionSettings })
