import React, { useContext, useState } from "react";
import Input from "../assets/Components/InputCredentials/input";
import EmailLogo from '../assets/Images/Vector.png'
import PasswordLogo from '../assets/Images/passwordLogo.png'
import { Link, Navigate } from "react-router-dom";
import validarEmail from "../assets/validarEmail";
import axios from "axios";


import { Auth } from "../AuthContext";
function LoginPage(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { setToken } = useContext( Auth )
    const HandleLogin = ()=>{
        if (validarEmail(email)) {
            axios.post('http://localhost:3000/login', {
                email: email,
                senha
            }).then(response => {
                if (response.status === 200 && response.data.Authenticate){
                    const token = response.data.token
                    setToken(token)
                    localStorage.setItem('token', token)
                    location.pathname = '/home'
                }
                else{
                    console.log('ERRO')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
    return (
        <div className="login">
            <div className="header">
                <h2 style={{fontSize: '2rem', fontWeight: '600'}}>Bem-vindo ao <br /> <span style={{color: '#6358DC', fontSize: '3rem'}}>TeamChat</span></h2>
            </div>
            <div className="inputs">
                <Input type={"email"} image={EmailLogo} placeholder={'example@gmail.com'} id="emailInput" setInputValue={setEmail}/>
                <Input type={"password"} image={PasswordLogo} placeholder={'*********'} id="passwordInput" setInputValue={setSenha}/>
            </div>
            <p className="forgot-password">Forgot Password?</p>
            <button className="login-button" onClick={HandleLogin}>Login</button>
            <p style={{textAlign: 'center', marginTop: '3rem'}}>Não tem uma conta? {<Link style={{color: '#6358DC'}} hrefLang="/signup">Registre-se</Link>}</p>
        </div>
    )
}

export default LoginPage