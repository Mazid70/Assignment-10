import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import SignIn from './Components/SignIn.jsx'
import AddTouristsSpot from './Components/AddTouristsSpot.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import SignUp from './Components/SignUp.jsx'
import AllTouristSpot from './Components/AllTouristSpot.jsx'
import MyTouristSpot from './Components/MyTouristSpot.jsx'
import Details from './Components/Details.jsx'
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
      path:"/signup",
      element:<SignUp></SignUp>

    },
      {
      path:"/add",
      element:<AddTouristsSpot></AddTouristsSpot>,

    },
      {
      path:"/all",
      element:<AllTouristSpot></AllTouristSpot>,
      loader:()=>fetch('http://localhost:3000/userspot')

    },
      {
      path:"/details/:id",
      element:<Details></Details>,
      loader:({params})=>fetch(`http://localhost:3000/spot/${params.id}`)

    },
      {
      path:"/spot/:email",
      element:<MyTouristSpot></MyTouristSpot>,
      loader:({params})=>fetch(`http://localhost:3000/userspot/${params.email}`)

    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
      <App /> 
    </RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
