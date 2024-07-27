import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer.jsx/Footer'
import ProductSet from '../../features/ProductSet/ui/ProductSet'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <ProductSet/> */}
        <Footer/>
    </div>
  )
}

export default Layout