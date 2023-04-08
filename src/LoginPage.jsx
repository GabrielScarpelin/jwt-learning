import { useContext, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Auth } from "./AuthContext"
import checkToken from "./checkToken"
export default function CreateAccountOrLogin(){
    const { token } = useContext(Auth)    
    useEffect(()=>{
        if(location.pathname === '/') location.pathname = '/login'
        console.log(token)
        checkToken(token).then(value => {
            if (value) location.pathname = '/home'
        })
    }, [])
    return (
        <div className="App">
            <div className="Left-side">
                <img src="../Illustration.png" alt="" />
            </div>
            <div className="Right-side">
                <Outlet />
            </div>
        </div>
    )
}