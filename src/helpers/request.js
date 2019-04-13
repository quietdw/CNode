import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.withCredentials = false

export default function request(url, type = 'GET', data = {}) {

  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }

    if (type.toLocaleLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }

    axios(option).then(res => {
      if (res.statusText.toLocaleLowerCase() === 'ok') {
        resolve(res.data.data)
      } else {
        reject(res)
      }
    }).catch((error) => {
      reject(error)
    })
  })

}
