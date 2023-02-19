
const GetDefaultHeaders = () => {
  let defaultHeaders = {}
  defaultHeaders['Content-Type'] = 'application/json'
  return defaultHeaders
}

export const fetchHttp = async (args) => {
  const url = `${args.path}`
  const config = {
    method: args.method,
    headers: Object.assign({}, GetDefaultHeaders(), args.headers),
    body: args.data
  }

  return window
    .fetch(url, config)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      //console.log('[Data from Api Pokemon]: ', data)
      return { data, error: null }
    })
    .catch((error) => {
      console.log('[Error from Api Pokemon]: ', error)
      return { data: null, error: error.message }
    })
}