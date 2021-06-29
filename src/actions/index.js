
export const login = (params) => {
  return {
    type: 'LOGIN',
    payload: { ...params }
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
