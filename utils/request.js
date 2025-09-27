import axios from "axios";

const request = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000
})

request.interceptors.request.use(config => {
    // 添加token
    // const token = "LOGIN:07df19f2f7a2a6cbe3f9a9477d911dca"
    // if (token) {
    //     config.headers.token = token
    // }
    return config
})

request.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

export default request