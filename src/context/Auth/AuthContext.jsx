import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = ( userData, token ) =>{
    setUserData(userData)
    setIsAuthenticated(true)

    localStorage.setItem('token', token)
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  const logOut  = () =>{
    setUser(null)
    setIsAuthenticated(false)

    localStorage.removeItem('token')
    localStorage.removeItem('userData')
  }

  useEffect(()=>{
    const localToken = localStorage.getItem('token')
    const localUserData = localStorage.getItem('userData')

    if(localToken && localUserData){
      setUser(JSON.parse(localUserData))
      setIsAuthenticated(true)
    }
  }, [] )

  return (
    <AuthContext.Provider value={{user, isAuthenticated, login, logOut}}>
      {children}
    </AuthContext.Provider>
  )

}
