//export const baseURL = process.env.REACT_APP_BASE_BACK_URL || 'http://31.131.28.206:8888/'
const protocol = process.env.REACT_APP_PROTOCOL
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_PORT

export const baseURL = protocol + '://' + host + ':' + port
