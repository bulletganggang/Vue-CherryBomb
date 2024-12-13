import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout: 3000,
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    ElMessage({
      message: err.response.data.detail[0].msg || '服务异常',
      type: 'error'
    })
    return Promise.reject(err)
  }
)

export default instance
