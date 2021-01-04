import axios from 'axios'
import {baseURL} from '../../baseBackURL'

export const instance = axios.create({
    baseURL,
    // withCredentials: true,
})
