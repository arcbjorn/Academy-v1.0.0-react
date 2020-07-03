// you dont really need an extra file for container.
// The simpler way for you would be to make a LoginPage
// (just combine your login-container and login compoinent)


import { connect } from 'react-redux'
import { logIn } from '../../actions/SessionActions'
import Login from '../../components/login/login.jsx'

const mapStateToProps = state => ({
  errorMessage: state.session.errorMessage,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
