
export const setLocalStorage = (user, isLoggedIn) => {
  window.localStorage.setItem('user', JSON.stringify(user))
  window.localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
}
