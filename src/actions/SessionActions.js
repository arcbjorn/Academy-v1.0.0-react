
// create a redux folder in your src folder
// create store inside of redux folder and declare the store there and import it in your index.js
// in the same redux folder create session folder for your session (but its actually better to call it user)
// (because its user that takes an ction logging in/out/register)
// in your session folder make session.actions.js, session.reducer.js, section.types.js (for your action types)

// https://redux.js.org/recipes/reducing-boilerplate#actions
// actions is not a middleware
// dispatch is called in event handler , no need to dispatch them here :)
// when action is dispatched, it will trigger reducer, that will change the state
// you can give user notification about invalid cridentials in component
// no need for extra logic here :)

// filename should be session.actions.js
// it will make you do less mistakes in the future :)

import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function logIn(params, next) {
  return dispatch => {
    if (checkCredentials(params)) {
        dispatch({
          type: LOG_IN,
          payload: {
            name: params.userName,
          },
        });
      next()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMessage: 'Имя пользователя или пароль некорректны',
        },
        error: true,
      })
    }
  }
}
