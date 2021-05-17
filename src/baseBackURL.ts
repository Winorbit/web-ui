// export const baseURL = process.env.REACT_APP_BASE_BACK_URL || 'http://127.0.0.1:8000/'
const protocol = process.env.REACT_APP_PROTOCOL
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_PORT

export const baseURL = protocol + '://' + host + ':' + port

// export const RELEASE = process.env.REACT_APP_RELEASE || false
export const RELEASE = false
// export const RELEASE = true