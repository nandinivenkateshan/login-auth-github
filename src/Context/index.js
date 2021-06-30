import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state in context------------', state)

  return (
    <AuthContext.Provider
      value={{
        state, dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
