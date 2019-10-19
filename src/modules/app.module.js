// import { auth, storage } from '../utils/firebase'
// import { message } from '../utils/const'

// ------------------------------------
// Constants
// ------------------------------------

const SAVE_ME = 'SAVE_ME'
const LOGGED_IN = 'LOGGED_IN'

const initialState = {
  checked: false,
  loggedIn: false,
  me: {},
}

// ------------------------------------
// Actions
// ------------------------------------

export const authenticate = () => dispatch => {
  // TODO: authenticate user
  dispatch({
    type: LOGGED_IN,
    loggedIn: false,
    checked: true,
    me: null,
  })
}

const signup = (email, password) => dispatch => new Promise(async (resolve, reject) => {
  try {
    // TODO: signup
    dispatch({
      type: LOGGED_IN,
      loggedIn: true,
      checked: true,
      me: { email },
    })
    resolve()
  } catch (err) {
    reject(err)
  }
})

const login = (email, password) => dispatch => new Promise(async (resolve, reject) => {
  try {
    // TODO: login
    dispatch({
      type: LOGGED_IN,
      loggedIn: true,
      checked: true,
      me: { email },
    })
    resolve()
  } catch (err) {
    reject(err)
  }
})

const logout = () => dispatch => new Promise(async (resolve, reject) => {
  try {
    // TODO: logout
    dispatch({
      type: LOGGED_IN,
      loggedIn: false,
      checked: true,
      me: null,
    })
    resolve()
  } catch (err) {
    reject(err)
  }
})

const resetPassword = email => () => new Promise(async (resolve, reject) => {
  try {
    // TODO: reset password
    resolve()
  } catch (err) {
    reject(err)
  }
})

const saveMe = me => dispatch => dispatch({
  type: SAVE_ME,
  me,
})

export const actions = {
  authenticate,
  saveMe,
  signup,
  login,
  logout,
  resetPassword,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGGED_IN]: (state, { loggedIn, me, checked }) => ({
    ...state,
    loggedIn,
    me,
    checked,
  }),
  [SAVE_ME]: (state, { me }) => ({
    ...state,
    me,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
