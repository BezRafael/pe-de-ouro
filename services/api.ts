import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.176:3000/api'
})

export default api;