
export const login = (params) => {
  return {
    type: 'LOGIN',
    payload: { ...params }
  }
}

export const logout = (params) => {
  return {
    type: 'LOGOUT',
    payload: { ...params }
  }
}

export const closeSnackBar = () => {
  return {
    type: 'CloseSnackBar'
  }
}
