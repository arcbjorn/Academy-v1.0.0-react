// really great that you use props validation :)

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkButton = ({to, label}) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  )
}

// its greate that you use props validation! :)
LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkButton
