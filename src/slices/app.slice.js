import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// State
// ------------------------------------

const initialState = {
  loggedIn: false,
}

// ------------------------------------
// Slices
// -----------------------------------

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => ({
      ...state,
      loggedIn: action.payload,
    }),
  },
})

// ------------------------------------
// Actions
// -----------------------------------

const setLoginAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(slice.actions.setLoggedIn(true))
  }, 1000)
}

// ------------------------------------
// Exports
// ------------------------------------

export const actions = { ...slice.actions, setLoginAsync }

export default slice.reducer
