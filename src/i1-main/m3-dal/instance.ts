import axios from 'axios'

export const baseURL = 'http://31.131.28.206:8008/'
// export const baseURL = 'http://127.0.0.1:8000/'

export const instance = axios.create({
    baseURL,
    // withCredentials: true,
})
