import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/home/index.jsx'
import Objetivos from './routes/objetivos/index.jsx'
import Sobrenos from './routes/sobrenos/index.jsx'
import Solicitar from './routes/solicitar/index.jsx'
import ChatBot from './routes/ChatBot/index.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/objetivos",
        element:<Objetivos/>
      },
      {
        path:"/sobrenos",
        element:<Sobrenos/>
      },
      {
        path:"/solicitar",
        element:<Solicitar/>
      },
      {
        path:"/ChatBot",
        element:<ChatBot/>
      },
      {
        path:"/antiga",
        element:<Navigate to="/"/>
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
