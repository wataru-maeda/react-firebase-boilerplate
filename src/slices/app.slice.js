import { createSlice } from '@reduxjs/toolkit'
import { firestore, auth } from 'utils/firebase'

// ------------------------------------
// State
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  me: {},
}

// ------------------------------------
// Slices
// -----------------------------------

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMe: (state, action) => ({
      ...state,
      me: action.payload.me,
      loggedIn: action.payload.loggedIn,
      checked: true,
    }),
    setLoggedIn: (state, action) => ({
      ...state,
      loggedIn: action.payload,
    }),
  },
})

// ------------------------------------
// Actions
// -----------------------------------

export const authenticate = () => (dispatch) => {
  auth.onAuthStateChanged(async (me) => {
    if (!me) {
      return dispatch(
        slice.actions.setMe({
          loggedIn: false,
          checked: true,
          me: {},
        }),
      )
    }

    // get user from firestore
    const user = await firestore.collection('users').doc(me?.uid).get()

    // login
    return dispatch(
      slice.actions.setMe({
        loggedIn: me?.emailVerified && user.exists,
        me: user.exists
          ? { id: me?.uid, emailVerified: me?.emailVerified, ...user.data() }
          : {},
        checked: true,
      }),
    )
  })
}

const signup = ({ fullName, email, password }) => () =>
  new Promise(async (resolve, reject) => {
    try {
      // create user
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )

      // send confirmation email
      await user.sendEmailVerification()

      // store user info in firestore
      await firestore.collection('users').doc(user.uid).set({
        fullName,
        email,
      })

      resolve(user)
    } catch (err) {
      reject(err)
    }
  })

const login = ({ email, password }) => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      if (!user) reject(new Error('Failed to login. please try it again later'))
      if (!user.emailVerified) await user.sendEmailVerification()
      dispatch(authenticate())
      resolve(user)
    } catch (err) {
      reject(err)
    }
  })

const logout = () => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      await auth.signOut()
      dispatch(
        slice.actions.setMe({
          checked: true,
          loggedIn: false,
          me: {},
        }),
      )
      resolve()
    } catch (err) {
      reject(err)
    }
  })

const resetPassword = (email) => () => auth.sendPasswordResetEmail(email)

// ------------------------------------
// Exports
// ------------------------------------

export const actions = {
  ...slice.actions,
  authenticate,
  signup,
  login,
  logout,
  resetPassword,
}

export default slice.reducer
