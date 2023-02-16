import axios from 'axios'
import { BASE_URL, API_KEY } from 'main/utils/Constants'

const GetDefaultHeaders = (hasContentType = true, path) => {  
  const session = window.sessionStorage.getItem('avista-session')
  const token = JSON.parse(session).token
  const deviceId = JSON.parse(session).device_id
  
  const isAuthenticated= (token !== null && token !== '' )
  
  let defaultHeaders = {}
  if (isAuthenticated) {
    defaultHeaders['Authorization'] = 'Bearer ' + token
    defaultHeaders['DeviceID'] = deviceId
  }

  if(path.includes('oktopus')){
    defaultHeaders.apiKey = API_KEY
  }

  if (hasContentType) {
    defaultHeaders['Content-Type'] = 'application/json'
  }
  return defaultHeaders
}

export const fetchHttp = async (args, hasContentType) => {
  // const token = window.sessionStorage.getItem('token')
  // if ((!token) && window.location.pathname !== '/' && window.location.pathname !== '/login') {
  //   window.location.href = '/session-expired'
  //   return
  // }

  const url = `${BASE_URL}/${args.path}`
  const config = {
    method: args.method,
    headers: Object.assign({}, GetDefaultHeaders(hasContentType, args.path), args.headers),
    body: args.data
  }

  return window
    .fetch(url, config)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log('[Data from Api Pokemon]: ', data)
      return { data, error: null }
    })
    .catch((error) => {
      console.log('[Error from Api Pokemon]: ', error)
      return { data: null, error: error.message }
    })
}