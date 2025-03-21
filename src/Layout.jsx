import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className=''>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout