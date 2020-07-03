// avoid using React Fragment, when you dont need to
// its better to put h1 and h1 in 1 div :)
// also you dont need any data in props, because you show that
// there is no page found, therefore no data :)

import React from 'react'

const NotFound = ({ data }) => {
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound
