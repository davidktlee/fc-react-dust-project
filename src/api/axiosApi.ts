import axios from 'axios'

const areaApi = axios.create({
  baseURL: 'B552584/ArpltnInforInqireSvc',
  params: {
    serviceKey:
      'i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL++hdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ==',
    returnType: 'json',
  },
})

areaApi.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

export default areaApi
