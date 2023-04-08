import { createContext, useState, useEffect } from "react"
const Auth = createContext(null)

function AuthContext({ children }){
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    return (
      <Auth.Provider value={{token, setToken}}>
        {children}
      </Auth.Provider>
    )
  }

export { Auth, AuthContext}