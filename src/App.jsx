import React, { useContext, useEffect } from "react";
import { Auth } from "./AuthContext";
import checkToken from "./checkToken";

function App(){
    const { token, setToken } = useContext(Auth)
    useEffect(()=> {
        checkToken(token).then((value) => {
            console.log(value)
            if (!value) location.pathname = '/login' 
        })
    }, [])
    return (
        <div className="app">
            <p>Home Page</p>
        </div>
    )
}

export default App