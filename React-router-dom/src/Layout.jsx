import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'




function Layout() {
  return (
   <>
   <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
