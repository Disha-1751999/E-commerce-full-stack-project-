import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import {Toaster} from "react-hot-toast";

function Layout({children}) {
  return (
    <div>
      <NavBar />
      {children}
      <Toaster position="top-right"/>
      <Footer/>
    </div>
  )
}

export default Layout
