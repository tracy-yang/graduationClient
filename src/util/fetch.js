import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5d63a05ef51eaa2a848fc139/graduationClient' // 设置全局的baseUrl

axios.interceptors.request.use(
  config => {
    // 需要设置的部分
    return config
  },
  error => {
    // 需要设置的部分
    return Promise.reject(error)
  })

// axios reponse拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data
    // 状态不为200的时候
    if (res.status !== 200) {
      Message({
        message: res.errorMsg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.errorMsg)
    } else {
      return Promise.resolve(response.data)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios