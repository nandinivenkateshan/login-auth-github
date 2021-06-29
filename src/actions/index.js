
export const login = (params) => {
  return {
    type: 'LOGIN',
    ...params
  }
}
