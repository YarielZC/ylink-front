import { AuthContext } from "./ExportAuthContext"
import { useState, useEffect } from "react"

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [ token, setToken ] = useState('')

  const login = ( userData, token ) =>{
    setUser(userData)
    setIsAuthenticated(true)
    setToken(token)

    localStorage.setItem('token', token)
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  const logOut  = () =>{
    setUser(null)
    setIsAuthenticated(false)
    setToken('')

    localStorage.removeItem('token')
    localStorage.removeItem('userData')
  }

  useEffect(()=>{
    const localToken = localStorage.getItem('token')
    const localUserData = localStorage.getItem('userData')

    if(localToken && localUserData){
      setToken(localToken)
      setUser(JSON.parse(localUserData))
      setIsAuthenticated(true)
    }else {
      setToken('')
      setIsAuthenticated(false)
    }
  }, [] )

  return (
    <AuthContext.Provider value={{user, isAuthenticated, token, login, logOut}}>
      {children}
    </AuthContext.Provider>
  )

}
