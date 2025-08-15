'use client' // <- Важно! Делаем этот компонент клиентским

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation' // <- вместо next/router

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  const login = (userData) => {
    setUser(userData)
    router.push('/') // редирект после успешного входа
  }

  const logout = () => {
    setUser(null)
    router.push('/login') // редирект после выхода
  }

  const register = (userData) => {
    // тут можно добавить регистрацию
    router.push('/login') // редирект после регистрации
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
