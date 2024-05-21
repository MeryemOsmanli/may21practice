import React from 'react'
import UserNavbar from './UserNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function MainLAyout() {
  return (
    <div>
         <UserNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLAyout
