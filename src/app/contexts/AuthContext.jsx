'use client'

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation' 

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  const login = (userData) => {
    setUser(userData)
    router.push('/')
  }

  const logout = () => {
    setUser(null)
    router.push('/login')
  }

  const register = (userData) => {

    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
