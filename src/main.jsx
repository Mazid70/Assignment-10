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
import AllDetails from './Components/AllDetails.jsx'
import MyDetails from './Components/MyDetails.jsx'
import MySpotEdit from './Components/MySpotEdit.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Error from './Components/Error.jsx'
import Country from './Components/Country.jsx'
import CountryDetails from './Components/CountryDetails.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
      path:"/",
      element:<Home></Home>,
      loader:()=>fetch('https://assignment-10-server-rouge-two.vercel.app/spot')

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
      element:  <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>  ,

    },
      {
      path:"/all",
      element:<AllTouristSpot></AllTouristSpot>,
      loader:()=>fetch('https://assignment-10-server-rouge-two.vercel.app/userspot')

    },
      {
      path:"/details/:id",
      element:<PrivateRoute><Details></Details></PrivateRoute>  ,
      loader:({params})=>fetch(`https://assignment-10-server-rouge-two.vercel.app/spot/${params.id}`)

    },
      {
      path:"/all/details/:id",
      element:<PrivateRoute><AllDetails></AllDetails></PrivateRoute> ,
      loader:({params})=>fetch(`https://assignment-10-server-rouge-two.vercel.app/userspot/${params.id}`)

    },
     
      {
      path:"/spot/:email",
      element:<PrivateRoute><MyTouristSpot></MyTouristSpot></PrivateRoute>  ,
      loader:({params})=>fetch(`https://assignment-10-server-rouge-two.vercel.app/userspot/user/${params.email}`)

    },
      {
      path:"/allspot/:country",
      element:<Country></Country>  ,
      loader:({params})=>fetch(`http://localhost:3000/allspot/${params.country}`)

    },
      {
      path:"/allspot/:country/:id",
      element:<CountryDetails></CountryDetails>,
      loader:({params})=>fetch(`http://localhost:3000/allspot/${params.country}/${params.id}`)

    },
      {
      path:"/myspot/:email/:id",
      element:<MyDetails></MyDetails>,
      loader:({params})=>fetch(`https://assignment-10-server-rouge-two.vercel.app/userspot/user/${params.email}/${params.id}`)

    },
      {
      path:"/update/:email/:id",
      element:<MySpotEdit></MySpotEdit>,
      loader:({params})=>fetch(`https://assignment-10-server-rouge-two.vercel.app/userspot/user/${params.email}/${params.id}`)

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
