import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import SignIn from './Components/SignIn.jsx'
import AddTouristsSpot from './Components/AddTouristsSpot.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
      path:"/",
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:3000/spot')

    },
      {
      path:"/signin",
      element:<SignIn></SignIn>,

    },
      {
      path:"/add",
      element:<AddTouristsSpot></AddTouristsSpot>,

    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App /> 
    </RouterProvider>
  </React.StrictMode>,
)
