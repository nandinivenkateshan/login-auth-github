export const initialState = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      window.localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn))
      window.localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      }
    }
    case 'LOGOUT': {
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

