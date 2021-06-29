
export const login = (params) => {
  return {
    type: 'LOGIN',
    payload: { ...params }
  }
}
