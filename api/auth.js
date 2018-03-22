import { BASE_URL, POST } from 'tools/fetch'

export const loginUser = ({ username, password }) => POST(`${BASE_URL}/login`, { username, password })
