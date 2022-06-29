import React from 'react'
// import Navbar from './Navbar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function NavbarLayout() {
  // console.log("1")
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

export default NavbarLayout