import { auth, storage } from '../utils/firebase'
import { message } from '../utils/const'

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
  auth.onAuthStateChanged(me =>
    dispatch({
      type: LOGGED_IN,
      loggedIn: (me && me.emailVerified && me.displayName) || false,
      me: me || {},
      checked: true,
    }),
  )
}

const saveMe = me => dispatch =>
  dispatch({
    type: SAVE_ME,
    me,
  })

const signup = (email, password) => () =>
  new Promise(async (resolve, reject) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )
      if (user && !user.emailVerified) {
        await user.sendEmailVerification()
        resolve()
      }
      reject(new Error(message.auth.sendEmailConfirmationErr))
    } catch (err) {
      reject(err)
    }
  })

const login = (email, password) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      if (!user) reject(new Error('Failed to login. please try it again later'))
      if (!user.emailVerified) await user.sendEmailVerification()
      dispatch(saveMe(user))
      resolve({ emailVerified: user.emailVerified })
    } catch (err) {
      reject(err)
    }
  })

const logout = () => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      await auth.signOut()
      dispatch(saveMe(null))
      resolve()
    } catch (err) {
      reject(err)
    }
  })

const resetPassword = email => () =>
  new Promise(async (resolve, reject) => {
    try {
      await auth.sendPasswordResetEmail(email)
      resolve()
    } catch (err) {
      reject(err)
    }
  })

const updateMe = (name, file) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      // get current user
      const me = auth.currentUser
      if (!me) return

      // if the image is file, upload to firebase storage
      let path
      if (file && typeof file === 'object') {
        path = `users/${me.uid}`
        await storage.child(path).put(file)
      } else {
        path = 'default/profile.png'
      }

      // update me
      await me.updateProfile({ displayName: name, photoURL: path })
      dispatch(authenticate())
      resolve()
    } catch (err) {
      reject(err)
    }
  })

export const actions = {
  authenticate,
  saveMe,
  updateMe,
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
