// thats actually a great idea to make a container for user profile,
// but the full page for profile will be more comfortable for user

import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/profile/profile.jsx'

class ProfileContainer extends PureComponent {
  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

// if you dont use any actions just use null in your connect function instead of mapDispatchToProps
// https://redux.js.org/recipes/writing-tests#connected-components

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
