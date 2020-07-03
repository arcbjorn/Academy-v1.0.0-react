// there is no need to make a private route container
// you can create class component for every page, whe you will be
// dynamically checking for AuthUser in your Auth
// based on that you redirect user to login OR let him view rendered page
// and its better to make your Page components a class

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.session.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
