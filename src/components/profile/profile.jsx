import React from 'react'
import PropTypes from 'prop-types'

// avoid using React Fragment, when you dont need to
// its better to put h2 and p in 1 div :)

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

Profile.proptypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
