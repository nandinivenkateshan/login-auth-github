import { setLocalStorage, getLocalStorageDetails } from '../util'

export const initialState = {
  isLoggedIn: getLocalStorageDetails('isLoggedIn') || false,
  user: getLocalStorageDetails('user') || null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      setLocalStorage(action.payload.user, action.payload.isLoggedIn)
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      }
    }
    case 'LOGOUT': {
      window.localStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    default:
      return state
  }
}
