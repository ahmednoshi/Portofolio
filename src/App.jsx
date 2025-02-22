import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Componet/Layout/Layout'
// import Home from './Componet/Home/Home'
// import Services from './Componet/Services/Services';



const router= createBrowserRouter([
  // {path:'',element:<Layout/>,children:([
  //   {path:'',element:<Home/>},
  //   {path:'',element:<Services/>},

  // ])}

  {path:'',element:<Layout/>}
])



function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
