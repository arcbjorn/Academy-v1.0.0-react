import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './components/app/app.jsx'
import registerServiceWorker from './registerServiceWorker'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

// create a redux folder in your src folder
// create store inside of redux folder and declare the store there and import it in your index.js
// in the same redux folder create session folder for your session (but its actually better to call it user)
// (because its user that takes an ction logging in/out/register)
// in your session folder make session.actions.js, session.reducer.js, section.types.js (for your action types)

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
