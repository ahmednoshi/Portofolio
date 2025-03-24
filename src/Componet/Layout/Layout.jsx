import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Port from '../Port/Port'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import Btn from '../Btn/Btn'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Btn/>
    <Services/>
    <Skills/>
    <Port/>
    <Contact/>
    <Footer/>
    <Outlet/>


    </>
  )
}
