import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import LoginPage from './routes/login'
import Signup from './routes/signup'
import ErrorPage from './error-page'
import CreateAccountOrLogin from './LoginPage'
import { AuthContext } from './AuthContext'
import App from './App'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <CreateAccountOrLogin />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
    ]
  },
  {
    path: '/home',
    element: <App />
  }
  ,
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={rotas} />
    </AuthContext>
  </React.StrictMode>,
)

