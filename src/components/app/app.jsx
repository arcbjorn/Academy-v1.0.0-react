import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../../containers/private-route/private-route.jsx'
import LoginContainer from '../../containers/login-container/login-container'
import LinkButton from '../link-button/link-button.jsx'
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx'
import ProfileContainer from '../../containers/profile-container/profile-container.jsx'
import NotFound from '../not-found/not-found.jsx'

// TODO try to devide the imports above by spaces in order to disrtinguish imports
// in order of imporance

// TODO It is better to make your main App class, because it is the main source of logic
// and you might use the advantages of class in future implementations of new features
const App = () => (
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkButton to="/" label={'Главная'} />
          <LinkButton to="/profile" label={'Профиль'} />
          <LinkButton to="/login" label={'Логин'} />
          <LinkButton to="/kvazavr" label={'Не найдено'} />
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          {/* TODO When you have a Page - its really good to call it simple
          // for example: "LoginPage" instead of "Container" */}
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          {/* TODO the greate practice here will be to indicate that any route that you did not mention
          // is an "error" route, which means "Page was not found" error
          // the best practice is to indicate: path="*" , which means any other route, not mentioned by you
          // is a "404 Page not found" */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
)

export default App
