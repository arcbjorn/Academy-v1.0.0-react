// its better yo use axios here, because its got cool features
// https://github.com/axios/axios
// read here https://alligator.io/react/axios-react/

export const getData = (endPoint, API_ROOT) => {
  return fetch(`${API_ROOT}/${endPoint}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject('Error')
      }
    })
    .then(json => json)
    .catch(err => alert('getData error '))
}
